<!--
=============
COMPONENT SCRIPT 
=============
-->

<script>
    import { selectedTimeSlots } from '../store/store_userSelectedTimeSlots.js';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	
	import Nav from '../components/Nav.svelte';

	export let segment;
	
	// loading the data in the localStorage() data, in the broswer loading section,
	if (process.browser) {
		// Before we can use set on darkmode & linkArray we need to call the
		// .useLocalStorage() doing this at the _layout file makes
		// all routes and components exposed to this so we can
		// import the state and call set anywhere like in a component such as: Btn.svelte;
		selectedTimeSlots.useLocalStorage();

		// Log it to make sure it works client side, (browser);
		// console.log(localStorage.getItem('website-ai-user-selected-options')); // ✅ working upons loading the browser;

		// solution to the 404 JSON Err, .localStorage() not found,
		// uncomment the bottom line to reset the localstorage variables;
		// localStorage.clear();
	}	
</script>

<!--
=============
COMPONENT SVELTE STUFF 
=============
-->

<svelte:head>
	<title> AI Website Energy MVP </title>
    <meta name="title" content="AI Website Energy MVP">
    <meta name="description" content="AI Website Energy MVP">
	<meta name="keywords" content="energy, AI, allocation, selfish-agent, social-agent">
	<meta name="author" content="Miguel Bacharov">
</svelte:head>

<!--
=============
COMPONENT HTML 
=============
-->

<main in:fade>
	<Nav {segment}/>
	<slot></slot>
</main>

<!-- <Footer /> -->

<!--
=============
COMPONENT CSS
MOBILE FIRST,
=============
-->

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); */
	@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:global(body) {
		font-family: 'Exo 2', sans-serif;
	}
	main {
		padding: 41px 81px;
		position: relative;

		/* height: 100vh; */
    	/* height: var(--app-height); */
	}

	/* 
    =============
    RESPONSIVNESS
    =============
    */
    
    @media only screen and (min-width: 1024px) {
        main {
			padding: 41px 81px;
        }
    }
</style>