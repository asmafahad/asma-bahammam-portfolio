'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import SectionTintController from '../components/SectionTintController';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Volunteering from '../components/Volunteering';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import { GitHubIcon, LinkedInIcon } from '../components/CustomIcons';
import { Mail } from 'lucide-react';
import { useApp } from '../lib/AppContext';

const SOCIALS = {
  email: 'mailto:asmabahammam@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/asma-bahammam-%D8%A3%D8%B3%D9%85%D9%8E%D8%A7%D8%A1-%D8%A8%D8%A7%D9%87%D9%85%D9%8E%D9%91%D8%A7%D9%85-6124a6235?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  github: 'https://github.com/asmafahad',
};

export default function Home() {
  const { locale } = useApp();

  return (
    <div className="flex-1 flex flex-col bg-transparent text-[var(--ink)] transition-colors duration-300">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Side scroll-spy dot navigator */}
      <SideNav />

      {/* Drives the dynamic per-section background tint */}
      <SectionTintController />

      {/* Main Content Layout — Projects pulled up so visitors see work fast.
          lg:pl-36 reserves space on the visual-left edge for the fixed SideNav. */}
      <main className="flex-1 flex flex-col lg:pl-36">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Awards />
        <Volunteering />
        <Skills />
      </main>

      {/* Footer — just the social icons + copyright + tagline */}
      <footer className="py-10 border-t border-[var(--rule)] text-xs font-semibold text-[var(--ink-soft)]">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          {/* Social icons — quick-tap row */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIALS.email}
              aria-label="Email"
              className="p-2.5 rounded-full border border-[var(--rule)] bg-white/60 hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:border-[var(--accent)] transition-all"
            >
              <Mail size={16} />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full border border-[var(--rule)] bg-white/60 hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all group"
            >
              <LinkedInIcon size={16} className="text-[var(--ink-muted)] group-hover:text-[var(--bg)] transition-colors" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full border border-[var(--rule)] bg-white/60 hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all group"
            >
              <GitHubIcon size={16} className="text-[var(--ink-muted)] group-hover:text-[var(--bg)] transition-colors" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-end">
            <span>&copy; {new Date().getFullYear()} Asma Bahammam.</span>
            <span className="font-sans-ui text-[10px]">
              {locale === 'ar' ? 'بُني بـ vibe coding ✦' : 'Built with vibe coding ✦'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
