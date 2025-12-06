import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-slate-100 px-6 py-16 shadow-lg shadow-slate-100 sm:px-12">
      <div className="absolute -left-12 -top-16 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl" aria-hidden />

      <div className="relative grid gap-10 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
            Welcome to MediKiosk
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Self-service check-in that feels like a concierge desk.
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Guide patients from lobby to exam room with lightning-fast triage, wait time transparency, and updates for
            the whole care circle. Tailored for clinics, urgent care centers, and hospital front desks.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/check-in"
              className="flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Begin Express Check-In
            </Link>
            <Link
              href="/appointments"
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              View Same-Day Slots
            </Link>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-xs text-slate-500 sm:text-sm">
            <div>
              <dt className="font-semibold text-slate-600">Avg. check-in time</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">02:18 minutes</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-600">Patient satisfaction</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">97% positive</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-600">Clinics live on MediKiosk</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">120+</dd>
            </div>
          </dl>
        </div>

        <div className="grid content-center gap-4 rounded-3xl border border-white bg-white/80 p-6 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Now rooming</p>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-slate-100 shadow-inner">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Queue · Immediate Care</span>
              <span>Updated 1 min ago</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between rounded-xl bg-slate-800/60 px-3 py-2">
                <div>
                  <p className="font-semibold text-white">Ticket W-112</p>
                  <p className="text-xs text-slate-300">Walk-in · Sore throat</p>
                </div>
                <span className="text-xs text-emerald-300">Rooming</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-800/40 px-3 py-2">
                <div>
                  <p className="font-semibold text-white">Ticket S-208</p>
                  <p className="text-xs text-slate-300">Scheduled · Physical</p>
                </div>
                <span className="text-xs text-amber-200">3 min</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-800/20 px-3 py-2">
                <div>
                  <p className="font-semibold text-white">Ticket T-045</p>
                  <p className="text-xs text-slate-300">Telehealth · Follow-up</p>
                </div>
                <span className="text-xs text-amber-200">5 min</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-600">Family notifications</p>
            <p className="mt-1">
              Text messages keep caregivers up to date when patients move from lobby to exam room to discharge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
