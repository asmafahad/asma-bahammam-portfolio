'use client';

import React from 'react';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import { Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Volunteering() {
  const { locale } = useApp();
  const t = translations[locale];

  return (
    <section
      id="volunteering"
      data-nav-label="التطوع"
      data-section-tint="blush"
      className="py-24 bg-transparent text-[#1A1A1E]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#6B4423]/5 text-[#6B4423] border border-[#6B4423]/10">
              {t.volunteering.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
              {t.volunteering.title}
            </h3>
          </div>

          {/* Right Column: Volunteering items */}
          <div className="lg:col-span-8 space-y-6">
            {t.volunteering.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white border border-black/5 rounded-xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gray-50 text-gray-500 group-hover:bg-[#6B4423]/5 group-hover:text-[#6B4423] transition-colors">
                      <Heart size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B4423] block mb-0.5">
                        {locale === 'ar' ? 'عمل تطوعي ومساهمة' : 'Volunteering & Community'}
                      </span>
                      <h4 className="text-xl font-bold tracking-tight">
                        {item.role}
                      </h4>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-[11px] font-bold text-gray-400 border border-black/5 self-start sm:self-auto">
                    <Calendar size={11} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <div className="text-sm font-bold text-gray-500 mb-3 pl-0 sm:pl-12">
                  {item.org}
                </div>

                <p className="text-base leading-relaxed text-gray-600 font-light pl-0 sm:pl-12">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spacious bottom divider line */}
        <div className="w-full section-divider mt-16" />
      </div>
    </section>
  );
}
