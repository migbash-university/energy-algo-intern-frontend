export const project_config = [
    {
        timeSlotsMin: 0,  // minimun timeslots that need to be selected before proceeding,
        timeSlotsMax: 2,  // maximum timeslots that can be selected by a user,
        // numberOfCardsPerSlide: 6 // amount wanted for there to be TimeSlotCards to be displayed on the carousel,
        
        agentSlotsMin: 1, // min. agents to be selected before proceeding,
        agentSlotsMax: 1, // max. agents to be selected by the user,

        attempts: 10, // amount of attempts a user needs to complete to `finish` the questionnaire and `exit`,

        numberOfHouseholds: undefined, // number of `fake-users` agents displaying in the `everyone-else's allocation page view`,
    }
]