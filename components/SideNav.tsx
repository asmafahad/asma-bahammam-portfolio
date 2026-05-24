'use client';

import React, { useCallback, useEffect, useState } from 'react';

type NavItem = { id: string; label: string; tint: string };

export default function SideNav() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const collect = () => {
      const nodes = document.querySelectorAll<HTMLElement>(
        'section[id][data-nav-label]'
      );
      const list: NavItem[] = Array.from(nodes).map((n) => ({
        id: n.id,
        label: n.dataset.navLabel ?? n.id,
        tint: n.dataset.sectionTint ?? 'cream',
      }));
      setItems(list);
      if (list.length && !activeId) setActiveId(list[0].id);
    };

    collect();
    const t = window.setTimeout(() => setMounted(true), 400);
    return () => window.clearTimeout(t);
  }, [activeId]);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          );
        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const observed: Element[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [items]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="التنقل الجانبي"
      className={`hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-50 flex-col items-start gap-2 transition-all duration-500 ease-out ${
        mounted
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-3 pointer-events-none'
      }`}
      style={{
        fontFamily: 'var(--font-thmanyah-sans), system-ui, sans-serif',
      }}
    >
      {items.map(({ id, label, tint }) => {
        const isActive = id === activeId;
        return (
          <button
            key={id}
            type="button"
            onClick={() => handleClick(id)}
            aria-label={`انتقل إلى ${label}`}
            aria-current={isActive ? 'true' : undefined}
            data-tint={tint}
            className={`group relative flex items-center gap-2.5 h-7 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--section-tint,_var(--bg))] transition-all duration-400 ease-out overflow-hidden ${
              isActive
                ? 'pl-2.5 pr-4 bg-[var(--ink)] text-[var(--bg)] shadow-[0_4px_20px_-6px_rgba(31,26,21,0.25)]'
                : 'pl-2.5 pr-2.5 bg-transparent text-[var(--ink-muted)] hover:bg-[var(--ink)]/5'
            }`}
          >
            {/* Dot — tinted with section's color when active, faded brown otherwise */}
            <span
              aria-hidden="true"
              className={`block shrink-0 rounded-full transition-all duration-400 ease-out ${
                isActive ? 'w-2 h-2' : 'w-[7px] h-[7px]'
              }`}
              style={{
                backgroundColor: isActive
                  ? `var(--tint-${tint})`
                  : 'var(--accent)',
                opacity: isActive ? 1 : 0.45,
                boxShadow: isActive
                  ? `0 0 0 3px rgba(255,255,255,0.15)`
                  : 'none',
              }}
            />

            {/* Label — collapses width when inactive, expands smoothly when active.
                Capped tight so the active pill stays well clear of card content. */}
            <span
              className={`whitespace-nowrap text-[12px] font-bold tracking-wide transition-all duration-400 ease-out ${
                isActive
                  ? 'max-w-[110px] opacity-100'
                  : 'max-w-0 opacity-0 group-hover:max-w-[110px] group-hover:opacity-100 group-hover:text-[var(--ink)]'
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
