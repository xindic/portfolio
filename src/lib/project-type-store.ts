import { writable } from 'svelte/store';

type Project = 'Scripting' | 'Visual Effects';

const ProjectType = writable<Project>('Scripting');

if (typeof window !== 'undefined') {
	const storedProjectType = sessionStorage.getItem('ProjectType') as Project || 'Scripting';
	ProjectType.set(storedProjectType);

	ProjectType.subscribe(value => {
		sessionStorage.setItem("ProjectType", value);
	});
}

export { ProjectType };

