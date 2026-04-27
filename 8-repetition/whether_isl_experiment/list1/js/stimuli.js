// note: for FILL/UNGRAM, the ordering isn't what you'd expect
const all_stimuli = [
    {
        "unique_id": 11,
        "stru_type": "nonisl",
        "length": "short",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the chef burned the dish?"
    },
    {
        "unique_id": 12,
        "stru_type": "isl",
        "length": "short",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the chef burned the dish?"
    },
    {
        "unique_id": 13,
        "stru_type": "nonisl",
        "length": "long",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "What did the waiter think that the chef burned?"
    },
    {
        "unique_id": 14,
        "stru_type": "isl",
        "length": "long",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "What did the waiter wonder whether the chef burned?"
    },
    {
        "unique_id": 21,
        "stru_type": "nonisl",
        "length": "short",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the tenant repainted the room?"
    },
    {
        "unique_id": 22,
        "stru_type": "isl",
        "length": "short",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the tenant repainted the room?"
    },
    {
        "unique_id": 23,
        "stru_type": "nonisl",
        "length": "long",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "What did the landlord think that the tenant repainted?"
    },
    {
        "unique_id": 24,
        "stru_type": "isl",
        "length": "long",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "What did the landlord wonder whether the tenant repainted?"
    },
    {
        "unique_id": 31,
        "stru_type": "nonisl",
        "length": "short",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the gymnast practiced the routine?"
    },
    {
        "unique_id": 32,
        "stru_type": "isl",
        "length": "short",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the gymnast practiced the routine?"
    },
    {
        "unique_id": 33,
        "stru_type": "nonisl",
        "length": "long",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "What did the coach think that the gymnast practiced?"
    },
    {
        "unique_id": 34,
        "stru_type": "isl",
        "length": "long",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "What did the coach wonder whether the gymnast practiced?"
    },
    {
        "unique_id": 41,
        "stru_type": "nonisl",
        "length": "short",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the student read the book?"
    },
    {
        "unique_id": 42,
        "stru_type": "isl",
        "length": "short",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the student read the book?"
    },
    {
        "unique_id": 43,
        "stru_type": "nonisl",
        "length": "long",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "What did the teacher think that the student read?"
    },
    {
        "unique_id": 44,
        "stru_type": "isl",
        "length": "long",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "What did the teacher wonder whether the student read?"
    },
    {
        "unique_id": 51,
        "stru_type": "nonisl",
        "length": "short",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the assistant copied the file?"
    },
    {
        "unique_id": 52,
        "stru_type": "isl",
        "length": "short",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the assistant copied the file?"
    },
    {
        "unique_id": 53,
        "stru_type": "nonisl",
        "length": "long",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "What did the manager think that the assistant copied?"
    },
    {
        "unique_id": 54,
        "stru_type": "isl",
        "length": "long",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "What did the manager wonder whether the assistant copied?"
    },
    {
        "unique_id": 61,
        "stru_type": "nonisl",
        "length": "short",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the suspect stole the necklace?"
    },
    {
        "unique_id": 62,
        "stru_type": "isl",
        "length": "short",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the suspect stole the necklace?"
    },
    {
        "unique_id": 63,
        "stru_type": "nonisl",
        "length": "long",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "What did the detective think that the suspect stole?"
    },
    {
        "unique_id": 64,
        "stru_type": "isl",
        "length": "long",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "What did the detective wonder whether the suspect stole?"
    },
    {
        "unique_id": 71,
        "stru_type": "nonisl",
        "length": "short",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the guard intercepted the shipment?"
    },
    {
        "unique_id": 72,
        "stru_type": "isl",
        "length": "short",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the guard intercepted the shipment?"
    },
    {
        "unique_id": 73,
        "stru_type": "nonisl",
        "length": "long",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "What did the smuggler think that the guard intercepted?"
    },
    {
        "unique_id": 74,
        "stru_type": "isl",
        "length": "long",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "What did the smuggler wonder whether the guard intercepted?"
    },
    {
        "unique_id": 81,
        "stru_type": "nonisl",
        "length": "short",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the reporter plagiarized the article?"
    },
    {
        "unique_id": 82,
        "stru_type": "isl",
        "length": "short",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the reporter plagiarized the article?"
    },
    {
        "unique_id": 83,
        "stru_type": "nonisl",
        "length": "long",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "What did the editor think that the reporter plagiarized?"
    },
    {
        "unique_id": 84,
        "stru_type": "isl",
        "length": "long",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "What did the editor wonder whether the reporter plagiarized?"
    },
    {
        "unique_id": 91,
        "stru_type": "nonisl",
        "length": "short",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the general ordered the mission?"
    },
    {
        "unique_id": 92,
        "stru_type": "isl",
        "length": "short",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the general ordered the mission?"
    },
    {
        "unique_id": 93,
        "stru_type": "nonisl",
        "length": "long",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "What did the soldier think that the general ordered?"
    },
    {
        "unique_id": 94,
        "stru_type": "isl",
        "length": "long",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "What did the soldier wonder whether the general ordered?"
    },
    {
        "unique_id": 101,
        "stru_type": "nonisl",
        "length": "short",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the doctor prescribed the medicine?"
    },
    {
        "unique_id": 102,
        "stru_type": "isl",
        "length": "short",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the doctor prescribed the medicine?"
    },
    {
        "unique_id": 103,
        "stru_type": "nonisl",
        "length": "long",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "What did the nurse think that the doctor prescribed?"
    },
    {
        "unique_id": 104,
        "stru_type": "isl",
        "length": "long",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "What did the nurse wonder whether the doctor prescribed?"
    },
    {
        "unique_id": 111,
        "stru_type": "nonisl",
        "length": "short",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the babysitter washed the bottle?"
    },
    {
        "unique_id": 112,
        "stru_type": "isl",
        "length": "short",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the babysitter washed the bottle?"
    },
    {
        "unique_id": 113,
        "stru_type": "nonisl",
        "length": "long",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "What did the parent think that the babysitter washed?"
    },
    {
        "unique_id": 114,
        "stru_type": "isl",
        "length": "long",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "What did the parent wonder whether the babysitter washed?"
    },
    {
        "unique_id": 121,
        "stru_type": "nonisl",
        "length": "short",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the politician ignored the recommendation?"
    },
    {
        "unique_id": 122,
        "stru_type": "isl",
        "length": "short",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the politician ignored the recommendation?"
    },
    {
        "unique_id": 123,
        "stru_type": "nonisl",
        "length": "long",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "What did the scientist think that the politician ignored?"
    },
    {
        "unique_id": 124,
        "stru_type": "isl",
        "length": "long",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "What did the scientist wonder whether the politician ignored?"
    },
    {
        "unique_id": 131,
        "stru_type": "nonisl",
        "length": "short",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the judge overruled the case?"
    },
    {
        "unique_id": 132,
        "stru_type": "isl",
        "length": "short",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the judge overruled the case?"
    },
    {
        "unique_id": 133,
        "stru_type": "nonisl",
        "length": "long",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "What did the prosecutor think that the judge overruled?"
    },
    {
        "unique_id": 134,
        "stru_type": "isl",
        "length": "long",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "What did the prosecutor wonder whether the judge overruled?"
    },
    {
        "unique_id": 141,
        "stru_type": "nonisl",
        "length": "short",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the architect modified the blueprint?"
    },
    {
        "unique_id": 142,
        "stru_type": "isl",
        "length": "short",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the architect modified the blueprint?"
    },
    {
        "unique_id": 143,
        "stru_type": "nonisl",
        "length": "long",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "What did the carpenter think that the architect modified?"
    },
    {
        "unique_id": 144,
        "stru_type": "isl",
        "length": "long",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "What did the carpenter wonder whether the architect modified?"
    },
    {
        "unique_id": 151,
        "stru_type": "nonisl",
        "length": "short",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the patient contracted the disease?"
    },
    {
        "unique_id": 152,
        "stru_type": "isl",
        "length": "short",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the patient contracted the disease?"
    },
    {
        "unique_id": 153,
        "stru_type": "nonisl",
        "length": "long",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "What did the cardiologist think that the patient contracted?"
    },
    {
        "unique_id": 154,
        "stru_type": "isl",
        "length": "long",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "What did the cardiologist wonder whether the patient contracted?"
    },
    {
        "unique_id": 161,
        "stru_type": "nonisl",
        "length": "short",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the customer ordered the drink?"
    },
    {
        "unique_id": 162,
        "stru_type": "isl",
        "length": "short",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the customer ordered the drink?"
    },
    {
        "unique_id": 163,
        "stru_type": "nonisl",
        "length": "long",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "What did the bartender think that the customer ordered?"
    },
    {
        "unique_id": 164,
        "stru_type": "isl",
        "length": "long",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "What did the bartender wonder whether the customer ordered?"
    },
    {
        "unique_id": 1001,
        "stru_type": null,
        "length": null,
        "item": 1001,
        "type": "practice",
        "expected": 1.0,
        "sentence": "Promise to wash, Neal did the car."
    },
    {
        "unique_id": 1002,
        "stru_type": null,
        "length": null,
        "item": 1002,
        "type": "practice",
        "expected": 2.0,
        "sentence": "Ben is hopeful for everyone you do to attend."
    },
    {
        "unique_id": 1003,
        "stru_type": null,
        "length": null,
        "item": 1003,
        "type": "practice",
        "expected": 3.0,
        "sentence": "They consider a teacher of Chris geeky."
    },
    {
        "unique_id": 1004,
        "stru_type": null,
        "length": null,
        "item": 1004,
        "type": "practice",
        "expected": 4.0,
        "sentence": "The brother and sister that were playing all the time had to be sent to bed."
    },
    {
        "unique_id": 1005,
        "stru_type": null,
        "length": null,
        "item": 1005,
        "type": "practice",
        "expected": 5.0,
        "sentence": "All the men seem to have all eaten supper."
    },
    {
        "unique_id": 1006,
        "stru_type": null,
        "length": null,
        "item": 1006,
        "type": "practice",
        "expected": 6.0,
        "sentence": "The children were cared for by the adults and the teenagers."
    },
    {
        "unique_id": 1007,
        "stru_type": null,
        "length": null,
        "item": 1007,
        "type": "practice",
        "expected": 7.0,
        "sentence": "She was the winner."
    },
    {
        "unique_id": 1008,
        "stru_type": null,
        "length": null,
        "item": 1008,
        "type": "practice",
        "expected": 7.0,
        "sentence": "It seems to me that Robert can't be trusted."
    },
    {
        "unique_id": 1009,
        "stru_type": null,
        "length": null,
        "item": 1009,
        "type": "practice",
        "expected": 1.0,
        "sentence": "There might mice seem to be in the cupboard."
    },
    {
        "unique_id": 9111,
        "stru_type": null,
        "length": null,
        "item": 9111,
        "type": "filler",
        "expected": 1.0,
        "sentence": "John was kissed John."
    },
    {
        "unique_id": 9112,
        "stru_type": null,
        "length": null,
        "item": 9112,
        "type": "filler",
        "expected": 1.0,
        "sentence": "The money was stolen the money."
    },
    {
        "unique_id": 9113,
        "stru_type": null,
        "length": null,
        "item": 9113,
        "type": "filler",
        "expected": 1.0,
        "sentence": "The hedges were trimmed the hedges."
    },
    {
        "unique_id": 9114,
        "stru_type": null,
        "length": null,
        "item": 9114,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Tommy was punished Tommy."
    },
    {
        "unique_id": 9121,
        "stru_type": null,
        "length": null,
        "item": 9121,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Who was that the principal would fire expected by the reporters?"
    },
    {
        "unique_id": 9122,
        "stru_type": null,
        "length": null,
        "item": 9122,
        "type": "filler",
        "expected": 1.0,
        "sentence": "What was that the movers would break feared by the family?"
    },
    {
        "unique_id": 9123,
        "stru_type": null,
        "length": null,
        "item": 9123,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Who was that Martians kidnapped believed by no one?"
    },
    {
        "unique_id": 9124,
        "stru_type": null,
        "length": null,
        "item": 9124,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Who is that the jail must release accepted by few citizens?"
    },
    {
        "unique_id": 9211,
        "stru_type": null,
        "length": null,
        "item": 9211,
        "type": "filler",
        "expected": 2.0,
        "sentence": "To the neighbors about the noise the old man complained."
    },
    {
        "unique_id": 9212,
        "stru_type": null,
        "length": null,
        "item": 9212,
        "type": "filler",
        "expected": 2.0,
        "sentence": "To the professor about my grade I talked."
    },
    {
        "unique_id": 9213,
        "stru_type": null,
        "length": null,
        "item": 9213,
        "type": "filler",
        "expected": 2.0,
        "sentence": "With the generals about a new approach the President talked."
    },
    {
        "unique_id": 9214,
        "stru_type": null,
        "length": null,
        "item": 9214,
        "type": "filler",
        "expected": 2.0,
        "sentence": "At your spouse on the phone you shouldn't yell."
    },
    {
        "unique_id": 9311,
        "stru_type": null,
        "length": null,
        "item": 9311,
        "type": "filler",
        "expected": 3.0,
        "sentence": "John tried himself to win."
    },
    {
        "unique_id": 9312,
        "stru_type": null,
        "length": null,
        "item": 9312,
        "type": "filler",
        "expected": 3.0,
        "sentence": "William planned himself to write a novel."
    },
    {
        "unique_id": 9313,
        "stru_type": null,
        "length": null,
        "item": 9313,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Linda remembered herself to pick-up the dry cleaning."
    },
    {
        "unique_id": 9314,
        "stru_type": null,
        "length": null,
        "item": 9314,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Patricia agreed herself to host the party."
    },
    {
        "unique_id": 9321,
        "stru_type": null,
        "length": null,
        "item": 9321,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Yesterday seemed that John left."
    },
    {
        "unique_id": 9322,
        "stru_type": null,
        "length": null,
        "item": 9322,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Next week seems that Juan will be in town."
    },
    {
        "unique_id": 9323,
        "stru_type": null,
        "length": null,
        "item": 9323,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Tomorrow seems that there will be a hurricane."
    },
    {
        "unique_id": 9324,
        "stru_type": null,
        "length": null,
        "item": 9324,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Next week appears that the strikers will be back to work."
    },
    {
        "unique_id": 9411,
        "stru_type": null,
        "length": null,
        "item": 9411,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If frankly he's unable to cope, we'll have to replace him."
    },
    {
        "unique_id": 9412,
        "stru_type": null,
        "length": null,
        "item": 9412,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If Kelly might have time, she will do it."
    },
    {
        "unique_id": 9413,
        "stru_type": null,
        "length": null,
        "item": 9413,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If Grace probably passes the class, she will graduate on time."
    },
    {
        "unique_id": 9414,
        "stru_type": null,
        "length": null,
        "item": 9414,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If frankly you continue to argue, the boss will fire you."
    },
    {
        "unique_id": 9421,
        "stru_type": null,
        "length": null,
        "item": 9421,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Kathryn said that a picture of one of the founders is going to be posted at the end of the month, but I don't remember which she did."
    },
    {
        "unique_id": 9422,
        "stru_type": null,
        "length": null,
        "item": 9422,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Jamie mentioned that a scene from one of the films is going to be shown this Thursday, but I don't remember which she did."
    },
    {
        "unique_id": 9423,
        "stru_type": null,
        "length": null,
        "item": 9423,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Monica said she saw one of your videos on the internet, but I'm not sure which video she did."
    },
    {
        "unique_id": 9424,
        "stru_type": null,
        "length": null,
        "item": 9424,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Benjamin said he noticed a suspicious-looking man by the school, but I don't know which man he did."
    },
    {
        "unique_id": 9511,
        "stru_type": null,
        "length": null,
        "item": 9511,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have left and they have all done so deliberately."
    },
    {
        "unique_id": 9512,
        "stru_type": null,
        "length": null,
        "item": 9512,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have finished and they have all done so efficiently."
    },
    {
        "unique_id": 9513,
        "stru_type": null,
        "length": null,
        "item": 9513,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have helped and they have all done so generously."
    },
    {
        "unique_id": 9514,
        "stru_type": null,
        "length": null,
        "item": 9514,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have studied and they have all done so effectively."
    },
    {
        "unique_id": 9711,
        "stru_type": null,
        "length": null,
        "item": 9711,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Kerry attempted to study physics."
    },
    {
        "unique_id": 9712,
        "stru_type": null,
        "length": null,
        "item": 9712,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Brittany attempted to touch the porcupine."
    },
    {
        "unique_id": 9713,
        "stru_type": null,
        "length": null,
        "item": 9713,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Vivian attempted to write stories."
    },
    {
        "unique_id": 9714,
        "stru_type": null,
        "length": null,
        "item": 9714,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Tommy attempted to take a picture."
    },
    {
        "unique_id": 9721,
        "stru_type": null,
        "length": null,
        "item": 9721,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I hate eating sushi."
    },
    {
        "unique_id": 9722,
        "stru_type": null,
        "length": null,
        "item": 9722,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I like drinking milkshakes."
    },
    {
        "unique_id": 9723,
        "stru_type": null,
        "length": null,
        "item": 9723,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I like taking vacations."
    },
    {
        "unique_id": 9724,
        "stru_type": null,
        "length": null,
        "item": 9724,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I hate missing work."
    },
    {
        "unique_id": 171,
        "stru_type": "nonisl",
        "length": "short",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the mechanic repaired the engine?"
    },
    {
        "unique_id": 172,
        "stru_type": "isl",
        "length": "short",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the mechanic repaired the engine?"
    },
    {
        "unique_id": 173,
        "stru_type": "nonisl",
        "length": "long",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "What did the supervisor think that the mechanic repaired?"
    },
    {
        "unique_id": 174,
        "stru_type": "isl",
        "length": "long",
        "item": 1,
        "type": "test",
        "expected": null,
        "sentence": "What did the supervisor wonder whether the mechanic repaired?"
    },
    {
        "unique_id": 181,
        "stru_type": "nonisl",
        "length": "short",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the musician composed the symphony?"
    },
    {
        "unique_id": 182,
        "stru_type": "isl",
        "length": "short",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the musician composed the symphony?"
    },
    {
        "unique_id": 183,
        "stru_type": "nonisl",
        "length": "long",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "What did the conductor think that the musician composed?"
    },
    {
        "unique_id": 184,
        "stru_type": "isl",
        "length": "long",
        "item": 2,
        "type": "test",
        "expected": null,
        "sentence": "What did the conductor wonder whether the musician composed?"
    },
    {
        "unique_id": 191,
        "stru_type": "nonisl",
        "length": "short",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the programmer tested the software?"
    },
    {
        "unique_id": 192,
        "stru_type": "isl",
        "length": "short",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the programmer tested the software?"
    },
    {
        "unique_id": 193,
        "stru_type": "nonisl",
        "length": "long",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "What did the analyst think that the programmer tested?"
    },
    {
        "unique_id": 194,
        "stru_type": "isl",
        "length": "long",
        "item": 3,
        "type": "test",
        "expected": null,
        "sentence": "What did the analyst wonder whether the programmer tested?"
    },
    {
        "unique_id": 201,
        "stru_type": "nonisl",
        "length": "short",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the gardener planted the flowers?"
    },
    {
        "unique_id": 202,
        "stru_type": "isl",
        "length": "short",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the gardener planted the flowers?"
    },
    {
        "unique_id": 203,
        "stru_type": "nonisl",
        "length": "long",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "What did the neighbor think that the gardener planted?"
    },
    {
        "unique_id": 204,
        "stru_type": "isl",
        "length": "long",
        "item": 4,
        "type": "test",
        "expected": null,
        "sentence": "What did the neighbor wonder whether the gardener planted?"
    },
    {
        "unique_id": 211,
        "stru_type": "nonisl",
        "length": "short",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the photographer edited the images?"
    },
    {
        "unique_id": 212,
        "stru_type": "isl",
        "length": "short",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the photographer edited the images?"
    },
    {
        "unique_id": 213,
        "stru_type": "nonisl",
        "length": "long",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "What did the client think that the photographer edited?"
    },
    {
        "unique_id": 214,
        "stru_type": "isl",
        "length": "long",
        "item": 5,
        "type": "test",
        "expected": null,
        "sentence": "What did the client wonder whether the photographer edited?"
    },
    {
        "unique_id": 221,
        "stru_type": "nonisl",
        "length": "short",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the electrician installed the wiring?"
    },
    {
        "unique_id": 222,
        "stru_type": "isl",
        "length": "short",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the electrician installed the wiring?"
    },
    {
        "unique_id": 223,
        "stru_type": "nonisl",
        "length": "long",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "What did the homeowner think that the electrician installed?"
    },
    {
        "unique_id": 224,
        "stru_type": "isl",
        "length": "long",
        "item": 6,
        "type": "test",
        "expected": null,
        "sentence": "What did the homeowner wonder whether the electrician installed?"
    },
    {
        "unique_id": 231,
        "stru_type": "nonisl",
        "length": "short",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the sculptor carved the statue?"
    },
    {
        "unique_id": 232,
        "stru_type": "isl",
        "length": "short",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the sculptor carved the statue?"
    },
    {
        "unique_id": 233,
        "stru_type": "nonisl",
        "length": "long",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "What did the curator think that the sculptor carved?"
    },
    {
        "unique_id": 234,
        "stru_type": "isl",
        "length": "long",
        "item": 7,
        "type": "test",
        "expected": null,
        "sentence": "What did the curator wonder whether the sculptor carved?"
    },
    {
        "unique_id": 241,
        "stru_type": "nonisl",
        "length": "short",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the tailor altered the jacket?"
    },
    {
        "unique_id": 242,
        "stru_type": "isl",
        "length": "short",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the tailor altered the jacket?"
    },
    {
        "unique_id": 243,
        "stru_type": "nonisl",
        "length": "long",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "What did the customer think that the tailor altered?"
    },
    {
        "unique_id": 244,
        "stru_type": "isl",
        "length": "long",
        "item": 8,
        "type": "test",
        "expected": null,
        "sentence": "What did the customer wonder whether the tailor altered?"
    },
    {
        "unique_id": 251,
        "stru_type": "nonisl",
        "length": "short",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the locksmith opened the safe?"
    },
    {
        "unique_id": 252,
        "stru_type": "isl",
        "length": "short",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the locksmith opened the safe?"
    },
    {
        "unique_id": 253,
        "stru_type": "nonisl",
        "length": "long",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "What did the owner think that the locksmith opened?"
    },
    {
        "unique_id": 254,
        "stru_type": "isl",
        "length": "long",
        "item": 9,
        "type": "test",
        "expected": null,
        "sentence": "What did the owner wonder whether the locksmith opened?"
    },
    {
        "unique_id": 261,
        "stru_type": "nonisl",
        "length": "short",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the librarian cataloged the manuscript?"
    },
    {
        "unique_id": 262,
        "stru_type": "isl",
        "length": "short",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the librarian cataloged the manuscript?"
    },
    {
        "unique_id": 263,
        "stru_type": "nonisl",
        "length": "long",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "What did the researcher think that the librarian cataloged?"
    },
    {
        "unique_id": 264,
        "stru_type": "isl",
        "length": "long",
        "item": 10,
        "type": "test",
        "expected": null,
        "sentence": "What did the researcher wonder whether the librarian cataloged?"
    },
    {
        "unique_id": 271,
        "stru_type": "nonisl",
        "length": "short",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the butcher sliced the meat?"
    },
    {
        "unique_id": 272,
        "stru_type": "isl",
        "length": "short",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the butcher sliced the meat?"
    },
    {
        "unique_id": 273,
        "stru_type": "nonisl",
        "length": "long",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "What did the shopper think that the butcher sliced?"
    },
    {
        "unique_id": 274,
        "stru_type": "isl",
        "length": "long",
        "item": 11,
        "type": "test",
        "expected": null,
        "sentence": "What did the shopper wonder whether the butcher sliced?"
    },
    {
        "unique_id": 281,
        "stru_type": "nonisl",
        "length": "short",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the janitor cleaned the hallway?"
    },
    {
        "unique_id": 282,
        "stru_type": "isl",
        "length": "short",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the janitor cleaned the hallway?"
    },
    {
        "unique_id": 283,
        "stru_type": "nonisl",
        "length": "long",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "What did the supervisor think that the janitor cleaned?"
    },
    {
        "unique_id": 284,
        "stru_type": "isl",
        "length": "long",
        "item": 12,
        "type": "test",
        "expected": null,
        "sentence": "What did the supervisor wonder whether the janitor cleaned?"
    },
    {
        "unique_id": 291,
        "stru_type": "nonisl",
        "length": "short",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the cashier processed the payment?"
    },
    {
        "unique_id": 292,
        "stru_type": "isl",
        "length": "short",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the cashier processed the payment?"
    },
    {
        "unique_id": 293,
        "stru_type": "nonisl",
        "length": "long",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "What did the manager think that the cashier processed?"
    },
    {
        "unique_id": 294,
        "stru_type": "isl",
        "length": "long",
        "item": 13,
        "type": "test",
        "expected": null,
        "sentence": "What did the manager wonder whether the cashier processed?"
    },
    {
        "unique_id": 301,
        "stru_type": "nonisl",
        "length": "short",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the drummer recorded the track?"
    },
    {
        "unique_id": 302,
        "stru_type": "isl",
        "length": "short",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the drummer recorded the track?"
    },
    {
        "unique_id": 303,
        "stru_type": "nonisl",
        "length": "long",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "What did the producer think that the drummer recorded?"
    },
    {
        "unique_id": 304,
        "stru_type": "isl",
        "length": "long",
        "item": 14,
        "type": "test",
        "expected": null,
        "sentence": "What did the producer wonder whether the drummer recorded?"
    },
    {
        "unique_id": 311,
        "stru_type": "nonisl",
        "length": "short",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the poet recited the verse?"
    },
    {
        "unique_id": 312,
        "stru_type": "isl",
        "length": "short",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the poet recited the verse?"
    },
    {
        "unique_id": 313,
        "stru_type": "nonisl",
        "length": "long",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "What did the audience think that the poet recited?"
    },
    {
        "unique_id": 314,
        "stru_type": "isl",
        "length": "long",
        "item": 15,
        "type": "test",
        "expected": null,
        "sentence": "What did the audience wonder whether the poet recited?"
    },
    {
        "unique_id": 321,
        "stru_type": "nonisl",
        "length": "short",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "Who thought that the vendor sold the fruit?"
    },
    {
        "unique_id": 322,
        "stru_type": "isl",
        "length": "short",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "Who wondered whether the vendor sold the fruit?"
    },
    {
        "unique_id": 323,
        "stru_type": "nonisl",
        "length": "long",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "What did the tourist think that the vendor sold?"
    },
    {
        "unique_id": 324,
        "stru_type": "isl",
        "length": "long",
        "item": 16,
        "type": "test",
        "expected": null,
        "sentence": "What did the tourist wonder whether the vendor sold?"
    },
    {
        "unique_id": 9115,
        "stru_type": null,
        "length": null,
        "item": 9111,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Bill was punched Bill."
    },
    {
        "unique_id": 9116,
        "stru_type": null,
        "length": null,
        "item": 9112,
        "type": "filler",
        "expected": 1.0,
        "sentence": "The proposal was drafted the proposal."
    },
    {
        "unique_id": 9117,
        "stru_type": null,
        "length": null,
        "item": 9113,
        "type": "filler",
        "expected": 1.0,
        "sentence": "The tables were cleaned the tables."
    },
    {
        "unique_id": 9118,
        "stru_type": null,
        "length": null,
        "item": 9114,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Jane was kicked Jane."
    },
    {
        "unique_id": 9125,
        "stru_type": null,
        "length": null,
        "item": 9121,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Who was that the team would hire predicted by the pundits?"
    },
    {
        "unique_id": 9126,
        "stru_type": null,
        "length": null,
        "item": 9122,
        "type": "filler",
        "expected": 1.0,
        "sentence": "What was that the electrician would fix wanted by the customer?"
    },
    {
        "unique_id": 9127,
        "stru_type": null,
        "length": null,
        "item": 9123,
        "type": "filler",
        "expected": 1.0,
        "sentence": "Who was that the politician bribed suspected by everyone?"
    },
    {
        "unique_id": 9128,
        "stru_type": null,
        "length": null,
        "item": 9124,
        "type": "filler",
        "expected": 1.0,
        "sentence": "What is that the senate would approve hoped by the voters?"
    },
    {
        "unique_id": 9215,
        "stru_type": null,
        "length": null,
        "item": 9211,
        "type": "filler",
        "expected": 2.0,
        "sentence": "To the scientist about the new findings the student wrote."
    },
    {
        "unique_id": 9216,
        "stru_type": null,
        "length": null,
        "item": 9212,
        "type": "filler",
        "expected": 2.0,
        "sentence": "To the waiter about his food the old man complained."
    },
    {
        "unique_id": 9217,
        "stru_type": null,
        "length": null,
        "item": 9213,
        "type": "filler",
        "expected": 2.0,
        "sentence": "With the police about a suspect the attorney chatted."
    },
    {
        "unique_id": 9218,
        "stru_type": null,
        "length": null,
        "item": 9214,
        "type": "filler",
        "expected": 2.0,
        "sentence": "At the manager about the poor service the customer shouted."
    },
    {
        "unique_id": 9315,
        "stru_type": null,
        "length": null,
        "item": 9311,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Jill attempted herself to finish her homework."
    },
    {
        "unique_id": 9316,
        "stru_type": null,
        "length": null,
        "item": 9312,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Larry decided himself to retire."
    },
    {
        "unique_id": 9317,
        "stru_type": null,
        "length": null,
        "item": 9313,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Laura forgot herself to lock the door."
    },
    {
        "unique_id": 9318,
        "stru_type": null,
        "length": null,
        "item": 9314,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Penny managed herself to pass the exam."
    },
    {
        "unique_id": 9325,
        "stru_type": null,
        "length": null,
        "item": 9321,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Last night seemed that the meeting was canceled."
    },
    {
        "unique_id": 9326,
        "stru_type": null,
        "length": null,
        "item": 9322,
        "type": "filler",
        "expected": 3.0,
        "sentence": "This morning seems that the train is delayed."
    },
    {
        "unique_id": 9327,
        "stru_type": null,
        "length": null,
        "item": 9323,
        "type": "filler",
        "expected": 3.0,
        "sentence": "Earlier today seemed that the system crashed."
    },
    {
        "unique_id": 9328,
        "stru_type": null,
        "length": null,
        "item": 9324,
        "type": "filler",
        "expected": 3.0,
        "sentence": "This afternoon appears that the results are ready."
    },
    {
        "unique_id": 9415,
        "stru_type": null,
        "length": null,
        "item": 9411,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If honestly he finishes the report, we can submit it."
    },
    {
        "unique_id": 9416,
        "stru_type": null,
        "length": null,
        "item": 9412,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If Maria probably arrives early, we'll start the meeting."
    },
    {
        "unique_id": 9417,
        "stru_type": null,
        "length": null,
        "item": 9413,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If Alex might understand the problem, he will explain it."
    },
    {
        "unique_id": 9418,
        "stru_type": null,
        "length": null,
        "item": 9414,
        "type": "filler",
        "expected": 4.0,
        "sentence": "If clearly she wins the election, the policy will change."
    },
    {
        "unique_id": 9425,
        "stru_type": null,
        "length": null,
        "item": 9421,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Laura said that a painting by one of the artists will be auctioned, but I don't know which she did"
    },
    {
        "unique_id": 9426,
        "stru_type": null,
        "length": null,
        "item": 9422,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Mark mentioned that a chapter from one of the books will be assigned, but I can't remember which he did."
    },
    {
        "unique_id": 9427,
        "stru_type": null,
        "length": null,
        "item": 9423,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Olivia said she bought one of the dresses at the store, but I'm not sure which she did."
    },
    {
        "unique_id": 9428,
        "stru_type": null,
        "length": null,
        "item": 9424,
        "type": "filler",
        "expected": 4.0,
        "sentence": "Ethan mentioned that a song from one of the albums will be played, but I don't know which he did."
    },
    {
        "unique_id": 9515,
        "stru_type": null,
        "length": null,
        "item": 9511,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have arrived and they have all done so punctually."
    },
    {
        "unique_id": 9516,
        "stru_type": null,
        "length": null,
        "item": 9512,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have disappeared and they have all done so mysteriously."
    },
    {
        "unique_id": 9517,
        "stru_type": null,
        "length": null,
        "item": 9513,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have died and they have all done so peacefully."
    },
    {
        "unique_id": 9518,
        "stru_type": null,
        "length": null,
        "item": 9514,
        "type": "filler",
        "expected": 5.0,
        "sentence": "They all have stayed and they have all done so willingly."
    },
    {
        "unique_id": 9715,
        "stru_type": null,
        "length": null,
        "item": 9711,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Daniel attempted to fix the computer."
    },
    {
        "unique_id": 9716,
        "stru_type": null,
        "length": null,
        "item": 9712,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Chloe attempted to bake a cake."
    },
    {
        "unique_id": 9717,
        "stru_type": null,
        "length": null,
        "item": 9713,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Jason attempted to repair the bike."
    },
    {
        "unique_id": 9718,
        "stru_type": null,
        "length": null,
        "item": 9714,
        "type": "filler",
        "expected": 7.0,
        "sentence": "Mia attempted to organize the files."
    },
    {
        "unique_id": 9725,
        "stru_type": null,
        "length": null,
        "item": 9721,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I hate drinking coffee."
    },
    {
        "unique_id": 9726,
        "stru_type": null,
        "length": null,
        "item": 9722,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I like taking selfies."
    },
    {
        "unique_id": 9727,
        "stru_type": null,
        "length": null,
        "item": 9723,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I like reading novels."
    },
    {
        "unique_id": 9728,
        "stru_type": null,
        "length": null,
        "item": 9724,
        "type": "filler",
        "expected": 7.0,
        "sentence": "I hate listening to podcasts."
    }
]
//export default { all_stimuli };
 

