'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Briefcase,
  BarChart3,
  BookOpen,
  Sparkles,
  Brain,
} from 'lucide-react';

type Card = {
  key: string;
  ar: string;
  en: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  tint: string;
  accent: string;
  /* Position in %, relative to the square container */
  top: string;
  left: string;
  delay: number;
  /* Per-card floating-loop amplitude in px (organic motion) */
  floatY: number;
  floatDuration: number;
};

const cards: Card[] = [
  {
    key: 'swe',
    ar: 'هندسة برمجيات',
    en: 'Software Engineering',
    Icon: Code2,
    tint: 'var(--tint-clay)',
    accent: '#6B4423',
    top: '6%',
    left: '45%',
    delay: 0.1,
    floatY: 8,
    floatDuration: 6,
  },
  {
    key: 'ai',
    ar: 'الذكاء الاصطناعي',
    en: 'Artificial Intelligence',
    Icon: Brain,
    tint: 'var(--tint-sage)',
    accent: '#5C7034',
    top: '22%',
    left: '76%',
    delay: 0.2,
    floatY: 9,
    floatDuration: 7,
  },
  {
    key: 'ux',
    ar: 'تجربة المستخدم',
    en: 'UX & Design',
    Icon: Palette,
    tint: 'var(--tint-lavender)',
    accent: '#6E5390',
    top: '38%',
    left: '22%',
    delay: 0.3,
    floatY: 10,
    floatDuration: 7.5,
  },
  {
    key: 'product',
    ar: 'إدارة المنتجات',
    en: 'Product Management',
    Icon: Briefcase,
    tint: 'var(--tint-sand)',
    accent: '#A06548',
    top: '52%',
    left: '70%',
    delay: 0.4,
    floatY: 7,
    floatDuration: 8,
  },
  {
    key: 'data',
    ar: 'علم البيانات',
    en: 'Data Science',
    Icon: BarChart3,
    tint: 'var(--tint-sky)',
    accent: '#3A6A88',
    top: '70%',
    left: '24%',
    delay: 0.5,
    floatY: 9,
    floatDuration: 6.5,
  },
  {
    key: 'editorial',
    ar: 'جريدة السبت',
    en: 'Saturday Newspaper',
    Icon: BookOpen,
    tint: 'var(--tint-blush)',
    accent: '#A0584A',
    top: '83%',
    left: '58%',
    delay: 0.6,
    floatY: 8,
    floatDuration: 7,
  },
];

export default function HeroVisual({ locale }: { locale: 'ar' | 'en' }) {
  return (
    <div className="relative w-full aspect-[5/6] max-w-[480px] mx-auto select-none pointer-events-none">
      {/* Soft radial backdrop — gives the composition a centered glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(107,68,35,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Subtle connector lines drawn through the cards — feels like a system map */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(107,68,35,0.18)" strokeWidth="0.25" fill="none">
          {/* Connector lines — fan out from SWE at the top through the disciplines */}
          <line x1="45" y1="9" x2="76" y2="26" />
          <line x1="45" y1="9" x2="22" y2="45" />
          <line x1="76" y1="26" x2="70" y2="62" />
          <line x1="22" y1="45" x2="24" y2="84" />
          <line x1="70" y1="62" x2="58" y2="100" />
          <line x1="24" y1="84" x2="58" y2="100" />
        </g>
      </svg>

      {/* Top-right small label pill, à la "High Performance" on Danah's site
          but with Asma's identity — appears small and faded */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute top-0 right-0 pointer-events-auto"
      >
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[var(--rule)] text-[10px] font-bold tracking-wider text-[var(--ink-muted)]">
          <Sparkles size={11} style={{ color: 'var(--accent)' }} />
          {locale === 'ar' ? 'تقاطع التخصصات' : 'Intersection'}
        </span>
      </motion.div>

      {/* The floating discipline cards */}
      {cards.map(({ key, ar, en, Icon, tint, accent, top, left, delay, floatY, floatDuration }) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute pointer-events-auto"
          style={{ top, left, transform: 'translate(-50%, -50%)' }}
        >
          {/* Inner motion handles the gentle infinite float so it doesn't
              fight the entrance animation */}
          <motion.div
            animate={{ y: [0, -floatY, 0] }}
            transition={{
              delay: delay + 0.6,
              duration: floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.04, y: -floatY }}
            className="flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm border border-[var(--rule)] shadow-[0_8px_24px_-10px_rgba(31,26,21,0.18)] transition-shadow hover:shadow-[0_12px_28px_-10px_rgba(31,26,21,0.28)]"
            style={{ fontFamily: 'var(--font-thmanyah-sans), system-ui, sans-serif' }}
          >
            <div
              className="p-1 sm:p-1.5 rounded-md sm:rounded-lg shrink-0"
              style={{ backgroundColor: tint }}
            >
              <Icon size={14} style={{ color: accent }} />
            </div>
            <span className="text-[10px] sm:text-[12px] font-bold tracking-tight whitespace-nowrap text-[var(--ink)]">
              {locale === 'ar' ? ar : en}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
