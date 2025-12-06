'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/check-in', label: 'Express Check-In' },
  { href: '/appointments', label: 'Appointments' },
  { href: '/directory', label: 'Care Team' },
  { href: '/visitor-guide', label: 'Visitor Guide' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-sky-700">
          <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            MediKiosk
          </span>
          <span className="hidden sm:inline-block text-slate-800">Digital Care Concierge</span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-slate-200 p-2 text-slate-600 transition hover:border-sky-300 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-sky-700 ${isActive ? 'text-sky-600' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/check-in"
            className="rounded-full bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-500"
          >
            Start a Visit
          </Link>
        </nav>
      </div>

      {menuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 sm:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2 transition hover:bg-sky-50 hover:text-sky-700 ${
                    isActive ? 'bg-sky-50 text-sky-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/check-in"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-sky-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-sky-500"
            >
              Start a Visit
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
