this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

library(plyr)
library(dplyr)
library(reshape)
library(ggplot2)
library(gtable)
library(lme4)
library(tidyverse)
library(lmerTest)
library(bootstrap)
library(ggpubr)
library(stringr)

`%notin%` <- Negate(`%in%`)
raw_data_path <- "whether_pilot.csv"
data<-read.csv(raw_data_path)

########Data pre-processing##########
#Remove practice items and attention checks
participants_to_exclude = c(688)
data_no_practice <- data %>%
  filter(block_number %in% c(1,2,3,4))%>%
  filter(workerid %notin% participants_to_exclude)

#By-participant z-scoring raw responses
data_no_practice <- data_no_practice %>%
  group_by(workerid) %>%  # Group by participant ID
  mutate(z_score = (response - mean(response)) / sd(response)) %>%  # Calculate z-score
  ungroup()  

#################Plots####################
###Looking at the 4 critical conditions first. 
data_island <- data_no_practice %>%
  filter(type == "test")
block_means = data_island %>%
  group_by(block_number, length, stru_type) %>%
  summarize(response = mean(response), z_score = mean(z_score)) %>%
  ungroup()
cbPalette = c("#e69d00", "#009e74","#d55e00",  "#cc79a7", "#0071b2")
#raw rating plot
island_raw_plot <- ggplot(data_island, aes(x = block_number, y=response, linetype = stru_type, fill=length)) +
  geom_point(data=block_means,alpha=.9) +
  xlab("block number") +
  ylab("average acceptability")+
  geom_smooth(method=lm) +
  scale_fill_manual(values=cbPalette) +
  theme_bw()
island_raw_plot
#z-score plot
island_zscore_plot <- ggplot(data_island, aes(x = block_number, y=z_score, linetype = stru_type, fill=length)) +
  geom_point(data=block_means,alpha=.9) +
  xlab("block number") +
  ylab("average acceptability z-score")+
  geom_smooth(method=lm) +
  scale_fill_manual(values=cbPalette) +
  theme_bw()
island_zscore_plot


###Looking at the filler conditions.
data_filler <- data_no_practice %>%
  filter(type == "filler") %>%
  mutate(filler_cond = str_sub(unique_id, 2, 3)) 
block_means_filler = data_filler %>%
  group_by(block_number, filler_cond) %>%
  summarize(response = mean(response), z_score = mean(z_score)) %>%
  ungroup()
#filler raw rating plot
filler_raw_plot <- ggplot(data_filler, aes(x = block_number, y=response)) +
  geom_point(data=block_means_filler,alpha=.9) +
  xlab("block number") +
  ylab("average acceptability z-score")+
  geom_smooth(method=lm) +
  scale_fill_manual(values=cbPalette) +
  theme_bw() + 
  facet_wrap(~filler_cond)
filler_raw_plot
#filler z-score plot
filler_zscore_plot <- ggplot(data_filler, aes(x = block_number, y=z_score)) +
  geom_point(data=block_means_filler,alpha=.9) +
  xlab("block number") +
  ylab("average acceptability z-score")+
  geom_smooth(method=lm) +
  scale_fill_manual(values=cbPalette) +
  theme_bw() + 
  facet_wrap(~filler_cond)
filler_zscore_plot

#########Stats############
#centering and scaling all predictors
data_island$block_number <- scale(data_island$block_number, center = TRUE, scale = FALSE)
data_island$length <- as.factor(data_island$length)
data_island$stru_type <- as.factor(data_island$stru_type)

data_island$length <- relevel(data_island$length, ref = "short")
data_island$stru_type <- relevel(data_island$stru_type, ref = "nonisl")
contrasts(data_island$length) <- contr.sum(2)
contrasts(data_island$stru_type) <- contr.sum(2)

#z-score and raw models for island items
model_island_zscore <- lmer(z_score~block_number*stru_type*length+ 
                    (1+block_number*stru_type*length|workerid)+
                    (1+block_number*stru_type*length|item_number), 
                  data = data_island)
summary(model_island_zscore)


model_island_raw <- lmer(response~block_number*stru_type*length+ 
                              (1+block_number*stru_type*length|workerid)+
                              (1+block_number*stru_type*length|item_number), 
                            data = data_island)
summary(model_island_raw)

#filler analysis
data_filler$block_number <- scale(data_filler$block_number, center = TRUE, scale = FALSE)
data_filler$filler_cond <- as.factor(data_filler$filler_cond)

model_filler_zscore <- lmer(z_score~block_number*filler_cond+ 
                              (1|workerid)+
                              (1|item_number), 
                            data = data_filler)
summary(model_filler_zscore)

