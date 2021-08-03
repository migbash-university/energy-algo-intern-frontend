<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>

    import { project_config } from '../../utils/project_config.js'
	import { post } from '../../utils/fetch.js';
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    let selectedRating = $selectedTimeSlots.userSatisfaction2ndRound.fairness; 
    // let selectedSatisfactionRating = $selectedTimeSlots.userSatisfaction2ndRound.satisfaction; 

    /**
     * Updates the attempt Number made by the user,
     * @param selectedOption
    */
    async function updateAttemptNumber() {
        storeData();
        selectedTimeSlots.incrementAttemptNumber();
    }   

    /**
     * Gets the `.localStorage()` data for `this` attempt / round,
     * and stores the data into the .csv file,
    */
    async function storeData() {
        let dataObj = $selectedTimeSlots;
        // console.log('data-send', dataObj);
		return await post(`data/storeData`, dataObj);
    }

    /**
     * Store the Satisfaction Score in LocalStorage();
    */
    async function satisfactionStore(satisfactionScore) {
        selectedTimeSlots.setUser2ndScore('satisfaction', satisfactionScore)
    }

    /**
     * Store the Fairness Score in LocalStorage();
    */
    async function fairnessStore(fairnessScore) {
        selectedTimeSlots.setUser2ndScore('fairness', fairnessScore)
        selectedRating = fairnessScore;
    }
</script>

<!--
=============
COMPONENT HTML 
=============
-->

<!-- 
page-section-info-actions -->
<div>
    <h2 style='margin-bottom: 50px;'>How fair were the time slots alocated?</h2>
    <div id='fairness-rating' class='flex-container'>
        <p>Very unfair</p>
        <div class='circle'
            class:selectedRatingStyle={selectedRating === 1}
            on:click={() => fairnessStore(1)}
        >  
        1
        </div>
        <div class='circle'
            class:selectedRatingStyle={selectedRating === 2}
            on:click={() => fairnessStore(2)}
        >  
        2
        </div>
        <div class='circle'
            class:selectedRatingStyle={selectedRating === 3}
            on:click={() => fairnessStore(3)}
        >  
        3
        </div>
        <div class='circle'
            class:selectedRatingStyle={selectedRating === 4}
            on:click={() => fairnessStore(4)}
        >  
        4
        </div>
        <div class='circle'
            class:selectedRatingStyle={selectedRating === 5}
            on:click={() => fairnessStore(5)}
        >  
        5
        </div>
        <p>Completely fair</p>
    </div>
    <p id='info-text'>
        How satisfied are you with your allocated time slots after <br /> 
        reviewing other users' allocations?
    </p>
    <div id='satisfaction-rating' class='flex-container'>
        <div id='happy-sun' 
            class='satisfaction-circle'
            class:selectedSatisfactionStyle={$selectedTimeSlots.userSatisfaction2ndRound.satisfaction == 'happy'}
            on:click={() => satisfactionStore('happy')}
        >
        </div>
        <div id='neutral-sun' 
            class='satisfaction-circle'
            class:selectedSatisfactionStyle={$selectedTimeSlots.userSatisfaction2ndRound.satisfaction == 'neutral'}
            on:click={() => satisfactionStore('neutral')}
        >
        </div>
        <div id='angry-sun' 
            class='satisfaction-circle'
            class:selectedSatisfactionStyle={$selectedTimeSlots.userSatisfaction2ndRound.satisfaction == 'angry'}
            on:click={() => satisfactionStore('angry')}
        >
        </div>
    </div>
</div>

<!--
next button to the agent-selection-process; 
checks if the user has fully completed all of the questions
and all of the attemtps, -->
<div class='sequence-continuation-container'>
    <div />
    {#if $selectedTimeSlots.attemptNumber != project_config[0].attempts}
        <a  rel='prefetch' 
            href="/choose-preferred-time-slots"
            on:click={() => updateAttemptNumber()}
        >
            <button id='confirm-btn'>Continue</button>
        </a>
    {:else}
        <a  rel='prefetch' 
            href="/thank-you"
        >
            <button id='finish-btn'>Finish</button>
        </a>
    {/if}
</div>

<!--
=============
COMPONENT CSS
=============
- MOBILE FIRST DESIGN
=============
-->

<style>
    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }

    #satisfaction-rating {
        width: 352px;
        height: auto;
    }

    .satisfaction-circle {
        width: 115.28px;
        height: 92px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 104px 83px;
        cursor: pointer;
        transition: all 0.05s ease-in-out;
    } .satisfaction-circle:hover,
      .selectedSatisfactionStyle {
        background-size: 115.28px 92px;
    }
    #happy-sun {
        background-image: url('/assets/svg/happy-sun-mask-group.svg');
    } #happy-sun:hover,
      #happy-sun.selectedSatisfactionStyle {
        background-image: url('/assets/svg/happy-sun-mask-group-on-hover.svg');
    }
    #neutral-sun {
        background-image: url('/assets/svg/netural-sun-mask-group.svg');
    } #neutral-sun:hover,
      #neutral-sun.selectedSatisfactionStyle {
        background-image: url('/assets/svg/neutral-sun-mask-group-on-hover.svg');
    }
    #angry-sun {
        background-image: url('/assets/svg/angry-sun-mask-group.svg');
    } #angry-sun:hover,
      #angry-sun.selectedSatisfactionStyle {
        background-image: url('/assets/svg/angry-sun-mask-group-on-hover.svg');
    }

    p {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }

    #info-text {
        margin-bottom: 48px;
    }

    #fairness-rating {
        width: 666px;
        height: auto;
        margin-bottom: 56px;
    }

    .circle {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    } .circle:hover, 
      .selectedRatingStyle {
        color: #ffffff !important;
        background-color: #00AFEF !important;
    }

    .sequence-continuation-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #confirm-btn {
        background-color: #60CF70; 
        color: white; 
        font-weight: bold;
    }
    #finish-btn {
        background-color: #EE4237; 
        color: white; 
        font-weight: bold;
    }
</style>