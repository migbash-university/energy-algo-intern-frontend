import { writable } from 'svelte/store';

const userObjectOptions = {
    userUID: undefined,                    // user UID to keep track of thier responses,
    // attemptProgressCheckpoint: undefined,  // keeps track of the users progress to that can only 
    attemptNumber: 1,                      // counter - runs made by the user on the questionaire / website,
    selectedTimeSlots: [],                 // user selected cards for the timeslots,
    selectedAgent: [],                     // single agent option,
    pastUserOptionsSelect: {               // past user selected Options in the Previous Run of Answers,
        pastSelectedTimeSlots: [],
        selectedAgent: [],   
    },
    userSatisfaction1stRound: {            // user satisfaction score 1-5 first time seeing their allocation,
        fairness: undefined,
    },
    userSatisfaction2ndRound: {            // user satisfaction score 1-5 & fairness (angry-neutral-happy) after seeing eveyone else's allocation,
        satisfaction: undefined,
        fairness: undefined,
    },
    algorithmRoundResponseData: {          // the data recieved and stored in the website, withstanding browser refresh,
        /**
         * REST-API Backend Data 
         * Inteface Example Outline 
        */
        percentageTimeSlotsSatisfied: undefined,
        // user Data Response
        userData : {
            id: 'User',
            selectedTimeSlots: [
            ],
            allocatedTimeSlots: [
            ],
        },
        // array of household responses by the algorithm,
        householdData: [
        ]
    },
};

function createLocalStorage(key) {
    const { subscribe, set, update } = writable(userObjectOptions);

    return {
        subscribe,
        set,
        update,

        
        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Remove the target data item of the value of the user timeslot from the
         * user object array,
         * ---
         * Returns:
         * NaN
         * @param {*} timeSlot_Obj 
        */
        removeSelectedTimeSlot: (timeSlot_Obj) => {
            // will return ['A', 'C']
            let new_array = userObjectOptions.selectedTimeSlots.filter(({ time }) => time !== timeSlot_Obj.time);        
            console.log(new_array);

            userObjectOptions.selectedTimeSlots = new_array

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },

        
        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set user options selection for the time slots,
         * ---
         * Returns:
         * NaN
         * @param {*} timeSlot_Obj 
        */
        setSelectedTimeSlots: (timeSlot_Obj) => {
            // Add new data to .localStorage() Array,
            userObjectOptions.selectedTimeSlots.push(timeSlot_Obj);
            console.log(userObjectOptions);

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },


        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Remove the target data item of the value of the user timeslot from the
         * user object array,
         * ---
         * Returns:
         * NaN
         * @param {*} agentSlot_Obj 
        */
        removeSelectedAgentSlot: (agentSlot_Obj) => {
            // will return ['A', 'C']
            let new_array = userObjectOptions.selectedAgent.filter(({ name }) => name !== agentSlot_Obj.name);
            console.log(new_array);

            userObjectOptions.selectedAgent = new_array

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },


        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set user options selection for the time slots,
         * ---
         * Returns:
         * NaN
         * @param {*} agentSlot_Obj 
        */
        setSelectedAgentSlots: (agentSlot_Obj) => {
            // Add new data to .localStorage() Array,
            userObjectOptions.selectedAgent.push(agentSlot_Obj);
            console.log(userObjectOptions);

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },


        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set the user an attempt number for the runs made for
         * each trial of questions
         * ---
         * Returns:
         * NaN
        */
        incrementAttemptNumber: () => {
            // Add new data to .localStorage() Array,
            userObjectOptions.attemptNumber += 1

            // reset the user-parameters for a new round,
            userObjectOptions.selectedTimeSlots = [];
            userObjectOptions.selectedAgent = [];
            userObjectOptions.userSatisfaction1stRound.fairness = undefined;
            userObjectOptions.userSatisfaction2ndRound.fairness = undefined;
            userObjectOptions.userSatisfaction2ndRound.satisfaction = undefined;
            userObjectOptions.algorithmRoundResponseData.percentageTimeSlotsSatisfied = undefined;
            userObjectOptions.algorithmRoundResponseData.userData.selectedTimeSlots = [];
            userObjectOptions.algorithmRoundResponseData.userData.allocatedTimeSlots = [];
            userObjectOptions.algorithmRoundResponseData.userData.householdData = [];

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },


        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set the user an attempt number for the runs made for
         * each trial of questions
         * ---
         * Returns:
         * NaN
        */
        resetQuestionnaire: () => {
            localStorage.clear();

            // reset the user-parameters for a new round,
            userObjectOptions.userUID = Math.floor(100000 + Math.random() * 900000);
            userObjectOptions.attemptNumber = 1;
            userObjectOptions.selectedTimeSlots = [];
            userObjectOptions.selectedAgent = [];
            userObjectOptions.userSatisfaction1stRound.fairness = undefined;
            userObjectOptions.userSatisfaction2ndRound.fairness = undefined;
            userObjectOptions.userSatisfaction2ndRound.satisfaction = undefined;
            userObjectOptions.algorithmRoundResponseData.percentageTimeSlotsSatisfied = undefined;
            userObjectOptions.algorithmRoundResponseData.userData.selectedTimeSlots = [];
            userObjectOptions.algorithmRoundResponseData.userData.allocatedTimeSlots = [];
            userObjectOptions.algorithmRoundResponseData.userData.householdData = [];

            set(userObjectOptions)
        },


        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set the satisfaction score for the user and
         * store it in the .localStorage() appropiately
         * ---
         * Returns:
         * NaN
         * @param {*} stringScore 
        *  @param {*} scoreInt 
        */
        setUser1stScore: (stringScore, scoreInt) => {
            // Add new data to .localStorage() Array,
            userObjectOptions.userSatisfaction1stRound[stringScore] = scoreInt

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },


        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set the satisfaction score for the user and
         * store it in the .localStorage() appropiately
         * ---
         * Returns:
         * NaN
         * @param {*} stringScore 
         * @param {*} scoreInt 
        */
        setUser2ndScore: (stringScore, scoreInt) => {
            // Add new data to .localStorage() Array,
            userObjectOptions.userSatisfaction2ndRound[stringScore] = scoreInt

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },

        
        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc:
         * Set the satisfaction score for the user and
         * store it in the .localStorage() appropiately
         * ---
         * Returns:
         * NaN
         * @param {*} algorithmRoundResponseData 
        */
        setAlgorithmRoundResponseData: (algorithmRoundResponseData) => {
            // Add new data to .localStorage() Array,
            userObjectOptions.algorithmRoundResponseData = algorithmRoundResponseData

            // Save back to localStorage,
            localStorage.setItem(key, JSON.stringify(userObjectOptions));

            // set the new value as the new SvelteJs Store Object for Reactivity,
            set(userObjectOptions);
        },

        
        /**
         * SvelteJs Store Function | Method, [WORKING ✅]
         * ---
         * Desc: 
         * Method for rendeing on the start of the page some new data from,
         * the localstorage,
         * ---
         * Returns:
         * NaN
        */
        useLocalStorage: () => {
            // Get the existing data
            // reset the writable to the localStorage if localStorage already exists,
            var existing = localStorage.getItem(key);
            // console.log('userLocalStorage data -', existing); // testing, - "user-object"

            // If no existing data, create an array
            // Otherwise, convert the localStorage string to an array
            existing = existing ? JSON.parse(existing) : userObjectOptions;

            if (existing.userUID == undefined) {
                userObjectOptions.userUID = Math.floor(100000 + Math.random() * 900000)
            } else {
                userObjectOptions.userUID = existing.userUID
                userObjectOptions.attemptNumber = existing.attemptNumber;
                userObjectOptions.selectedTimeSlots = existing.selectedTimeSlots;
                userObjectOptions.selectedAgent = existing.selectedAgent;
                userObjectOptions.pastUserOptionsSelect = existing.pastUserOptionsSelect;
                userObjectOptions.userSatisfaction1stRound = existing.userSatisfaction1stRound;
                userObjectOptions.userSatisfaction2ndRound = existing.userSatisfaction2ndRound;
                userObjectOptions.algorithmRoundResponseData = existing.algorithmRoundResponseData;
            }
            // console.log('store-values: ', userObjectOptions.selectedTimeSlots, userObjectOptions.selectedAgent)
            
            // add the .localStorage() data to the svelteJs store for enabling of the reactiviy,
            set(userObjectOptions);
        },
    }
}

// declare the name of the .localStorage();
export const selectedTimeSlots = createLocalStorage('website-ai-user-selected-options');