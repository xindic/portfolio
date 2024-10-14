:script>
	import { onMount } from "svelte";
	import Seperator from "$lib/components/ui/separator/separator.svelte";

	let opacity = 0;
	let translateY = 100;

	onMount(() => {
		opacity = 1;
		translateY = 0;
	});
</script>

<div class="w-full flex justify-center">
	<Seperator
		orientation="horizontal"
		class="w-3/4 h-1 my-16 bg-border transition-colors"
		style="opacity: {opacity}; transform: translateY({translateY}px); transition: opacity 0.5s cubic-out, transform 0.5s cubic-out;"
	/>
</div>
