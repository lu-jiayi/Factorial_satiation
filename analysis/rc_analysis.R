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
library(brms)
library(BayesFactor)

`%notin%` <- Negate(`%in%`)
raw_data_path <- "rc_combined.csv"
data<-read.csv(raw_data_path)

########Data pre-processing##########
#Remove practice items and attention checks
participants_to_exclude = c(2700, 2417, 2737, 1455, 2728, 2704, 2527, 2552, 2548, 2372, 2742, 2411, 2414, 2671, 2420)
data_no_practice <- data %>%
  filter(block_number %in% c(1,2,3,4))%>%
  filter(workerid %notin% participants_to_exclude)

#remove problematic item #4
data_no_practice <- subset(data_no_practice, item_number != "4")

#By-participant z-scoring raw responses
data_no_practice <- data_no_practice %>%
  group_by(workerid) %>%  # Group by participant ID
  mutate(z_score = (response - mean(response)) / sd(response)) %>%  # Calculate z-score
  ungroup()  

#inattentive participant removal: find filler items more than 3 standard deviations away from the item mean
filler <- data_no_practice %>%
  filter(type == "filler") %>%
  mutate(filler_cond = str_sub(unique_id, 2, 3)) 
removed_df <- filler %>%
  group_by(unique_id) %>%  
  mutate(filler_z = (z_score - mean(z_score)) / sd(z_score)) %>%  # Calculate z-score
  ungroup()  %>%
  filter(filler_z < -2 | filler_z > 2) %>%
  group_by(workerid) %>%
  summarize(removed_count = n()) %>%
  filter(removed_count > 5)

# Extract the list of workerids with more than 4 outlier exclusions
inattentive_list <- removed_df$workerid
# remove data by participants on the inattentive list
data_no_practice <- data_no_practice %>%
  filter(workerid %notin% inattentive_list)

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

#DD score plot
data_island_dd <- data_island %>%
  group_by(block_number, workerid) %>%
  mutate(
    long_nonisl = mean(z_score[stru_type == "nonisl" & length == "long"]),
    long_isl = mean(z_score[stru_type == "isl" & length == "long"]),
    short_nonisl = mean(z_score[stru_type == "nonisl" & length == "short"]),
    short_isl = mean(z_score[stru_type == "isl" & length == "short"]),
    DD = (long_nonisl - long_isl) - (short_nonisl - short_isl)
  ) %>%
  ungroup() %>%
  select(-long_nonisl, -long_isl, -short_nonisl, -short_isl) # remove intermediate columns
block_means_dd = data_island_dd %>%
  group_by(block_number) %>%
  summarize(DD = mean(DD)) %>%
  ungroup()
DD_plot <- ggplot(data_island_dd, aes(x = block_number, y=DD)) +
  geom_point(data=block_means_dd,alpha=.9) +
  xlab("Block number") +
  ylab("Average DD score")+
  geom_smooth(method=lm) +
  scale_fill_manual(values=cbPalette) +
  theme_bw()
DD_plot
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

#z-score 2*2*4 model for island items
lmer_island_zscore <- lmer(z_score~block_number*stru_type*length+ 
                             (1+block_number:stru_type + block_number:length + stru_type*length|workerid)+
                             (1 + stru_type*length|item_number), 
                           data = data_island)
summary(lmer_island_zscore)

lm_island_zscore <- lm(z_score~block_number*stru_type*length,
                           data = data_island)
summary(lm_island_zscore)

#BF analysis with three prior widths

BF_generalm <- generalTestBF(z_score~block_number*stru_type*length, data = data_island)

BF_generalm

BF_generalw <- generalTestBF(z_score~block_number*stru_type*length, data = data_island, rscaleFixed = "wide")

BF_generalw

BF_generalu <- generalTestBF(z_score~block_number*stru_type*length, data = data_island, rscaleFixed = "ultrawide")

BF_generalu

# BIC-based Bayes Factor analysis for the 3-way interaction term 
null_model_3way = update(lmer_island_zscore, formula = ~ . -block_number:stru_type:length)
summary(null_model_3way)
BF_3way = exp((BIC(null_model_3way) - BIC(lmer_island_zscore))/2)
BF_3way


#######################

#filler analysis
data_filler$block_number <- scale(data_filler$block_number, center = TRUE, scale = FALSE)
data_filler$filler_cond <- as.factor(data_filler$filler_cond)
data_filler$filler_cond <- relevel(data_filler$filler_cond, ref = "71")


model_filler11_zscore <- lmer(z_score~block_number+ 
                              (1 + block_number|workerid), 
                            data = subset(data_filler, filler_cond == "11"))
summary(model_filler11_zscore)
BF_filler11m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "11"), rscaleFixed = "medium")
BF_filler11m
BF_filler11w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "11"), rscaleFixed = "wide")
BF_filler11w
BF_filler11u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "11"), rscaleFixed = "ultrawide")
BF_filler11u


model_filler12_zscore <- lmer(z_score~block_number+ 
                              (1 + block_number|workerid), 
                            data = subset(data_filler, filler_cond == "12"))
summary(model_filler12_zscore)
BF_filler12m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "12"), rscaleFixed = "medium")
BF_filler12m
BF_filler12w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "12"), rscaleFixed = "wide")
BF_filler12w
BF_filler12u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "12"), rscaleFixed = "ultrawide")
BF_filler12u


model_filler21_zscore <- lmer(z_score~block_number+ 
                              (1 |workerid), 
                            data = subset(data_filler, filler_cond == "21"))
summary(model_filler21_zscore)
BF_filler21m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "21"), rscaleFixed = "medium")
BF_filler21m
BF_filler21w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "21"), rscaleFixed = "wide")
BF_filler21w
BF_filler21u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "21"), rscaleFixed = "ultrawide")
BF_filler21u


model_filler31_zscore <- lmer(z_score~block_number+ 
                              (1 + block_number|workerid), 
                            data = subset(data_filler, filler_cond == "31"))
summary(model_filler31_zscore)
BF_filler31m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "31"), rscaleFixed = "medium")
BF_filler31m
BF_filler31w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "31"), rscaleFixed = "wide")
BF_filler31w
BF_filler31u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "31"), rscaleFixed = "ultrawide")
BF_filler31u





model_filler32_zscore <- lmer(z_score~block_number+ 
                              (1 + block_number|workerid), 
                            data = subset(data_filler, filler_cond == "32"))
summary(model_filler32_zscore)
BF_filler32m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "32"), rscaleFixed = "medium")
BF_filler32m
BF_filler32w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "32"), rscaleFixed = "wide")
BF_filler32w
BF_filler32u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "32"), rscaleFixed = "ultrawide")
BF_filler32u




model_filler41_zscore <- lmer(z_score~block_number+ 
                              (1 |workerid), 
                            data = subset(data_filler, filler_cond == "41"))
summary(model_filler41_zscore)
BF_filler41m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "41"), rscaleFixed = "medium")
BF_filler41m
BF_filler41w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "41"), rscaleFixed = "wide")
BF_filler41w
BF_filler41u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "41"), rscaleFixed = "ultrawide")
BF_filler41u



model_filler42_zscore <- lmer(z_score~block_number+ 
                              (1 + block_number|workerid), 
                            data = subset(data_filler, filler_cond == "42"))
summary(model_filler42_zscore)
BF_filler42m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "42"), rscaleFixed = "medium")
BF_filler42m
BF_filler42w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "42"), rscaleFixed = "wide")
BF_filler42w
BF_filler42u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "42"), rscaleFixed = "ultrawide")
BF_filler42u


model_filler51_zscore <- lmer(z_score~block_number+ 
                                (1 + block_number|workerid), 
                              data = subset(data_filler, filler_cond == "51"))
summary(model_filler51_zscore)
BF_filler51m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "51"), rscaleFixed = "medium")
BF_filler51m
BF_filler51w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "51"), rscaleFixed = "wide")
BF_filler51w
BF_filler51u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "51"), rscaleFixed = "ultrawide")
BF_filler51u



model_filler71_zscore <- lmer(z_score~block_number+ 
                                (1 + block_number|workerid), 
                              data = subset(data_filler, filler_cond == "71"))
summary(model_filler71_zscore)
BF_filler71m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "71"), rscaleFixed = "medium")
BF_filler71m
BF_filler71w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "71"), rscaleFixed = "wide")
BF_filler71w
BF_filler71u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "71"), rscaleFixed = "ultrawide")
BF_filler71u





model_filler72_zscore <- lmer(z_score~block_number+ 
                                (1 + block_number|workerid), 
                              data = subset(data_filler, filler_cond == "72"))
summary(model_filler72_zscore)
BF_filler72m <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "72"), rscaleFixed = "medium")
BF_filler72m
BF_filler72w <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "72"), rscaleFixed = "wide")
BF_filler72w
BF_filler72u <- generalTestBF(z_score~block_number, data = subset(data_filler, filler_cond == "72"), rscaleFixed = "ultrawide")
BF_filler72u

#


data_island_dist <- data_island %>%
  group_by(block_number, workerid) %>%
  mutate(
    long_nonisl = mean(z_score[stru_type == "nonisl" & length == "long"]),
    long_isl = mean(z_score[stru_type == "isl" & length == "long"]),
    short_nonisl = mean(z_score[stru_type == "nonisl" & length == "short"]),
    short_isl = mean(z_score[stru_type == "isl" & length == "short"]),
    dist = (short_nonisl - long_nonisl) ) %>%
  ungroup() %>%
  select(-long_nonisl, -long_isl, -short_nonisl, -short_isl) # remove intermediate columns
model_dist <- lm(dist~block_number,
                 data = data_island_dist)
summary(model_dist)
data_island_dist$workerid <- as.factor(data_island_dist$workerid)
BF_dist <- lmBF(dist~block_number, data = data_island_dist, whichRandom = "workerid", rscaleFixed = "medium")
BF_dist

