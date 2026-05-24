'use client';

import React from 'react';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import { Calendar, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Awards() {
  const { locale } = useApp();
  const t = translations[locale];

  return (
    <section
      id="awards"
      data-nav-label="الجوائز"
      data-section-tint="lavender"
      className="py-24 bg-transparent text-[var(--ink)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#6B4423]/5 text-[#6B4423] border border-[#6B4423]/10">
              {t.awards.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
              {t.awards.title}
            </h3>
          </div>

          {/* Right Column: Highlight winner showcase inside a premium card */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white border border-[#6B4423]/20 rounded-xl p-6 md:p-8 shadow-[0_4px_25px_-4px_rgba(107,68,35,0.03)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_rgba(107,68,35,0.06)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top border strip */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#6B4423]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#6B4423]/5 text-[#6B4423]">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#6B4423]/5 text-[9px] font-bold text-[#6B4423] border border-[#6B4423]/10 mb-0.5">
                      {locale === 'ar' ? 'المركز الأول 🥇' : 'First Place 🥇'}
                    </span>
                    <h4 className="text-2xl font-black tracking-tight">
                      {t.awards.hackathonTitle}
                    </h4>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-[11px] font-bold text-gray-400 border border-black/5 self-start sm:self-auto">
                  <Calendar size={11} />
                  <span>{t.awards.hackathonDate}</span>
                </span>
              </div>

              <div className="text-sm font-bold text-gray-500 mb-4 pl-0 sm:pl-14">
                {t.awards.hackathonIssuer}
              </div>

              <p className="text-base leading-relaxed text-gray-600 font-light pl-0 sm:pl-14 mb-6">
                {t.awards.hackathonDesc}
              </p>

              {/* Hashtag tags */}
              <div className="pl-0 sm:pl-14 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#6B4423] uppercase">
                  <Sparkles size={12} />
                  <span>#هاكثون_لغتنا_هويتنا</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Spacious bottom divider line */}
        <div className="w-full section-divider mt-16" />
      </div>
    </section>
  );
}
