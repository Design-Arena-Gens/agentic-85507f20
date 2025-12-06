'use client';

import { useMemo, useState } from 'react';

type Clinician = {
  name: string;
  specialty: string;
  availability: string;
  languages: string[];
  acceptsNewPatients: boolean;
  location: string;
};

const clinicians: Clinician[] = [
  {
    name: 'Dr. Priya Patel',
    specialty: 'Family Medicine',
    availability: 'Today · 10:15 AM · Exam Room 4',
    languages: ['English', 'Hindi', 'Gujarati'],
    acceptsNewPatients: true,
    location: 'North Tower · Level 2',
  },
  {
    name: 'Dr. Marcus Lee',
    specialty: 'Urgent Care',
    availability: 'Today · 11:40 AM · Fast Track',
    languages: ['English', 'Mandarin'],
    acceptsNewPatients: true,
    location: 'South Pavilion · Level 1',
  },
  {
    name: 'NP Haley Adams',
    specialty: 'Pediatrics',
    availability: 'Tomorrow · 08:30 AM · Pediatric Suite',
    languages: ['English', 'ASL'],
    acceptsNewPatients: false,
    location: 'Children’s Pavilion · Level 3',
  },
  {
    name: 'Dr. Omar Nguyen',
    specialty: 'Cardiology',
    availability: 'Next 7d · Virtual · Telehealth',
    languages: ['English', 'Vietnamese'],
    acceptsNewPatients: true,
    location: 'Telehealth / Cardiac Clinic',
  },
  {
    name: 'PT Jordan Brooks',
    specialty: 'Physical Therapy',
    availability: 'Next 48h · Rehabilitation Gym',
    languages: ['English', 'Spanish'],
    acceptsNewPatients: true,
    location: 'Rehab Center · Level 1',
  },
];

export default function DirectorySearch() {
  const [search, setSearch] = useState('');
  const [filterNewPatients, setFilterNewPatients] = useState(false);

  const results = useMemo(() => {
    return clinicians.filter((clinician) => {
      const matchesSearch =
        `${clinician.name} ${clinician.specialty} ${clinician.languages.join(' ')}`.toLowerCase().includes(search.toLowerCase());
      const matchesNew = filterNewPatients ? clinician.acceptsNewPatients : true;
      return matchesSearch && matchesNew;
    });
  }, [search, filterNewPatients]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Care team directory</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Find the right clinician quickly</h2>
          <p className="mt-2 text-sm text-slate-600">
            Filter by specialty, language, or availability. Updates instantly from the clinical schedule.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, specialty, or language"
            className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 sm:w-72"
          />
          <label className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <input
              type="checkbox"
              checked={filterNewPatients}
              onChange={(event) => setFilterNewPatients(event.target.checked)}
              className="h-4 w-4 accent-sky-600"
            />
            Only new patient availability
          </label>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-sm text-slate-500">
            No matching clinicians right now. Try removing filters or ask a concierge associate.
          </div>
        ) : (
          results.map((clinician) => (
            <article
              key={clinician.name}
              className="rounded-3xl border border-slate-200 bg-gradient-to-r from-white via-white to-slate-50 p-6 shadow-sm shadow-slate-100"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{clinician.name}</h3>
                  <p className="text-sm text-slate-600">{clinician.specialty}</p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {clinician.acceptsNewPatients ? 'Accepting new patients' : 'Established patients only'}
                </span>
              </div>
              <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Next availability</p>
                  <p className="mt-1 text-slate-900">{clinician.availability}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Languages</p>
                  <p className="mt-1 text-slate-900">{clinician.languages.join(' · ')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Location</p>
                  <p className="mt-1 text-slate-900">{clinician.location}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
