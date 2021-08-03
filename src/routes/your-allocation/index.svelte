
<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    import { post } from '../../api/utils.js';
    import { onMount } from 'svelte';

    /**
     * Import the Svelte-Sapper Component,
     * for the Horizontal TimeSlot Card, 
    */
    import TimSlotCard_Horizontal from "../../components/Containers/_TimSlotCard_Horizontal.svelte";

    /**
     * Import the Svelte-Sapper Stores,
     * to access the data-across Components and/or Pages 
     * (Internal-Database)
    */
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    /**
     * Obtaining the data from the `pre-fetch` 
     * & assigning it to the `Svelte-Sapper` Stores
    */
    // export let data;
    let userData = { 
        userSelectedTimeSlots: $selectedTimeSlots.selectedTimeSlots
    }
    
    onMount(async() => {
        console.log('userData Passed', userData);
        const response = await post('/run_algorithm', userData);
        console.log('response', response);
        selectedTimeSlots.setAlgorithmRoundResponseData(response);
    })

    let selectedRating = $selectedTimeSlots.userSatisfaction1stRound.fairness; 

    /**
     * Store the Fairness Score in LocalStorage();
    */
    async function fairnessStore(fairnessScore) {
        selectedTimeSlots.setUser1stScore('fairness', fairnessScore)
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
    <!-- 
    view-selected-allocation-times allocation -->
    <h2 style='margin-bottom: 39px;'>See your allocation below!</h2>
    <p style='margin-bottom: 39px;'>You have been allocated the following time slots:</p>
    <div style='margin-bottom: 58px; display: flex;'>
        {#each $selectedTimeSlots.selectedTimeSlots as item}
            <TimSlotCard_Horizontal data={item} />
        {/each}
    </div>
    <!-- 
    fairness allocation -->
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
</div>

<!-- 
next button to the agent-selection-process; -->
<div class='sequence-continuation-container'>
    <div />
    <a rel=prefetch href="/everyones-allocation">
        <button id='confirm-btn'>Continue</button>
    </a>
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
    p {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }
    /* 
    sequence-cont boxes & ratings */
    .sequence-continuation-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>