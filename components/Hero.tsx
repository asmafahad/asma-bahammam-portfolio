'use client';

import React from 'react';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import { ArrowRight, Send, ChevronDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import HeroVisual from './HeroVisual';

const scrollToId = (id: string, offset = 20) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

export default function Hero() {
  const { locale, dir } = useApp();
  const t = translations[locale];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      data-nav-label="الرئيسية"
      data-section-tint="cream"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 bg-transparent text-[var(--ink)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        {/* Two-column composition: text + floating discipline cards.
            In RTL the first child sits on the visual right, second on the left. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Right (RTL): text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-4"
            >
              {t.hero.greeting}
            </motion.div>

            {/* Name — sized for the column, still bold */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6rem)' }}
            >
              {t.hero.name}
            </motion.h1>

            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-6 max-w-lg"
            >
              {t.hero.tagline}
            </motion.div>

            {/* Editorial headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl leading-relaxed text-[var(--ink-muted)] mb-10 font-light max-w-xl"
              style={{ lineHeight: locale === 'ar' ? '1.75' : '1.4' }}
            >
              {t.hero.headline}
            </motion.p>

            {/* CTAs — Projects (primary) + Contact (ghost) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 items-center"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId('projects');
                }}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent)] text-[var(--bg)] text-sm font-bold hover:bg-[var(--ink)] transition-colors"
              >
                <span>{t.hero.ctaViewProjects}</span>
                <ArrowRight
                  size={15}
                  className={`transition-transform duration-200 ${
                    dir === 'rtl'
                      ? 'rotate-180 group-hover:-translate-x-1'
                      : 'group-hover:translate-x-1'
                  }`}
                />
              </a>

              <a
                href="mailto:asmabahammam@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--ink)]/20 text-sm font-bold text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--ink)]/[0.03] transition-colors"
              >
                <Send size={14} />
                <span>{t.hero.ctaContact}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Left (RTL): floating discipline cards. Visible on every screen —
              on mobile/iPad it stacks below the text in the single-column grid. */}
          <div className="mt-6 lg:mt-0">
            <HeroVisual locale={locale} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        type="button"
        onClick={() => scrollToId('projects')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label={locale === 'ar' ? 'تابع للأسفل' : 'Scroll down'}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          {locale === 'ar' ? 'اسحب' : 'Scroll'}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.button>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="mx-auto max-w-7xl section-divider" />
      </div>
    </section>
  );
}
