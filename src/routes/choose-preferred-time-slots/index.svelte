<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    import { fade, slide } from 'svelte/transition';

    import { project_config } from '../../utils/project_config.js'
    import { time_slot_data } from '../../store/timeslots_data.js';
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    import TimeSlotCard from '../../components/Containers/_TimeSlotCard.svelte';

    let slide_a = 0
    let slide_b = 6
    let transition = true;
    let slideNum = 0;

    /**
     * Method - Function;
     * [WORKING 🏃‍♀✅]
     * ---
     * Desc:
     * Allows for the tracking of the slider navigation and view order,
     * ---
     * Return:
     * NaN
     * ---
     * @param val_change
    */
    function updateSliderValues(val_change) {

        transition = false
        setTimeout(() => {
            transition = true
        }, 450)

        slide_a = slide_a + val_change
        slide_b = slide_b + val_change

        if (val_change == 6) {
            slideNum++;
        } 
        if (val_change == -6 && slideNum != -1) {
            slideNum--;
        } 
        if (val_change == -6 && slideNum == -1) {
            slide_a = 18
            slide_b = 24
            slideNum = 3
        }
        // check if the limit of the time slots sliders has been exceded,
        // then reset the slider back to it's intial state,
        if (slide_a == 24) {
            slide_a = 0
            slide_b = 6
            slideNum = 0
        }
    }

    let numberOfSlides;
    let timeSlotAmount;

    /**
     * Method - Function;
     * [WORKING 🏃‍♀✅]
     * ---
     * Desc:
     * Allows for the tracking and updating of the slider values on the slideshow of card timeslots
     * with the clicking of the dots;
     * ---
     * Returns:
     * NaN
     * 
     * @param sliderDot_Pos
    */
    function updateSliderValuesSlideDot(sliderDot_Pos) {
        slideNum = sliderDot_Pos // , as it can be of value 0;

        transition = false
        setTimeout(() => {
            transition = true
        }, 450)

        // update the slide_a and slide_b to show the correct segment of data slots;
        slide_a = slideNum * 6
        slide_b = slide_a + 6
    }

    /**
     * SvelteJs Reactiviy Method,
     * ---
     * Desc:
     * selectedTimeSlots stores the users selection options for the current sessions,
     * ---
     * Returns:
     * NaN
    */
    $ : {
        // console.log('Data from the Selected Time Slots!')
        // console.log($selectedTimeSlots)
        // calcualte the proportion of slides to other information;

        timeSlotAmount = time_slot_data.length;         // get the total amount of timeslots;

        numberOfSlides = timeSlotAmount / 6;            // allocate the number of sldies and number of slide dots;

        // https://stackoverflow.com/questions/1435975/how-can-i-round-down-a-number-in-javascript
        numberOfSlides =  Math.floor(numberOfSlides)    // round down the number of cards per slide;
    }

    // Validation Function for the proceeding of the sequence of checkpoints,
    let proceed = true;
    $ : {
        if ($selectedTimeSlots.selectedTimeSlots.length == project_config[0].timeSlotsMax) { 
            proceed = false;
        } else {
            proceed = true;
        }
    }
</script>


<!--
=============
COMPONENT HTML 
=============
-->


<!-- page-section-info-actions -->
<div style='margin-bottom: 50px;'>
    <h2>Please select your preferred timeslots,</h2>
    <div class='selected-row-container'>
        <img src="./assets/svg/info-icon.svg" alt="info-icon">
        <p style='color: #007CEF; font-weight: bold; margin-left: 5px;'>- you can select up to {project_config[0].timeSlotsMax} time slots</p>
    </div>
    <!-- counter for the selected time-slot-cards, -->
    <div class='selected-row-container'>
        <p>Selected</p>
        <span class='counter-container'>{$selectedTimeSlots.selectedTimeSlots.length}/{project_config[0].timeSlotsMax}</span>
    </div>
</div>


<!-- page-section-card-grid -->
<div id='grid-time-slots-container'>
    {#if transition}
        {#each time_slot_data.slice(slide_a, slide_b) as slot_item}
            <TimeSlotCard time_data={slot_item} />
        {/each}
    {/if}
</div>


<!-- slider actions and options; -->
<div id='slider-options'>
    <!-- buttons actions -->
    <div id='slider-btn-container'>
        <!-- button more earlier times 
        (falls back to the previous 6 time-slots)
        -->
        <button class='earlier-btn button-icon' on:click={() => updateSliderValues(-6)}>Earlier Times</button>
        <!-- button more later times 
        (falls back to the next 6 time-slots)
        -->
        <button class='later-btn button-icon-right' on:click={() => updateSliderValues(6)}>Later Times</button>
    </div>
    <!-- slider-dots-ui 
        https://www.w3schools.com/howto/howto_css_circles.asp
    -->
    <div>
        {#each {length:numberOfSlides} as _, i}
            <span class="dot" on:click={() => updateSliderValuesSlideDot(i)} class:dot_active="{slideNum == i}"></span>
        {/each}
        <span class='counter-container'>{slideNum + 1}/{numberOfSlides}</span>
    </div>
    <!-- empty div, for aesthetics purposes, -->
    <!-- <div></div> -->
</div>


<!-- next button to the agent-selection-process; -->
<div class='sequence-continuation-container'>
    <!-- empty div, for aesthetics purposes, -->
    <div></div>
    <a rel=prefetch href="/choose-agent-type">
        <button disabled={proceed}>Next</button>
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
    #grid-time-slots-container {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 15px;
        height: 266px;
    }

    #slider-options {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #slider-btn-container {
        display: flex;
    }
    .later-btn {
        /* arrow right, */
        background-image: url("/assets/svg/right-arrow-vector.svg");
        background-repeat: no-repeat;
        background-position: right 15px top 50%;

        margin-left: 15px;
    } .later-btn:hover {
        background-image: url("/assets/svg/right-white-arrow-vector.svg");
    }
    .earlier-btn {
        /* arrow left, */
        background-image: url("/assets/svg/left-arrow-vector.svg");
        background-repeat: no-repeat;
        background-position: left 15px top 50%;
    } .earlier-btn:hover {
        background-image: url("/assets/svg/left-white-arrow-vector.svg");
    }

    .counter-container {
        background-color: #007CEF;
        padding: 3px;
        color: #FFFFFF;
        border-radius: 2.5px;
        margin-left: 10px;
    }

    .selected-row-container {
        display: flex;
        align-items: center;
        margin-top: 15px;
    }

    .dot {
        border-radius: 50%;
        display: inline-block;
        width: 13px;
        height: 13px;

        background: #FFFFFF;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

        transition: ease all 0.3s;
        cursor: pointer;

        margin-right: 8px;
    } .dot_active, .dot:hover {
        background: #007CEF;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .sequence-continuation-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>