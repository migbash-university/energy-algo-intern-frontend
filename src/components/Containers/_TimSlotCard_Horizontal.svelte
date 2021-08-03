<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    export let data;
</script>

<!--
=============
COMPONENT HTML 
=============
-->

<div 
    class='time-slot-card-horizontal' 
    >
    <!-- 
    selected-icon container -->
    <img 
        src='{data.image}' 
        alt=""
    />
    <h3 style="white-space: pre"> { data.time } </h3>
</div>

<!--
=============
COMPONENT CSS
=============
-->

<style>
    .time-slot-card-horizontal {
        width: calc(100vw / 8.62275449102);
        height: calc(100vw / 18.8926790869);
        background: #00AFEF;
        border-radius: 8.5641px;
        text-align: center;
        text-align: -webkit-center;
        position: relative;
        overflow: hidden;
        background-color: #00AFEF;
        transition: all ease 0.3s;
        display: flex;
        flex-direction: row;
        align-content: center;
        padding: 10.56px 24.84px 9.42px 13.5px;
        margin-right: calc(100vw / 30);
    } .time-slot-card-horizontal img {
        margin-right: calc(100vw / 186.770428016);
        width: 50%;
    } .time-slot-card-horizontal h3 {
        font-size: calc(100vw / 93.4155043789);
        color: white !important;
    }
</style>
