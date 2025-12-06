'use client';

import { useMemo, useState } from 'react';

type Slot = {
  time: string;
  provider: string;
  modality: 'In-person' | 'Virtual';
  location: string;
};

const slots: Slot[] = [
  { time: '08:20 AM', provider: 'Dr. Priya Patel', modality: 'In-person', location: 'Exam Room 4' },
  { time: '09:05 AM', provider: 'NP Haley Adams', modality: 'Virtual', location: 'Telehealth' },
  { time: '10:15 AM', provider: 'Dr. Marcus Lee', modality: 'In-person', location: 'Exam Room 2' },
  { time: '11:40 AM', provider: 'Dr. Omar Nguyen', modality: 'In-person', location: 'Cardiac Suite' },
  { time: '01:30 PM', provider: 'PA Jordan Sparks', modality: 'Virtual', location: 'Telehealth' },
  { time: '03:10 PM', provider: 'Dr. Ana Gomez', modality: 'In-person', location: 'Exam Room 6' },
];

type AppointmentRequest = {
  slotIndex: number | null;
  visitReason: string;
  email: string;
  sms: string;
  notes: string;
};

const defaultRequest: AppointmentRequest = {
  slotIndex: null,
  visitReason: '',
  email: '',
  sms: '',
  notes: '',
};

export default function AppointmentScheduler() {
  const [state, setState] = useState(defaultRequest);
  const [confirmed, setConfirmed] = useState(false);
  const selectedSlot = useMemo(() => (state.slotIndex != null ? slots[state.slotIndex] : null), [state.slotIndex]);

  function handleSelectSlot(index: number) {
    setState((prev) => ({ ...prev, slotIndex: index }));
  }

  function updateField<Key extends keyof AppointmentRequest>(key: Key, value: AppointmentRequest[Key]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (state.slotIndex == null || !state.visitReason || !state.email || !state.sms) {
      return;
    }
    setConfirmed(true);
  }

  function reset() {
    setConfirmed(false);
    setState(defaultRequest);
  }

  if (confirmed && selectedSlot) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Appointment secured</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">We&apos;ll see you soon</h2>
        <dl className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Visit time</dt>
            <dd className="mt-2 text-lg font-semibold text-slate-900">{selectedSlot.time}</dd>
            <dd className="text-xs">{selectedSlot.modality}</dd>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Clinician</dt>
            <dd className="mt-2 text-lg font-semibold text-slate-900">{selectedSlot.provider}</dd>
            <dd className="text-xs">{selectedSlot.location}</dd>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Reason</dt>
            <dd className="mt-2 text-slate-900">{state.visitReason}</dd>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Notifications</dt>
            <dd className="mt-2 text-slate-900">{state.email}</dd>
            <dd className="text-xs text-slate-500">{state.sms}</dd>
          </div>
        </dl>

        {state.notes ? (
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-500">Shared notes</p>
            <p className="mt-1 whitespace-pre-wrap">{state.notes}</p>
          </div>
        ) : null}

        <button
          type="button"
          onClick={reset}
          className="mt-6 w-full rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
        >
          Book another visit
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100"
      onSubmit={submit}
      noValidate
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Same-day availability</p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-900">Reserve a time in under 30 seconds</h2>
      <p className="mt-2 text-sm text-slate-600">
        Slots sync with in-person check-in kiosks. Soft holds expire after 10 minutes of inactivity.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {slots.map((slot, index) => {
          const active = state.slotIndex === index;
          return (
            <button
              type="button"
              key={`${slot.time}-${slot.provider}`}
              onClick={() => handleSelectSlot(index)}
              className={`flex h-full flex-col rounded-2xl border p-4 text-left transition ${
                active
                  ? 'border-sky-500 bg-sky-50 text-slate-900'
                  : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg font-semibold text-slate-900">{slot.time}</span>
              <span className="text-sm">{slot.provider}</span>
              <span className="mt-3 inline-flex items-center rounded-full bg-white/70 px-2 py-1 text-xs font-semibold text-slate-600">
                {slot.modality} · {slot.location}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          What brings you in?
          <input
            value={state.visitReason}
            onChange={(event) => updateField('visitReason', event.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="e.g., follow-up for lab results"
            required
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Email confirmation
            <input
              type="email"
              value={state.email}
              onChange={(event) => updateField('email', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="you@email.com"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            SMS updates
            <input
              type="tel"
              value={state.sms}
              onChange={(event) => updateField('sms', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="(555) 555-9876"
              required
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Notes for your care team (optional)
          <textarea
            value={state.notes}
            onChange={(event) => updateField('notes', event.target.value)}
            rows={3}
            className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state.slotIndex == null}
        className="mt-6 w-full rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Confirm appointment
      </button>
    </form>
  );
}
