<script>
	import "../app.css"
  import { theme } from "$lib/theme-store";
	import ThemeToggle from "../components/theme-toggle.svelte"
  import Navbar from "../components/navbar.svelte";

	export const prerender = true;

	export function load() {
  	theme.subscribe(value => {
    	document.documentElement.className = value;
	});
}
</script>

<main>
	<ThemeToggle />
	<Navbar />
</main>

<slot/>


