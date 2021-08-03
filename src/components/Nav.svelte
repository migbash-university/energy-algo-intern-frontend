<!--
=============
COMPONENT SCRIPT 
=============
-->
<script>
	import {
		fade
	} from "svelte/transition";
	import {
		goto
	} from '@sapper/app';

	import {
		selectedTimeSlots
	} from '../store/store_userSelectedTimeSlots.js';

    import { project_config } from '../utils/project_config.js'

	import {
		stores
	} from '@sapper/app';
	const {
		preloading,
		page,
		session
	} = stores();

	export let segment;

	// ~~~~~~~~~~~~~~~~~
	// COMPONENT METHODS
	// ~~~~~~~~~~~~~~~~~

	/**
	 * Function, [WORKING]
	 * -----
	 * Desc:
	 * search action - redirect
	 */
	let selected = true;
	setTimeout(() => {
		selected = !selected;
	}, 1000)
</script>

<!--
=============
COMPONENT SVELTE STUFF 
=============
-->

<!--
=============
COMPONENT HTML 
=============
-->
<nav>
	<!-- website navbar branding, -->
	<img 
		id='brand-img' 
		src="./assets/img/edinburgh-napier-brand-img.png" 
		height='48px' width='85px'
		alt="edinburgh-university-brand.png">

	{#if segment == 'choose-preferred-time-slots' ||
		segment == 'choose-agent-type' || 
		segment == 'view-summary'
	}
	
		<div style='width: min-content; margin: auto;'>
			<!-- naviagational-checkpoint-roadmap, 
			- https://css-tricks.com/svg-line-animation-works/ - svg animation, -->
			<svg id='checkpoint-marker' width="390" height="118" viewBox="0 0 370 118" fill="none" xmlns="http://www.w3.org/2000/svg">
				
				<!-- 
				choose-preferred-time-slot circle, 
				STARTING POINT; -->
				<a rel=prefetch href="/choose-preferred-time-slots">
					{#if segment === 'choose-preferred-time-slots'}
						<circle in:fade="{{ duration: 350 }}" cx="62.5" cy="31.5" r="29" fill="#D6D6D6" stroke="#1C88EC" stroke-width="5"/>
					{:else}
						<g in:fade="{{ duration: 350 }}" opacity="0.5">
							<circle cx="62.5" cy="31.5" r="29" fill="#54FD19" stroke="#00D1FF" stroke-width="5"/>
							<path d="M52 32L60 40L73.3333 24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
					{/if}
				</a>

				<!-- 
				choose-preferred-time-slot circle, -->
				<a rel=prefetch href="/choose-agent-type">
					<!-- 
					active circle; -->
					{#if segment === 'choose-agent-type'}
						<circle in:fade="{{ duration: 350 }}" cx="198.5" cy="31.5" r="29" fill="#D6D6D6" stroke="#1C88EC" stroke-width="5"/>
					<!-- 
					completed checkpoint circle; -->
					{:else if segment === 'view-summary'}
						<g in:fade="{{ duration: 350 }}" opacity="0.5">
							<circle cx="198.5" cy="31.5" r="29" fill="#54FD19" stroke="#00D1FF" stroke-width="5"/>
							<path d="M188 32L196 40L209.333 24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
					<!-- 
					on-going checkpoint circle; -->
					{:else}
						<circle in:fade="{{ duration: 350 }}" cx="198.5" cy="31.5" r="29" fill="#D6D6D6" fill-opacity="0.5"/>
					{/if}
				</a>

				<!-- 
				view-summary-slot circle,
				ENDING POINT; -->
				<a rel=prefetch href="/view-summary">
					<!-- 
					completed circle all checkpoints; -->
					{#if segment === 'view-summary'}
						<g in:fade="{{ duration: 350 }}" opacity="0.5">
							<circle cx="334.5" cy="31.5" r="29" fill="#54FD19" stroke="#00D1FF" stroke-width="5"/>
							<path d="M324 32L332 40L345.333 24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
					<!-- 
					next checkpoint circle; -->
					{:else}
						<circle in:fade="{{ duration: 350 }}" cx="334.5" cy="31.5" r="29" fill="#D6D6D6" fill-opacity="0.5"/>
					{/if}
				</a>

				<text 
					id="Choose time slots" 
					fill="black"
					opacity="0.5"
					xml:space="preserve" 
					style="white-space: pre" 
					font-family="Exo 2" 
					font-size="16" 
					letter-spacing="0em"
					class={segment === 'choose-preferred-time-slots' ? 'opacityInc' : '' }
					>
					<tspan 
						x="35"
						y="85">
						Choose &#10;
					</tspan>
					<tspan 
						x="25" 
						y="100">
						time slots
					</tspan>
				</text>
				<text 
					id="Choose agent type"
					opacity="0.5" 
					fill="black" 
					xml:space="preserve" 
					style="white-space: pre" 
					font-family="Exo 2" 
					font-size="16" 
					letter-spacing="0em"
					class={segment === 'choose-agent-type' ? 'opacityInc' : '' }
					>
					<tspan 
						x="170" 
						y="85">
						Choose &#10;
					</tspan>
					<tspan 
						x="160" 
						y="100">
						agent type	
					</tspan>
				</text>
				<text 
					id="View Summary" 
					opacity="0.5" 
					fill="black" 
					xml:space="preserve" 
					style="white-space: pre" 
					font-family="Exo 2" 
					font-size="16" 
					letter-spacing="0em"
					class={segment === 'view-summary' ? 'opacityInc' : '' }
					>
					<tspan 
						x="320" 
						y="85"
						>
						View &#10;
					</tspan>
					<tspan 
						x="305"
						 y="100"
						>
						 Summary
					</tspan>
				</text>
				
				<!-- 
				checkpoint-connectors for the circles, -->
				<path class:path={segment === 'choose-agent-type' || segment === 'view-summary'} d="M90 18C122.022 8.79754 139.978 8.5367 172 18" stroke="#1C88EC" stroke-width="5" stroke-dasharray="10 10"/>
				<path class:path={segment === 'view-summary'} d="M227 48C259.022 57.2025 276.978 57.4633 309 48" stroke="#1C88EC" stroke-width="5" stroke-dasharray="10 10"/>
			</svg>
		</div>
	{:else} 
		<div style="height: 160px;" />
	{/if}

	<!-- 
	attmept counter -->
	<svg 
		width="170" 
		height="44" 
		viewBox="0 0 170 44" 
		fill="none" 
		xmlns="http://www.w3.org/2000/svg"
		id="attempt-counter"
		>
		<g id="attempt-counter_svg__attempt-counter">
			<circle id="attempt-counter_svg__Ellipse_22" cx="104" cy="22" r="21.5" fill="#fff" stroke="#000"/>
			<text id="attempt-counter_svg__Attempt" fill="#000" xml:space="preserve" style="white-space:pre" font-family="Exo 2" font-size="18" font-weight="bold" letter-spacing="0em">
				<tspan x="0" y="29.38">Attempt</tspan>
			</text>
			<text id="attempt-counter_svg__1" fill="#000" xml:space="preserve" style="white-space:pre" font-family="Exo 2" font-size="18" font-weight="bold" letter-spacing="0em">
				<tspan x="100" y="29.38">{ $selectedTimeSlots.attemptNumber } </tspan>
			</text>
			<text id="attempt-counter_svg__/_10" fill="#000" xml:space="preserve" style="white-space:pre" font-family="Exo 2" font-size="18" font-weight="bold" letter-spacing="0em">
				<tspan x="137" y="29.38">/ { project_config[0].attempts } </tspan>
			</text>
		</g>
	</svg>
</nav>


<!--
=============
COMPONENT CSS
MOBILE FIRST,
=============
-->
<style>
	nav {
		margin-bottom: 20px;
		text-align: center;
		/* padding:20px; */
		position: relative;
	}

	#brand-img {
		position: absolute;
    	left: 0;
	}

	/* 
	animation for the chekpoint counter */
	/* svg#checkpoint-marker {
		zoom: 0.5;
	} */
	svg#checkpoint-marker .path {
		/* stroke-dasharray: 1000; */
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		animation: dash 5s linear forwards;
	}
	@keyframes dash {
		to {
			stroke-dashoffset: 0;
  		}
	}

	svg#attempt-counter {
		position: absolute;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
	}

	.opacityInc {
		opacity: 1;
	}

	/* 
    =============
    RESPONSIVNESS
    =============
    */
    
    @media only screen and (min-width: 1024px) {
		svg {
			zoom: 1;
		}
    }
</style>