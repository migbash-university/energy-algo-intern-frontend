<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    /**
     * Import the Svelte-Sapper Stores,
     * to access the data-across Components and/or Pages 
     * (Internal-Database)
    */
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    /**
     * Import the Svelte-Sapper Component,
     * for the Horizontal TimeSlot Card, 
    */
    import TimSlotCard_Horizontal from "../../components/Containers/_TimSlotCard_Horizontal.svelte";
</script>

<!--
=============
COMPONENT HTML 
=============
-->


<!-- 
page-section-info-actions -->
<div>
    <h2 style='margin-bottom: 50px;'>You can see the selected options:</h2>
    <table>
        <tr id='table-head'>
        <th id='preferred-time-head'>Your preferred time slots,</th>
        <th id='preferred-agent-head'>Preferred agent behaviour,</th>
        </tr>
        <tr>
            <td id='timeslots-cell'>
                <div id='grid-timeslots'>
                    {#each $selectedTimeSlots.selectedTimeSlots as item}
                        <TimSlotCard_Horizontal data={item} />
                    {/each}
                </div>
            </td>
            <td id='agent-cell'>
                {#each $selectedTimeSlots.selectedAgent as item}
                    <div id='agent-circle'>
                        <img 
                            src={ item.image } 
                            alt=""
                            > 
                        <p>{ item.name }</p>
                    </div>
                {/each}
            </td>
        </tr>
    </table>
</div>


<!-- 
next button to the agent-selection-process; -->
<div class='sequence-continuation-container'>
    <a rel=prefetch href="/choose-agent-type">
        <button>Back</button>
    </a>
    <a rel=prefetch href="/your-allocation">
        <button style='background-color: #60CF70; color: white; font-weight: bold;'>Confirm</button>
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
    table {
        width: calc(100vw / 2.65682656827);
    }
    tr,
    th {
        padding: 0 0 15px 15px;
        text-align: start;
    }
    td {
        padding: 15px 0;
    }
    th {
        border-bottom: 2.5px solid rgba(238, 238, 238, 1);
    }
    #preferred-time-head {
        border-right: 2.5px solid rgba(238, 238, 238, 1);
    }
    #preferred-agent-head {
        padding-left: 45px;
    }
    #timeslots-cell {
        border-right: 2.5px solid rgba(238, 238, 238, 1);
    }
    #grid-timeslots {
        display: grid;
        grid-gap: 12.78px;
    }
    #agent-circle {
        align-content: center;
        display: grid;
        justify-content: center;
        margin-left: 45px;
        border-radius: 50%;
        background-color: #00AFEF;
        width: calc(100vw / 7.74193548387);
        height: calc(100vw / 7.74193548387);
    }
    .sequence-continuation-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>