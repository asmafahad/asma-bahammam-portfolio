'use client';

import React from 'react';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certificates() {
  const { locale } = useApp();
  const t = translations[locale];

  return (
    <section
      id="certificates"
      data-nav-label="الشهادات"
      data-section-tint="blush"
      className="py-24 bg-transparent text-[var(--ink)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#6B4423]/5 text-[#6B4423] border border-[#6B4423]/10">
              {t.certificates.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
              {t.certificates.title}
            </h3>
          </div>

          {/* Right Column: Google UX Featured Item inside a gorgeous card */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white border border-[#6B4423]/20 rounded-xl p-6 md:p-8 shadow-[0_4px_25px_-4px_rgba(107,68,35,0.03)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_rgba(107,68,35,0.06)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Highlight ribbon accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#6B4423]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#6B4423]/5 text-[#6B4423]">
                    <Award size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B4423] block mb-0.5">
                      {locale === 'ar' ? 'اعتماد مهني مميز 🥇' : 'Featured Professional Spec 🥇'}
                    </span>
                    <h4 className="text-2xl font-black tracking-tight">
                      {t.certificates.googleUxTitle}
                    </h4>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B4423]/5 text-[11px] font-bold text-[#6B4423] border border-[#6B4423]/10 self-start sm:self-auto">
                  <Calendar size={11} />
                  <span>{t.certificates.googleUxDate}</span>
                </span>
              </div>

              <div className="text-sm font-bold text-gray-500 mb-4 pl-0 sm:pl-14">
                {t.certificates.googleUxIssuer}
              </div>

              <p className="text-base leading-relaxed text-gray-600 font-light pl-0 sm:pl-14 mb-6">
                {t.certificates.googleUxDesc}
              </p>

              <div className="pl-0 sm:pl-14 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={t.certificates.googleUxCredentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold border-b border-[var(--ink)] pb-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                >
                  <span>{t.certificates.showCredential}</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={t.certificates.googleUxBadgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>{t.certificates.viewBadge}</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Other Certificates List - Clean 2 column card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {t.certificates.items.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white border border-black/5 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-gray-50 border border-black/5 text-[9px] font-bold text-gray-400 uppercase">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold">{cert.date}</span>
                </div>
                <h5 className="text-base font-bold tracking-tight text-[#1A1A1E] mb-2 group-hover:text-[#6B4423] transition-colors">
                  {cert.name}
                </h5>
              </div>

              <div className="flex items-center justify-between mt-6 border-t border-black/5 pt-4">
                <span className="text-[10px] text-[#6B4423] font-bold uppercase tracking-wider">
                  # {cert.skills}
                </span>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>{t.certificates.showCredential}</span>
                    <ExternalLink size={10} />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacious bottom divider line */}
        <div className="w-full section-divider mt-16" />
      </div>
    </section>
  );
}
