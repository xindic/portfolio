import { writable } from 'svelte/store';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

interface ActiveSectionStore {
	activeSection: SectionName;
	setSection: (section: SectionName) => void;
}

const createActiveSectionStore = () => {
	const initialState: ActiveSectionStore = {
		activeSection: 'Home' as SectionName,
		setSection: () => { }
	};

	if (typeof window !== 'undefined') {
		const storedSection = sessionStorage.getItem('activeSection');
		if (storedSection) {
			initialState.activeSection = storedSection as SectionName;
		}
	}

	const { subscribe, update } = writable<ActiveSectionStore>(initialState);

	return {
		subscribe,
		setSection: (section: SectionName) => {
			update((store: ActiveSectionStore) => {
				history.replaceState(null, '', `#${section.toLowerCase()}`);

				if (typeof window !== 'undefined') {
					sessionStorage.setItem('activeSection', section);
				}
				return { ...store, activeSection: section };
			});
		},
	};
};

export const activeSectionStore = createActiveSectionStore();


