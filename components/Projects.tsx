'use client';

import React, { useState } from 'react';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import Image from 'next/image';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'Tech' | 'Design' | 'Writing';
type FilterId = 'All' | Category;

const categoryAccent: Record<Category, string> = {
  Tech: '#5C7034',
  Design: '#6E5390',
  Writing: '#A06548',
};

const categoryTint: Record<Category, string> = {
  Tech: 'var(--tint-sage)',
  Design: 'var(--tint-lavender)',
  Writing: 'var(--tint-blush)',
};

export default function Projects() {
  const { locale } = useApp();
  const t = translations[locale];
  const [filter, setFilter] = useState<FilterId>('All');

  const categories: ReadonlyArray<{ id: FilterId; label: string }> = [
    { id: 'All', label: t.projects.filterAll },
    { id: 'Tech', label: t.projects.filterTech },
    { id: 'Design', label: t.projects.filterDesign },
    { id: 'Writing', label: t.projects.filterWriting },
  ];

  const filteredProjects = t.projects.items.filter((proj) =>
    filter === 'All' ? true : proj.categories.includes(filter)
  );

  const categoryLabel = (cat: string) =>
    cat === 'Writing'
      ? t.projects.filterWriting
      : cat === 'Design'
      ? t.projects.filterDesign
      : t.projects.filterTech;

  return (
    <section
      id="projects"
      data-nav-label="المشاريع"
      data-section-tint="clay"
      className="py-24 bg-transparent text-[var(--ink)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header — stacked, generous whitespace */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/15">
            {t.projects.subtitle}
          </span>
          <h3 className="font-serif-display text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">
            {t.projects.title}
          </h3>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all ${
                  filter === cat.id
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-soft)]'
                    : 'border-[var(--rule-strong)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid — 2 columns on lg, 1 on mobile. Consistent height + aligned baselines. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const projCats = proj.categories as ReadonlyArray<Category>;
              const primary = projCats[0];
              const accent = categoryAccent[primary] ?? 'var(--accent)';
              const tint = categoryTint[primary] ?? 'var(--tint-cream)';
              return (
                <motion.article
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col bg-white/85 backdrop-blur-sm border border-[var(--rule)] rounded-2xl overflow-hidden shadow-[0_4px_24px_-8px_rgba(31,26,21,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_-10px_rgba(31,26,21,0.12)] transition-all duration-400"
                >
                  {/* Image / cover area — uses real image if provided, else a
                      category-tinted gradient with the folder icon. */}
                  <div
                    className="relative aspect-[16/9] w-full overflow-hidden"
                    style={
                      proj.image
                        ? undefined
                        : { background: `linear-gradient(135deg, ${tint} 0%, white 100%)` }
                    }
                  >
                    {proj.image ? (
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-[0.07]"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 60%)`,
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FolderGit2
                            size={40}
                            style={{ color: accent }}
                            className="opacity-30 group-hover:opacity-50 transition-opacity"
                          />
                        </div>
                      </>
                    )}
                    {/* Category chips — top-start (RTL aware). Render one chip
                        per category, each in its own accent color, so a project
                        in multiple disciplines reads at a glance. */}
                    <div className="absolute top-4 start-4 flex flex-wrap gap-1.5 max-w-[calc(100%-2rem)]">
                      {projCats.map((c) => {
                        const cAccent = categoryAccent[c] ?? accent;
                        return (
                          <span
                            key={c}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: 'white',
                              color: cAccent,
                              border: `1px solid ${cAccent}33`,
                            }}
                          >
                            {categoryLabel(c)}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-6 md:p-7 gap-4">
                    <h4 className="font-serif-display text-2xl font-extrabold tracking-tight">
                      {proj.title}
                    </h4>

                    <p className="text-[15px] leading-relaxed text-[var(--ink-muted)] font-light">
                      {proj.desc}
                    </p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {proj.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="px-2.5 py-0.5 rounded-full bg-[var(--accent-soft)] text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Footer — pinned to bottom thanks to flex-1 above */}
                    <div className="flex items-center justify-end border-t border-[var(--rule)] pt-4 mt-auto">
                      {proj.isLive ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                        >
                          <span>
                            {proj.linkKind === 'case'
                              ? t.projects.viewCase
                              : t.projects.viewLive}
                          </span>
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="text-xs font-bold text-[var(--ink-soft)]">
                          {locale === 'ar' ? 'العرض قريباً 🔒' : 'Coming soon 🔒'}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="w-full section-divider mt-20" />
      </div>
    </section>
  );
}
