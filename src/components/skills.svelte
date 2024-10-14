<script>
	import { badgeVariants } from "$lib/components/ui/badge";
	import SectionHeading from "./section-heading.svelte";
	import { skills } from "$lib/data";
</script>

<section
	id="Skills"
	class="w-full mb-10 scroll-mt-20 sm:scroll-mt-80 text-center flex flex-col justify-center items-center"
>
	<SectionHeading>My Skills</SectionHeading>
	<ul
		class="flex flex-wrap justify-center gap-2 text-lg text-gray-800 w-3/4 sm:-[60%] lg:w-[50%]"
	>
		{#each skills as skill (skill.name)}
			<a
				target="_blank"
				href={skill.link}
				class={`${badgeVariants({ variant: "default" })} py-3 px-7`}
				>{skill.name}</a
			>
		{/each}
		<ul></ul>
	</ul>
</section>
