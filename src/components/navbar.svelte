<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { links } from "../lib/data";
	import { activeSectionStore } from "../lib/active-section-store";
	import { observeSections } from "$lib/observe-sections";
	import * as ToggleGroup from "$lib/components/ui/toggle-group/index";

	let activeSection: string;
	let observer: IntersectionObserver | null = null;

	onMount(() => {
		observer = observeSections();
	});

	const unsubscribeActiveSection = activeSectionStore.subscribe((store) => {
		console.log(store.activeSection);
		activeSection = store.activeSection;
	});

	onDestroy(() => {
		unsubscribeActiveSection();

		if (observer) {
			observer.disconnect();
		}
	});

	const handleSectionChange = (section: string) => {
		const targetSection = document.getElementById(section);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};
</script>

<div class="fixed z-[999] top-0 sm:top-6 w-full flex justify-center">
	<ToggleGroup.Root
		type="single"
		value={activeSection}
		size="lg"
		onValueChange={(value) => {
			if (value) handleSectionChange(value);
		}}
		class="w-full transition-colors shadow-lg bg-white dark:bg-black border-2 sm:w-auto sm:rounded-xl rounded-none"
	>
		{#each links as link (link.hash)}
			<ToggleGroup.Item value={link.name}>
				{link.name}
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</div>
