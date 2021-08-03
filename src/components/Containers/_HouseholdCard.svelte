<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    export let houseHoldData;
    // console.log("houseHoldData", houseHoldData)

    let agentSelectedTimes = houseHoldData.selectedTimeSlots
    let agentAllocatedTimes = houseHoldData.allocatedTimeSlots
</script>

<!--
=============
COMPONENT HTML 
=============
-->
<div>
    <div class='household-header'>
        <h4>{ houseHoldData.id }</h4>
        <img 
            src="./assets/svg/crowd.svg" 
            alt=""
        />
    </div>
    <div class='card-container'>
        {#each houseHoldData.allocatedTimeSlots as item}
            <div class='time-slot-box'
                class:preferred={item.preferred == true}
                >
                <img 
                    src={ item.image }
                    alt=""
                />
                <p>{ item.time }</p> 
            </div>
        {/each}
    </div>
</div>


<!--
=============
COMPONENT CSS
=============
-->

<style>
    .household-header {
        display: flex;
        align-items: center;
        justify-items: center;
        margin-bottom: calc(100vw / 87.0090634441);
    } .household-header h4 {
        font-size: calc(100vw / 72);
    } .household-header img {
        height: calc(100vw / 33.9222614841);
        width: calc(100vw / 25.2631578947);
    }
    .card-container {
        padding: calc(100vw / 160);
        background-color: white;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        display: grid;
        grid-gap: calc(100vw / 205.714285714);
        width: fit-content;
    }
    .time-slot-box {
        height: calc(100vw / 28.2352941176);
        width: calc(100vw / 12.8870592447);
        background: #00AFEF;
        border-radius: 5.73034px;
        display: flex;
        padding: calc(100vw / 205.714285714) calc(100vw / 84.7058823529) calc(100vw / 205.714285714) calc(100vw / 160);
    } .time-slot-box img {
        width: calc(100vw / 36.9515011547);
        height: calc(100vw / 41.8848167539);
    } .time-slot-box p {
        margin-left: calc(100vw / 265.682656827);
        font-size: calc(100vw / 139.670223084);
        font-weight: bold;
        text-align: center;
        white-space: pre;
    } .time-slot-box.preferred {
        background-color: #00D5A9;
    }
</style>