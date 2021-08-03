<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    import { fade } from "svelte/transition";

    import { project_config } from '../../utils/project_config.js';
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    export let time_data;

    let selected = false;

    /**
     * Function SvelteJs Reactivity method:
     * ---
     * Desc:
     * Checks if 'this' card compnent has already been selected in the past and assigns it,
     * the 'selected' boolean option to 'true'
     * ---
     * Returns:
     * NaN
    */
    $: {
        if (verifyTimeExistance($selectedTimeSlots.selectedTimeSlots)) {
            selected = true;
        }
    }

    /**
     * Function | Method
     * ---
     * Desc:
     * The ability to select a particular timeslot card,
     * store it and UI/UX change for its display,
     * ---
     * Return:
     * NaN
    */
    function selectTimeSlot() {
        if ($selectedTimeSlots.selectedTimeSlots.length < project_config[0].timeSlotsMax && !verifyTimeExistance($selectedTimeSlots.selectedTimeSlots)) {
            selected = !selected;
            //TODO: Add the ability to select and add a new userTimeSlot selction to the userObject Selection;
            selectedTimeSlots.setSelectedTimeSlots(time_data);
        } else if (selected == true) {
            selected = !selected;
            // TODO: Unselect from the localStorage & svelteJs Store;
            selectedTimeSlots.removeSelectedTimeSlot(time_data);
        } else {
            alert("You have already selected the maximum slots allowed.")
        }
    }

    /**
     * Fuction | Method
     * ---
     * Desc:
     * Checks whether the .localStorage data contains
     * the correct timeslot
     * https://stackoverflow.com/questions/51603456/array-includes-to-find-object-in-array
     * ---
     * Return:
     * Boolean
    */
    function verifyTimeExistance(arrOfObj) {
        var isObjPresent = arrOfObj.some(item => item.time === time_data.time)
        return isObjPresent
    }
</script>

<!--
=============
COMPONENT HTML 
=============
-->

<div in:fade class='time-slot-card' on:click="{() => selectTimeSlot()}">
    <!-- selected-icon container -->
    {#if selected}
        <img in:fade="{{ duration: 250 }}" class='select-ui-icon' src="./assets/svg/selected-card-icon.svg" alt="selected-icon">
    {/if}

    <img src='{time_data.image}' alt="">
    <!-- https://stackoverflow.com/questions/44628663/newline-character-does-not-work-when-parsing-as-json-string-object -->
    <h3 style="white-space: pre-wrap">{time_data.time}</h3>
</div>

<!--
=============
COMPONENT CSS
=============
-->

<style>
    .time-slot-card {
        max-width: 241px;
        height: 266px;
        cursor: pointer;
        text-align: center;
        text-align: -webkit-center;
        position: relative;
        overflow: hidden;
        background-color: #00AFEF;
        border-radius: 10px;
        transition: all ease 0.3s;
        display: grid;
        align-content: center;
    } .time-slot-card:hover {
        box-shadow: 0 0 10px #000000;
        background-color: white;
    } .time-slot-card img {
        width: 50%;
    } .time-slot-card h3 {
        color: white !important;
    } .time-slot-card:hover h3 {
        color: #000000 !important;
    }

    .select-ui-icon {
        position: absolute;
        width: 50px !important;
        right: 0px;
        top: 0px;
    }
</style>
