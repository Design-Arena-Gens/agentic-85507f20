import Link from 'next/link';

const quickLinks = [
  { href: '/check-in', label: 'Begin Check-In' },
  { href: '/appointments', label: 'Manage Appointments' },
  { href: '/directory', label: 'Find a Provider' },
  { href: '/visitor-guide', label: 'Visitor Information' },
];

const supportLinks = [
  { href: '#patient-rights', label: 'Patient Rights' },
  { href: '#privacy', label: 'Privacy Practices' },
  { href: '#support', label: 'Support' },
  { href: '#accessibility', label: 'Accessibility' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-white">MediKiosk</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Digital concierge experience for clinics, urgent care centers, and hospital lobbies.
            Welcome every patient with clarity, speed, and compassion.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Quick Actions</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            123 Wellness Ave <br />
            Suite 400 <br />
            Health City, HC 48201
          </p>
          <p className="mt-3 text-sm text-slate-300">
            <a href="tel:+18445551234" className="transition hover:text-white">
              (844) 555-1234
            </a>{' '}
            ·{' '}
            <a href="mailto:hello@medikiosk.com" className="transition hover:text-white">
              hello@medikiosk.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} MediKiosk. All rights reserved.
      </div>
    </footer>
  );
}
