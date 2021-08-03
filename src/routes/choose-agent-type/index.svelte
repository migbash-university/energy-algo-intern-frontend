<!--
=============
COMPONENT JS 
=============
-->


<script>
    import { agentType_data } from '../../store/agentType_data.js';
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';
    import { project_config } from '../../utils/project_config.js';

    import AgentSlotCard from '../../components/Containers/_AgentSlotCard.svelte';

    // Validation Function for the proceeding of the sequence of checkpoints,
    let proceed = true;
    $ : {
        if ($selectedTimeSlots.selectedAgent.length == project_config[0].agentSlotsMax) { 
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
        <p style='color: #007CEF; font-weight: bold; margin-left: 5px;'>- you can select up to 1 type of agent,</p>
    </div>
    <!-- counter for the selected time-slot-cards, -->
    <div class='selected-row-container'>
        <p>Selected</p>
        <span class='counter-container'>{$selectedTimeSlots.selectedAgent.length}/{project_config[0].agentSlotsMax}</span>
    </div>
</div>


<!-- page-section-card-grid -->
<div id='grid-agent-select-container'>
    {#each agentType_data as agentItem}
        <AgentSlotCard agent_type={ agentItem } />
    {/each}
</div>


<!-- next button to the agent-selection-process; -->
<div class='sequence-continuation-container'>
    <a rel=prefetch href="/choose-preferred-time-slots">
        <button>Back</button>
    </a>
    <a rel=prefetch href="/view-summary">
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
    #grid-agent-select-container {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 15px;
        height: 266px;
        width: fit-content;
        justify-content: start;
        grid-template-columns: repeat(2, 1fr);
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

    .sequence-continuation-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>