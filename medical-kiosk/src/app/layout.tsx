import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MediKiosk · Digital Medical Kiosk',
  description:
    'Modern medical kiosk experience for clinics, urgent care, and hospitals. Offer express check-in, smart triage, and visitor guidance.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'MediKiosk · Digital Medical Kiosk',
    description:
      'Express check-in, queue transparency, and concierge wayfinding for modern medical practices.',
    url: 'https://agentic-85507f20.vercel.app',
    siteName: 'MediKiosk',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1580281657521-88b571909314?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'MediKiosk digital lobby experience',
      },
    ],
  },
  metadataBase: new URL('https://agentic-85507f20.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
