// note: for FILL/UNGRAM, the ordering isn't what you'd expect
const all_stimuli = [
  {"unique_id": 11, "stru_type": "nonisl", "length": "short", "item": 1, "type": "test", "expected_rating": "", "sentence": "Who thought that the chef overcooked the dish?"},
  {"unique_id": 12, "stru_type": "isl", "length": "short", "item": 1, "type": "test", "expected_rating": "", "sentence": "Who blamed the chef that overcooked the dish?"},
  {"unique_id": 13, "stru_type": "nonisl", "length": "long", "item": 1, "type": "test", "expected_rating": "", "sentence": "What did the waiter think that the chef overcooked?"},
  {"unique_id": 14, "stru_type": "isl", "length": "long", "item": 1, "type": "test", "expected_rating": "", "sentence": "What did the waiter blame the chef that overcooked?"},
  {"unique_id": 21, "stru_type": "nonisl", "length": "short", "item": 2, "type": "test", "expected_rating": "", "sentence": "Who thought that the tenant repainted the room?"},
  {"unique_id": 22, "stru_type": "isl", "length": "short", "item": 2, "type": "test", "expected_rating": "", "sentence": "Who thanked the tenant that repainted the room?"},
  {"unique_id": 23, "stru_type": "nonisl", "length": "long", "item": 2, "type": "test", "expected_rating": "", "sentence": "What did the landlord think that the tenant repainted?"},
  {"unique_id": 24, "stru_type": "isl", "length": "long", "item": 2, "type": "test", "expected_rating": "", "sentence": "What did the landlord thank the tenant that repainted?"},
  {"unique_id": 31, "stru_type": "nonisl", "length": "short", "item": 3, "type": "test", "expected_rating": "", "sentence": "Who thought that the gymnast created the routine?"},
  {"unique_id": 32, "stru_type": "isl", "length": "short", "item": 3, "type": "test", "expected_rating": "", "sentence": "Who praised the gymnast that created the routine?"},
  {"unique_id": 33, "stru_type": "nonisl", "length": "long", "item": 3, "type": "test", "expected_rating": "", "sentence": "What did the coach think that the gymnast created?"},
  {"unique_id": 34, "stru_type": "isl", "length": "long", "item": 3, "type": "test", "expected_rating": "", "sentence": "What did the coach praise the gymnast that created?"},
  {"unique_id": 41, "stru_type": "nonisl", "length": "short", "item": 4, "type": "test", "expected_rating": "", "sentence": "Who thought that the student finished the book?"},
  {"unique_id": 42, "stru_type": "isl", "length": "short", "item": 4, "type": "test", "expected_rating": "", "sentence": "Who rewarded the student that finished the book?"},
  {"unique_id": 43, "stru_type": "nonisl", "length": "long", "item": 4, "type": "test", "expected_rating": "", "sentence": "What did the teacher think that the student finished?"},
  {"unique_id": 44, "stru_type": "isl", "length": "long", "item": 4, "type": "test", "expected_rating": "", "sentence": "What did the teacher reward the student that finished?"},
  {"unique_id": 51, "stru_type": "nonisl", "length": "short", "item": 5, "type": "test", "expected_rating": "", "sentence": "Who thought that the assistant deleted the file?"},
  {"unique_id": 52, "stru_type": "isl", "length": "short", "item": 5, "type": "test", "expected_rating": "", "sentence": "Who rebuked the assistant that deleted the file?"},
  {"unique_id": 53, "stru_type": "nonisl", "length": "long", "item": 5, "type": "test", "expected_rating": "", "sentence": "What did the manager think that the assistant deleted?"},
  {"unique_id": 54, "stru_type": "isl", "length": "long", "item": 5, "type": "test", "expected_rating": "", "sentence": "What did the manager rebuke the assistant that deleted?"},
  {"unique_id": 61, "stru_type": "nonisl", "length": "short", "item": 6, "type": "test", "expected_rating": "", "sentence": "Who thought that the suspect stole the necklace?"},
  {"unique_id": 62, "stru_type": "isl", "length": "short", "item": 6, "type": "test", "expected_rating": "", "sentence": "Who chased the suspect that stole the necklace?"},
  {"unique_id": 63, "stru_type": "nonisl", "length": "long", "item": 6, "type": "test", "expected_rating": "", "sentence": "What did the detective think that the suspect stole?"},
  {"unique_id": 64, "stru_type": "isl", "length": "long", "item": 6, "type": "test", "expected_rating": "", "sentence": "What did the detective chase the suspect that stole?"},
  {"unique_id": 71, "stru_type": "nonisl", "length": "short", "item": 7, "type": "test", "expected_rating": "", "sentence": "Who thought that the guard intercepted the shipment?"},
  {"unique_id": 72, "stru_type": "isl", "length": "short", "item": 7, "type": "test", "expected_rating": "", "sentence": "Who blackmailed the guard that intercepted the shipment?"},
  {"unique_id": 73, "stru_type": "nonisl", "length": "long", "item": 7, "type": "test", "expected_rating": "", "sentence": "What did the smuggler think that the guard intercepted?"},
  {"unique_id": 74, "stru_type": "isl", "length": "long", "item": 7, "type": "test", "expected_rating": "", "sentence": "What did the smuggler blackmail the guard that intercepted?"},
  {"unique_id": 81, "stru_type": "nonisl", "length": "short", "item": 8, "type": "test", "expected_rating": "", "sentence": "Who thought that the reporter submitted the article?"},
  {"unique_id": 82, "stru_type": "isl", "length": "short", "item": 8, "type": "test", "expected_rating": "", "sentence": "Who congratulated the reporter that submitted the article?"},
  {"unique_id": 83, "stru_type": "nonisl", "length": "long", "item": 8, "type": "test", "expected_rating": "", "sentence": "What did the editor think that the reporter submitted?"},
  {"unique_id": 84, "stru_type": "isl", "length": "long", "item": 8, "type": "test", "expected_rating": "", "sentence": "What did the editor congratulate the reporter that submitted?"},
  {"unique_id": 91, "stru_type": "nonisl", "length": "short", "item": 9, "type": "test", "expected_rating": "", "sentence": "Who thought that the general ordered the mission?"},
  {"unique_id": 92, "stru_type": "isl", "length": "short", "item": 9, "type": "test", "expected_rating": "", "sentence": "Who trusted the general that ordered the mission?"},
  {"unique_id": 93, "stru_type": "nonisl", "length": "long", "item": 9, "type": "test", "expected_rating": "", "sentence": "What did the soldier think that the general ordered?"},
  {"unique_id": 94, "stru_type": "isl", "length": "long", "item": 9, "type": "test", "expected_rating": "", "sentence": "What did the soldier trust the general that ordered?"},
  {"unique_id": 101, "stru_type": "nonisl", "length": "short", "item": 10, "type": "test", "expected_rating": "", "sentence": "Who thought that the doctor prescribed the medicine?"},
  {"unique_id": 102, "stru_type": "isl", "length": "short", "item": 10, "type": "test", "expected_rating": "", "sentence": "Who consulted the doctor that prescribed the medicine?"},
  {"unique_id": 103, "stru_type": "nonisl", "length": "long", "item": 10, "type": "test", "expected_rating": "", "sentence": "What did the nurse think that the doctor prescribed?"},
  {"unique_id": 104, "stru_type": "isl", "length": "long", "item": 10, "type": "test", "expected_rating": "", "sentence": "What did the nurse consult the doctor that prescribed?"},
  {"unique_id": 111, "stru_type": "nonisl", "length": "short", "item": 11, "type": "test", "expected_rating": "", "sentence": "Who thought that the babysitter washed the bottle?"},
  {"unique_id": 112, "stru_type": "isl", "length": "short", "item": 11, "type": "test", "expected_rating": "", "sentence": "Which parent contacted the babysitter that washed the bottle?"},
  {"unique_id": 113, "stru_type": "nonisl", "length": "long", "item": 11, "type": "test", "expected_rating": "", "sentence": "What did the parent think that the babysitter washed?"},
  {"unique_id": 114, "stru_type": "isl", "length": "long", "item": 11, "type": "test", "expected_rating": "", "sentence": "What did the parent contact the babysitter that washed?"},
  {"unique_id": 121, "stru_type": "nonisl", "length": "short", "item": 12, "type": "test", "expected_rating": "", "sentence": "Who thought that the politician ignored the recommendation?"},
  {"unique_id": 122, "stru_type": "isl", "length": "short", "item": 12, "type": "test", "expected_rating": "", "sentence": "Who debated the politician that ignored the recommendation?"},
  {"unique_id": 123, "stru_type": "nonisl", "length": "long", "item": 12, "type": "test", "expected_rating": "", "sentence": "What did the scientist think that the politician ignored?"},
  {"unique_id": 124, "stru_type": "isl", "length": "long", "item": 12, "type": "test", "expected_rating": "", "sentence": "What did the scientist debate the politician that ignored?"},
  {"unique_id": 131, "stru_type": "nonisl", "length": "short", "item": 13, "type": "test", "expected_rating": "", "sentence": "Who thought that the judge overruled the case?"},
  {"unique_id": 132, "stru_type": "isl", "length": "short", "item": 13, "type": "test", "expected_rating": "", "sentence": "Who criticized the judge that overruled the case?"},
  {"unique_id": 133, "stru_type": "nonisl", "length": "long", "item": 13, "type": "test", "expected_rating": "", "sentence": "What did the prosecutor think that the judge overruled?"},
  {"unique_id": 134, "stru_type": "isl", "length": "long", "item": 13, "type": "test", "expected_rating": "", "sentence": "What did the prosecutor criticize the judge that overruled?"},
  {"unique_id": 141, "stru_type": "nonisl", "length": "short", "item": 14, "type": "test", "expected_rating": "", "sentence": "Who thought that the architect modified the blueprint?"},
  {"unique_id": 142, "stru_type": "isl", "length": "short", "item": 14, "type": "test", "expected_rating": "", "sentence": "Who questioned the architect that modified the blueprint?"},
  {"unique_id": 143, "stru_type": "nonisl", "length": "long", "item": 14, "type": "test", "expected_rating": "", "sentence": "What did the carpenter think that the architect modified?"},
  {"unique_id": 144, "stru_type": "isl", "length": "long", "item": 14, "type": "test", "expected_rating": "", "sentence": "What did the carpenter question the architect that modified?"},
  {"unique_id": 151, "stru_type": "nonisl", "length": "short", "item": 15, "type": "test", "expected_rating": "", "sentence": "Who thought that the patient contracted the disease?"},
  {"unique_id": 152, "stru_type": "isl", "length": "short", "item": 15, "type": "test", "expected_rating": "", "sentence": "Who treated the patient that contracted the disease?"},
  {"unique_id": 153, "stru_type": "nonisl", "length": "long", "item": 15, "type": "test", "expected_rating": "", "sentence": "What did the cardiologist think that the patient contracted?"},
  {"unique_id": 154, "stru_type": "isl", "length": "long", "item": 15, "type": "test", "expected_rating": "", "sentence": "What did the cardiologist treat the patient that contracted?"},
  {"unique_id": 161, "stru_type": "nonisl", "length": "short", "item": 16, "type": "test", "expected_rating": "", "sentence": "Who thought that the customer spilled the drink?"},
  {"unique_id": 162, "stru_type": "isl", "length": "short", "item": 16, "type": "test", "expected_rating": "", "sentence": "Who greeted the customer that spilled the drink?"},
  {"unique_id": 163, "stru_type": "nonisl", "length": "long", "item": 16, "type": "test", "expected_rating": "", "sentence": "What did the bartender think that the customer spilled?"},
  {"unique_id": 164, "stru_type": "isl", "length": "long", "item": 16, "type": "test", "expected_rating": "", "sentence": "What did the bartender greet the customer that spilled?"},
  {"unique_id": 1001, "stru_type": "", "length": "", "item": 1001, "type": "practice", "expected": "1", "sentence": "Promise to wash, Neal did the car."},
  {"unique_id": 1002, "stru_type": "", "length": "", "item": 1002, "type": "practice", "expected": "2", "sentence": "Ben is hopeful for everyone you do to attend."},
  {"unique_id": 1003, "stru_type": "", "length": "", "item": 1003, "type": "practice", "expected": "3", "sentence": "They consider a teacher of Chris geeky."},
  {"unique_id": 1004, "stru_type": "", "length": "", "item": 1004, "type": "practice", "expected": "4", "sentence": "The brother and sister that were playing all the time had to be sent to bed."},
  {"unique_id": 1005, "stru_type": "", "length": "", "item": 1005, "type": "practice", "expected": "5", "sentence": "All the men seem to have all eaten supper."},
  {"unique_id": 1006, "stru_type": "", "length": "", "item": 1006, "type": "practice", "expected": "6", "sentence": "The children were cared for by the adults and the teenagers."},
  {"unique_id": 1007, "stru_type": "", "length": "", "item": 1007, "type": "practice", "expected": "7", "sentence": "She was the winner."},
  {"unique_id": 1008, "stru_type": "", "length": "", "item": 1008, "type": "practice", "expected": "7", "sentence": "It seems to me that Robert can't be trusted."},
  {"unique_id": 1009, "stru_type": "", "length": "", "item": 1009, "type": "practice", "expected": "1", "sentence": "There might mice seem to be in the cupboard."},
  {"unique_id": 9111, "stru_type": "", "length": "", "item": 9111, "type": "filler", "expected": "1", "sentence": "John was kissed John."},
  {"unique_id": 9112, "stru_type": "", "length": "", "item": 9112, "type": "filler", "expected": "1", "sentence": "The money was stolen the money."},
  {"unique_id": 9113, "stru_type": "", "length": "", "item": 9113, "type": "filler", "expected": "1", "sentence": "The hedges were trimmed the hedges."},
  {"unique_id": 9114, "stru_type": "", "length": "", "item": 9114, "type": "filler", "expected": "1", "sentence": "Tommy was punished Tommy."},
  {"unique_id": 9121, "stru_type": "", "length": "", "item": 9121, "type": "filler", "expected": "1", "sentence": "Who was that the principal would fire expected by the reporters?"},
  {"unique_id": 9122, "stru_type": "", "length": "", "item": 9122, "type": "filler", "expected": "1", "sentence": "What was that the movers would break feared by the family?"},
  {"unique_id": 9123, "stru_type": "", "length": "", "item": 9123, "type": "filler", "expected": "1", "sentence": "Who was that Martians kidnapped believed by no one?"},
  {"unique_id": 9124, "stru_type": "", "length": "", "item": 9124, "type": "filler", "expected": "1", "sentence": "Who is that the jail must release accepted by few citizens?"},
  {"unique_id": 9211, "stru_type": "", "length": "", "item": 9211, "type": "filler", "expected": "2", "sentence": "To the neighbors about the noise the old man complained."},
  {"unique_id": 9212, "stru_type": "", "length": "", "item": 9212, "type": "filler", "expected": "2", "sentence": "To the professor about my grade I talked."},
  {"unique_id": 9213, "stru_type": "", "length": "", "item": 9213, "type": "filler", "expected": "2", "sentence": "With the generals about a new approach the President talked."},
  {"unique_id": 9214, "stru_type": "", "length": "", "item": 9214, "type": "filler", "expected": "2", "sentence": "At your spouse on the phone you shouldn't yell."},
  {"unique_id": 9311, "stru_type": "", "length": "", "item": 9311, "type": "filler", "expected": "3", "sentence": "John tried himself to win."},
  {"unique_id": 9312, "stru_type": "", "length": "", "item": 9312, "type": "filler", "expected": "3", "sentence": "William planned himself to write a novel."},
  {"unique_id": 9313, "stru_type": "", "length": "", "item": 9313, "type": "filler", "expected": "3", "sentence": "Linda remembered herself to pick-up the dry cleaning."},
  {"unique_id": 9314, "stru_type": "", "length": "", "item": 9314, "type": "filler", "expected": "3", "sentence": "Patricia agreed herself to host the party."},
  {"unique_id": 9321, "stru_type": "", "length": "", "item": 9321, "type": "filler", "expected": "3", "sentence": "Yesterday seemed that John left."},
  {"unique_id": 9322, "stru_type": "", "length": "", "item": 9322, "type": "filler", "expected": "3", "sentence": "Next week seems that Juan will be in town."},
  {"unique_id": 9323, "stru_type": "", "length": "", "item": 9323, "type": "filler", "expected": "3", "sentence": "Tomorrow seems that there will be a hurricane."},
  {"unique_id": 9324, "stru_type": "", "length": "", "item": 9324, "type": "filler", "expected": "3", "sentence": "Next week appears that the strikers will be back to work."},
  {"unique_id": 9411, "stru_type": "", "length": "", "item": 9411, "type": "filler", "expected": "4", "sentence": "If frankly he's unable to cope, we'll have to replace him."},
  {"unique_id": 9412, "stru_type": "", "length": "", "item": 9412, "type": "filler", "expected": "4", "sentence": "If Kelly might have time, she will do it."},
  {"unique_id": 9413, "stru_type": "", "length": "", "item": 9413, "type": "filler", "expected": "4", "sentence": "If Grace probably passes the class, she will graduate on time."},
  {"unique_id": 9414, "stru_type": "", "length": "", "item": 9414, "type": "filler", "expected": "4", "sentence": "If frankly you continue to argue, the boss will fire you."},
  {"unique_id": 9421, "stru_type": "", "length": "", "item": 9421, "type": "filler", "expected": "4", "sentence": "Kathryn said that a picture of one of the founders is going to be posted at the end of the month, but I don't remember which she did."},
  {"unique_id": 9422, "stru_type": "", "length": "", "item": 9422, "type": "filler", "expected": "4", "sentence": "Jamie mentioned that a scene from one of the films is going to be shown this Thursday, but I don't remember which she did."},
  {"unique_id": 9423, "stru_type": "", "length": "", "item": 9423, "type": "filler", "expected": "4", "sentence": "Monica said she saw one of your videos on the internet, but I'm not sure which video she did."},
  {"unique_id": 9424, "stru_type": "", "length": "", "item": 9424, "type": "filler", "expected": "4", "sentence": "Benjamin said he noticed a suspicious-looking man by the school, but I don't know which man he did."},
  {"unique_id": 9511, "stru_type": "", "length": "", "item": 9511, "type": "filler", "expected": "5", "sentence": "They all have left and they have all done so deliberately."},
  {"unique_id": 9512, "stru_type": "", "length": "", "item": 9512, "type": "filler", "expected": "5", "sentence": "They all have finished and they have all done so efficiently."},
  {"unique_id": 9513, "stru_type": "", "length": "", "item": 9513, "type": "filler", "expected": "5", "sentence": "They all have helped and they have all done so generously."},
  {"unique_id": 9514, "stru_type": "", "length": "", "item": 9514, "type": "filler", "expected": "5", "sentence": "They all have studied and they have all done so effectively."},
  {"unique_id": 9711, "stru_type": "", "length": "", "item": 9711, "type": "filler", "expected": "7", "sentence": "Kerry attempted to study physics."},
  {"unique_id": 9712, "stru_type": "", "length": "", "item": 9712, "type": "filler", "expected": "7", "sentence": "Brittany attempted to touch the porcupine."},
  {"unique_id": 9713, "stru_type": "", "length": "", "item": 9713, "type": "filler", "expected": "7", "sentence": "Vivian attempted to write stories."},
  {"unique_id": 9714, "stru_type": "", "length": "", "item": 9714, "type": "filler", "expected": "7", "sentence": "Tommy attempted to take a picture."},
  {"unique_id": 9721, "stru_type": "", "length": "", "item": 9721, "type": "filler", "expected": "7", "sentence": "I hate eating sushi."},
  {"unique_id": 9722, "stru_type": "", "length": "", "item": 9722, "type": "filler", "expected": "7", "sentence": "I like drinking milkshakes."},
  {"unique_id": 9723, "stru_type": "", "length": "", "item": 9723, "type": "filler", "expected": "7", "sentence": "I like taking vacations."},
  {"unique_id": 9724, "stru_type": "", "length": "", "item": 9724, "type": "filler", "expected": "7", "sentence": "I hate missing work."}
      ]
//export default { all_stimuli };
 

