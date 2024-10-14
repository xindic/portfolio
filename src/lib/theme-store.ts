import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const theme = writable<Theme>('light');

if (typeof window !== 'undefined') {
	const storedTheme = localStorage.getItem('theme') as Theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

	theme.set(storedTheme);
	document.documentElement.classList.toggle('dark', storedTheme === 'dark');

	theme.subscribe(value => {
		document.documentElement.classList.toggle('dark', value === 'dark');
		localStorage.setItem('theme', value);
	});
}


export { theme };

