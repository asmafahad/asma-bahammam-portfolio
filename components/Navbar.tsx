'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import { Languages, Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubIcon, LinkedInIcon } from './CustomIcons';

const scrollToId = (id: string, offset = 80) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const SOCIALS = {
  email: 'mailto:asmabahammam@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/asma-bahammam-%D8%A3%D8%B3%D9%85%D9%8E%D8%A7%D8%A1-%D8%A8%D8%A7%D9%87%D9%85%D9%8E%D9%91%D8%A7%D9%85-6124a6235?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  github: 'https://github.com/asmafahad',
};

export default function Navbar() {
  const { locale, toggleLocale } = useApp();
  const t = translations[locale];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape + lock body scroll while open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'education', label: t.nav.education },
    { id: 'certificates', label: t.nav.certificates },
    { id: 'awards', label: t.nav.awards },
    { id: 'volunteering', label: t.nav.volunteering },
  ];

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      scrollToId(id);
    },
    []
  );

  const socialIconClass =
    'p-2 rounded-full text-[var(--ink-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 border-b border-[var(--rule)] backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 flex items-center justify-between gap-2">
        {/* Name / Editorial Brand */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="text-base sm:text-lg font-bold tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors shrink-0"
        >
          {locale === 'ar' ? 'أسمَاء باهمَّام' : 'Asma Bahammam'}
        </a>

        {/* Desktop: language toggle + social icons (quick-tap contact) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-xs font-bold text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors me-3"
            title={locale === 'en' ? 'العربية' : 'English'}
          >
            <Languages size={15} />
            <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          <span className="h-5 w-px bg-[var(--rule-strong)]" aria-hidden="true" />

          <a
            href={SOCIALS.email}
            aria-label="Email"
            className={socialIconClass}
          >
            <Mail size={16} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={socialIconClass}
          >
            <LinkedInIcon size={16} className="text-current" />
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={socialIconClass}
          >
            <GitHubIcon size={16} className="text-current" />
          </a>
        </div>

        {/* Mobile controls — quick-tap social icons + menu. Tighter spacing
            on phones so it fits down to 320px without overflow. */}
        <div className="flex lg:hidden items-center gap-0.5 sm:gap-1 shrink-0">
          <a
            href={SOCIALS.email}
            aria-label="Email"
            className="p-1.5 sm:p-2 rounded-full text-[var(--ink-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            <Mail size={15} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 sm:p-2 rounded-full text-[var(--ink-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            <LinkedInIcon size={15} className="text-current" />
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 sm:p-2 rounded-full text-[var(--ink-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            <GitHubIcon size={15} className="text-current" />
          </a>

          <span className="hidden sm:inline-block h-5 w-px bg-[var(--rule-strong)] mx-1" aria-hidden="true" />

          <button
            onClick={toggleLocale}
            className="text-[11px] sm:text-xs font-bold text-[var(--ink-muted)] px-1.5 sm:px-2"
          >
            {locale === 'ar' ? 'EN' : 'عربي'}
          </button>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="text-[var(--ink)] p-1"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — full section nav lives here */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#FAF8F5] border-b border-[var(--rule)] py-6 px-8 flex flex-col gap-4 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-bold tracking-wide text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
