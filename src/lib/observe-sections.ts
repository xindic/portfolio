
import { activeSectionStore } from './active-section-store';
import { links } from './data';

export function observeSections() {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSectionStore.setSection(entry.target.id);
      }
    });
  }, options);

  const sectionIds = links.map(link => link.name);

  sectionIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }
  });

  return observer; 
}

