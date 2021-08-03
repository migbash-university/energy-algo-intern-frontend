<!--
=============
COMPONENT JS 
=============
-->

<script>
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    function resetEverything() {
        selectedTimeSlots.resetQuestionnaire();
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
    <h2>Thank you for completing our questions</h2>
    <img 
        src="./assets/svg/thank-you-checkmark-vector.svg" 
        alt="checkmark"
    />
    <a  rel='prefetch' 
        href="/choose-preferred-time-slots"
        on:click={() => resetEverything()}
    >
        <button id='restart-btn'>Restart</button>
    </a>
    <p>you may now close this window.</p>
</div>

<!--
=============
COMPONENT CSS
=============
optimized for:
- desktop design,
=============
-->

<style>
    div {
        display: flex;
        justify-content: center;
        align-content: center;
        justify-items: center;
        flex-direction: column;
        align-items: center;
    }

    h2,
    img {
        margin-bottom: 43px;
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }

    #restart-btn {
        background-color: #FF6043; 
        color: white; 
        font-weight: bold;
        margin-bottom: 69px;
    }
</style>