<script lang="ts">
	import ArrowRight from "lucide-svelte/icons/arrow-right";

	import { activeSectionStore } from "$lib/active-section-store";
	import { Button } from "$lib/components/ui/button/index";
	import * as Avatar from "$lib/components/ui/avatar/index";
	import avatar from "../../static/xindic.png";

	export let loadingStatus: any = undefined;

	let avatar2 =
		"https://cdn.discordapp.com/avatars/489824470941433856/4b6db5759da1030838a1582addfe420d.png?size=1024";

	const handleSectionChange = (section: string) => {
		const targetSection = document.getElementById(section);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};
</script>

<section
	id="Home"
	class="mb-10 scroll-mt-[100rem] text-center sm:mb-14 flex flex-col items-center"
>
	<div class="flex items-center justify-center w-full">
		<div class="relative">
			<Avatar.Root
				bind:loadingStatus
				class="mt-36 mb-10 h-24 w-24 rounded-full border transition-colors {loadingStatus ===
				'loaded'
					? 'border-foreground'
					: 'border-transparent'} bg-muted text-[17px] font-medium uppercase text-muted-foreground"
			>
				<div
					class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-5 border-transparent"
				>
					<Avatar.Image src={avatar2} alt="@xindic" />
					<Avatar.Fallback class="border border-muted">X</Avatar.Fallback>
				</div>
			</Avatar.Root>
		</div>
	</div>

	<h1 class="max-w-[70%] text-2xl font-medium !leading-[1.5] sm:text-4xl">
		Hey, <span class="font-bold">I'm xindic!</span> A roblox developer with over
		<span class="font-bold">2 years </span>
		of experience,
		<span class="font-bold">passionate</span>
		about{" "}
		<span class="font-bold">technology </span> and{" "}
		<span class="font-bold">computer science</span>
	</h1>
	<div class="flex justify-center my-10 gap-6">
		<Button
			on:click={() => handleSectionChange("Contact")}
			class="transition-color font-semibold shadow-lg"
			>Contact me <ArrowRight class="h-4 ml-auto" /></Button
		>
		<Button
			on:click={() => handleSectionChange("Projects")}
			class="transition-colors font-semibold shadow-lg"
			>View My Work <ArrowRight class="h-4 ml-auto" /></Button
		>
	</div>
</section>
