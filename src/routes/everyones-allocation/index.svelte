<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    import {
        slide
    } from "svelte/transition";

    /**
     * Import the Svelte-Sapper Stores,
     * to access the data-across Components and/or Pages 
     * (Internal-Database)
    */
    // import { dummyAlgorithmData } from '../../store/dummy_AlgorithmDataResponse.js';
    import { selectedTimeSlots } from '../../store/store_userSelectedTimeSlots.js';

    import HouseHoldCard from '../../components/Containers/_HouseholdCard.svelte';

    // data from the Algorithm for the website;
    let extraInfoPopUp = false;
</script>

<!--
=============
COMPONENT HTML 
=============
-->

<div>
    <div id='header-row'>
        <!-- 
        visual-info-for-the-user to know that `this` 
        card is his allocated / preferred times -->
        <svg width="193" height="56" viewBox="0 0 193 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 1">
            <text id="These are your selected and allocated time-slots" fill="#A183FF" xml:space="preserve" style="white-space: pre" font-family="Exo 2" font-size="12" letter-spacing="0em"><tspan x="0" y="11.788">These are your selected and </tspan><tspan x="0" y="25.788">allocated time-slots</tspan></text>
            <path id="Vector 7" d="M144.5 21C155.7 36.6 144.833 49.8333 138 54.5M138 54.5V47M138 54.5H144.5" stroke="#A183FF" stroke-width="2.5" stroke-linecap="round"/>
            </g>
        </svg>
        <!-- 
        visual-info-for-the-user Legend Container Box -->
        <svg width="144" height="56" viewBox="0 0 144 56" fill="none" xmlns="http://www.w3.org/2000/svg" id='box-legend'>
            <g id="Group 2">
            <text id="Legend" fill="black" xml:space="preserve" style="white-space: pre" font-family="Exo 2" font-size="10.3146" font-weight="bold" letter-spacing="0em"><tspan x="0" y="10.229">Legend</tspan></text>
            <g id="User Preferred Time-slots">
            <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Exo 2" font-size="10.3146" letter-spacing="0em"><tspan x="20" y="34.1723">User </tspan><tspan x="90.7618" y="34.1723"> Time-slots</tspan></text>
            <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Exo 2" font-size="10.3146" font-weight="bold" letter-spacing="0em"><tspan x="43.8626" y="34.1723">Preferred</tspan></text>
            </g>
            <g id="User Allocated Time-slots">
            <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Exo 2" font-size="10.3146" letter-spacing="0em"><tspan x="20" y="53.1723">User </tspan><tspan x="90.5906" y="53.1723"> Time-slots</tspan></text>
            <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Exo 2" font-size="10.3146" font-weight="bold" letter-spacing="0em"><tspan x="43.8626" y="53.1723">Allocated</tspan></text>
            </g>
            <g id="Rectangle 1" filter="url(#filter0_i)">
            <rect y="43" width="13" height="13" rx="2.5" fill="#00D5A9"/>
            </g>
            <g id="Rectangle 2" filter="url(#filter1_i)">
            <rect y="24" width="13" height="13" rx="2.5" fill="#00AFEF"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_i" x="0" y="43" width="13" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <filter id="filter1_i" x="0" y="24" width="13" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            </defs>
        </svg>
    </div>
    <!-- 
    user-allocated times given by the algorithm -->
    <div id='user-data-res'>
        <HouseHoldCard houseHoldData={ $selectedTimeSlots.algorithmRoundResponseData.userData } />
    </div>
    <h2 style='margin-bottom: 50px;'>See everyone else’s allocations below!</h2>
</div>

<!-- 
variable dependant on ALgorithm Return Data;
displays X amount of Agents (households),
where X is the data Length gathered from the 
Algorithm Dataa Return -->
<div id='agent-household-grid'>
    {#each $selectedTimeSlots.algorithmRoundResponseData.householdData as item}
        <HouseHoldCard houseHoldData={item} />
    {/each}
</div>

<!-- 
next button to the agent-selection-process; -->
<div class='sequence-continuation-container'>
    <div />
    <a rel=prefetch href="/how-fair-allocation">
        <button id='continue-btn'>Continue</button>
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
    #header-row {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: row;
        align-items: center;
    }
    #box-legend {
        margin-left: calc(100vw / 8.18181818182);
    }
    #user-data-res {
        margin: calc(100vw / -205.714285714) 0 calc(100vw / 90) 0;
    }
    #agent-household-grid {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
        grid-gap: calc(100vw / 31.3043478261) calc(100vw / 14.4);
    }
    .sequence-continuation-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    #continue-btn {
        background-color: #60CF70;
        color: white; 
        font-weight: bold;
    }
</style>