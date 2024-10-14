<script lang="ts">
	import { onDestroy } from "svelte";
	import * as Select from "$lib/components/ui/select";
	import * as Carousel from "$lib/components/ui/carousel";
	import * as Card from "$lib/components/ui/card";

	import { ProjectType } from "$lib/project-type-store";

	import { scriptingProjects, visualEffectProjects } from "../lib/data";

	type projectType = { value: string; label: string };

	const ProjectTypes = [
		{ value: "Scripting", label: "Scripting" },
		{ value: "Visual Effects", label: "Visual Effects" },
	];

	let currentProjectType: projectType = {};

	const unsubscribeProjectType = ProjectType.subscribe((value) => {
		currentProjectType.value = value;
		currentProjectType.label = value;
	});

	console.log(scriptingProjects, visualEffectProjects);
	onDestroy(unsubscribeProjectType);

	function changeProjectType(data: projectType) {
		ProjectType.set(data.value);
	}

	function handleCardClick(link: string) {
		window.open(link, "_blank", "noopener,noreferrer");
	}

</script>

<section
	id="Projects"
	class="mb-10 sm:mb-28 sm:mt-14 w-full scroll-mt-28 text-center leading-8 flex flex-col items-center"
>
	<div class="w-full absolute flex justify-center items-center">
		<h2 class="text-3xl font-semibold capitalize text-center">Projects</h2>
	</div>
	<div class="w-full flex justify-end mb-24">
		<Select.Root
			items={ProjectTypes}
			selected={currentProjectType}
			onSelectedChange={changeProjectType}
		>
			<Select.Trigger
				class="transition-colors w-[20%] sm:w-40 mr-[12%] shadow-lg"
			>
				<Select.Value class="text-sm" />
			</Select.Trigger>
			<Select.Content>
				{#each ProjectTypes as projectType}
					<Select.Item value={projectType.value} label={projectType.label}>
						{projectType.label}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>

	<Carousel.Root
		opts={{
			align: "start",
		}}
		class="w-full max-w-sm md:max-w-full md:w-[80%] lg:w-[80%]"
	>
		<Carousel.Content>
			{#each currentProjectType.value === "Scripting" ? scriptingProjects : visualEffectProjects as project (project.name)}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
					{#if currentProjectType.value == "Scripting"}
						<div
							role="button"
							class="p-1"
							tabindex="0"
							on:keydown={(e) =>
								e.key === "Enter" && handleCardClick(project.link)}
							on:click={() => handleCardClick(project.link)}
						>
							<Card.Root
								class="transition-colors hover:border-black dark:hover:border-white"
							>
								<Card.Header>
									<Card.Title>{project.name}</Card.Title>
									<Card.Description class="mt-4"
										>{project.role}</Card.Description
									>
								</Card.Header>
								<Card.Content
									class="flex aspect-square items-center justify-center p-6"
								>
									<img
										src={project.image}
										alt={project.name}
										class="mt-auto rounded-s"
									/>
								</Card.Content>
							</Card.Root>
						</div>
					{/if}
					{#if currentProjectType.value == "Visual Effects"}
						<div class="p1">
							<Card.Root>
								<Card.Content
									class="flex aspect-square items-center justify-center p-6"
								>
									<video controls class="w-full h-full">
										<source
											src={project.video}
											type="video/mp4"
										/>
										Your browser does not support the video tag.
									</video>
								</Card.Content>
							</Card.Root>
						</div>
					{/if}
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</section>

