<script lang="ts">
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { onDestroy } from "svelte";
	import { theme } from "$lib/theme-store";
	import { Button } from "$lib/components/ui/button/index.js";

	let currentTheme: "light" | "dark";

	const unsubscribeTheme = theme.subscribe((value) => {
		currentTheme = value;
	});

	onDestroy(() => {
		unsubscribeTheme();
	});

	function toggleTheme() {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		theme.set(newTheme);
	}
</script>

<Button
	on:click={toggleTheme}
	variant="outline"
	size="icon"
	class="fixed z-[1000] shadow-lg border-2 top-2 sm:top-6 sm:h-10 sm:w-10 h-8 w-8 left-[92%]"
>
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
