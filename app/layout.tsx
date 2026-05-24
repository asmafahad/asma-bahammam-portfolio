import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppProvider } from '../lib/AppContext';
import './globals.css';

const thmanyahSans = localFont({
  src: [
    {
      path: '../public/fonts/thmanyahsans/thmanyahsans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahsans/thmanyahsans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahsans/thmanyahsans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahsans/thmanyahsans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahsans/thmanyahsans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-thmanyah-sans',
  display: 'swap',
});

const thmanyahSerifText = localFont({
  src: [
    {
      path: '../public/fonts/thmanyahseriftext/thmanyahseriftext-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahseriftext/thmanyahseriftext-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahseriftext/thmanyahseriftext-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahseriftext/thmanyahseriftext-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahseriftext/thmanyahseriftext-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-thmanyah-serif-text',
  display: 'swap',
});

const thmanyahSerifDisplay = localFont({
  src: [
    {
      path: '../public/fonts/thmanyahserifdisplay/thmanyahserifdisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahserifdisplay/thmanyahserifdisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahserifdisplay/thmanyahserifdisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahserifdisplay/thmanyahserifdisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/thmanyahserifdisplay/thmanyahserifdisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-thmanyah-serif-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'أسماء باهمام | Asma Bahammam',
  description: 'مساحة رقمية تستكشف التقاطع بين التقنية والتصميم والكتابة الإبداعية.',
  keywords: ['Asma Bahammam', 'Software Engineer', 'UI/UX Designer', 'Product Manager', 'Saturday Newspaper', 'Riyadh'],
  authors: [{ name: 'Asma Bahammam' }],
  openGraph: {
    title: 'أسماء باهمام | Asma Bahammam',
    description: 'Software engineering student blending UX, product thinking, and editorial writing.',
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أسماء باهمام | Asma Bahammam',
    description: 'Software engineering student blending UX, product thinking, and editorial writing.',
  },
  themeColor: '#FAF8F5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${thmanyahSans.variable} ${thmanyahSerifText.variable} ${thmanyahSerifDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-[var(--ink)]">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
