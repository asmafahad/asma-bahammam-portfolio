'use client';

import { useEffect } from 'react';

/**
 * Watches every <section data-section-tint="<key>"> and writes the active
 * tint + accent into `--section-tint` / `--section-tint-accent` on <body>.
 * The body has `transition: background-color 700ms` so the change is smooth.
 */
export default function SectionTintController() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[data-section-tint]')
    );
    if (sections.length === 0) return;

    const tintFor = (key: string) => `var(--tint-${key})`;
    const accentFor = (key: string) => {
      switch (key) {
        case 'sage':
          return '#5C7034';
        case 'sky':
          return '#3A6A88';
        case 'blush':
          return '#A06548';
        case 'lavender':
          return '#6E5390';
        case 'clay':
          return '#6B4423';
        case 'sand':
        case 'cream':
        default:
          return '#6B4423';
      }
    };

    const setTint = (el: HTMLElement) => {
      const key = el.dataset.sectionTint ?? 'cream';
      document.body.style.setProperty('--section-tint', tintFor(key));
      document.body.style.setProperty('--section-tint-accent', accentFor(key));
      document.body.dataset.activeTint = key;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          );
        if (visible[0]) setTint(visible[0].target as HTMLElement);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    // Initialize with the first section so first paint isn't blank.
    setTint(sections[0]);

    return () => {
      sections.forEach((s) => observer.unobserve(s));
      observer.disconnect();
      document.body.style.removeProperty('--section-tint');
      document.body.style.removeProperty('--section-tint-accent');
      delete document.body.dataset.activeTint;
    };
  }, []);

  return null;
}
