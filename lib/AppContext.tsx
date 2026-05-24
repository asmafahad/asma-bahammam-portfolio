'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from './translations';

interface AppContextType {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  toggleLocale: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ar'); // Default to Arabic as requested
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedLocale = localStorage.getItem('portfolio-locale') as Locale;
    if (savedLocale === 'en' || savedLocale === 'ar') {
      setLocale(savedLocale);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Update HTML dir and lang
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    localStorage.setItem('portfolio-locale', locale);
  }, [locale, mounted]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <AppContext.Provider value={{ locale, dir, toggleLocale }}>
      <div style={!mounted ? { visibility: 'hidden' } : undefined} className="min-h-screen">
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
