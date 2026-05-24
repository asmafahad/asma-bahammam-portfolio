'use client';

import React from 'react';
import { useApp } from '../lib/AppContext';
import { translations, skillGroups } from '../lib/translations';
import { motion } from 'framer-motion';

export default function Skills() {
  const { locale } = useApp();
  const t = translations[locale];

  const groups = [
    { key: 'languages', title: t.skills.categories.languages },
    { key: 'dataScience', title: t.skills.categories.dataScience },
    { key: 'design', title: t.skills.categories.design },
    { key: 'aiTools', title: t.skills.categories.aiTools },
    { key: 'tools', title: t.skills.categories.tools },
    { key: 'pm', title: t.skills.categories.pm },
    { key: 'soft', title: t.skills.categories.soft },
  ];

  return (
    <section
      id="skills"
      data-nav-label="المهارات"
      data-section-tint="sage"
      className="py-24 bg-transparent text-[#1A1A1E]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              {t.skills.subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t.skills.title}
            </h3>
          </div>

          {/* Right Column: Skills categories vertical list */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {groups.map((group, idx) => (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#6B4423] mb-4 pb-2 border-b border-black/5">
                  {group.title}
                </h4>

                <ul className="space-y-2.5">
                  {skillGroups[group.key as keyof typeof skillGroups]?.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spacious bottom divider line */}
        <div className="w-full section-divider mt-24" />
      </div>
    </section>
  );
}
