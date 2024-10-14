<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { links } from "../lib/data";
	import { activeSectionStore } from "../lib/active-section-store";
	import { observeSections } from "$lib/observe-sections";
	import * as ToggleGroup from "$lib/components/ui/toggle-group/index";

	let size: "lg" | "default" = "lg";
	let activeSection: string;
	let observer: IntersectionObserver | null = null;

	const unsubscribeActiveSection = activeSectionStore.subscribe((store) => {
		console.log(store.activeSection);
		activeSection = store.activeSection;
	});

	const updateSize = () => {
		if (window.innerWidth < 640) { 
			size = 'default';
		} else {
			size = 'lg';
		}
	};

	onDestroy(() => {
		unsubscribeActiveSection();

		if (observer) {
			observer.disconnect();
		}
	});

	onMount(() => {
		observer = observeSections();
		updateSize()
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	});


	const handleSectionChange = (section: string) => {
		const targetSection = document.getElementById(section);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

</script>

<div class="fixed z-[999] top-6 w-full flex justify-center">
	<ToggleGroup.Root
		type="single"
		value={activeSection}
		size={size}
		onValueChange={(value) => {
			if (value) handleSectionChange(value);
		}}
		class="w-[74%] sm:w-auto transition-colors shadow-lg bg-white dark:bg-black border-2 rounded-xl"
	>
		{#each links as link (link.hash)}
			<ToggleGroup.Item value={link.name} class="sm:w-auto w-[19%]">
				{link.name}
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</div>
