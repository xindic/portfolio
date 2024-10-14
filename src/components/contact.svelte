<script>
	import SectionHeading from "./section-heading.svelte";
	import { Button } from "$lib/components/ui/button/index";
	import Icon from "@iconify/svelte";

	const contactInfo = [
		{
			name: "Discord",
			text: "@xindic",
			icon: "ic:baseline-discord",
			link: "https://discord.com/users/489824470941433856",
		},
		{
			name: "Developer Forum",
			text: "@xindic",
			icon: "simple-icons:robloxstudio",
			link: "https://devforum.roblox.com/u/xindic/summary",
		},
	];
</script>

<section
	class="w-full mb-20 text-center flex flex-col items-center"
	id="Contact"
>
	<SectionHeading>Contact Me</SectionHeading>
	<p class="pb-6">
		You can <span class="font-medium">contact me</span> through following
		<span class="font-medium">social media</span>:
	</p>
	<ul
		class="flex flex-col justify-center h-full w-1/2 max-w-lg gap-6 text-lg text-gray-800"
	>
		{#each contactInfo as contact (contact.name)}
			<Button href={contact.link} target="_blank" class="h-16">
				<Icon
					icon={contact.icon}
					class="h-10 w-10 aspect-square text-white dark:text-black transition-colors mr-auto"
				/>
				<div
					class="flex flex-col justify-center items-center font-semibold mr-auto"
				>
					{contact.name}
					<span class="font-medium">{contact.text}</span>
				</div>
			</Button>
		{/each}
	</ul>
</section>
