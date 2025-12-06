'use client';

import { useMemo, useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  visitReason: string;
  appointmentType: 'walk-in' | 'scheduled' | 'follow-up' | 'telehealth';
  providerPreference: string;
  insurance: string;
  notes: string;
};

const defaultState: FormState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phone: '',
  visitReason: '',
  appointmentType: 'walk-in',
  providerPreference: '',
  insurance: '',
  notes: '',
};

const providers = [
  'No preference',
  'Dr. Priya Patel',
  'Dr. Marcus Lee',
  'Nurse Practitioner Haley Adams',
  'Pediatric Suite',
];

const reasons = [
  'Primary Care',
  'Urgent Care',
  'Telehealth Pickup',
  'Lab Work / Diagnostics',
  'Specialist Follow-up',
];

const appointmentTypes: FormState['appointmentType'][] = ['walk-in', 'scheduled', 'follow-up', 'telehealth'];

export default function CheckInForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);

  const estimatedWait = useMemo(() => {
    switch (form.appointmentType) {
      case 'walk-in':
        return 12;
      case 'scheduled':
        return 4;
      case 'follow-up':
        return 8;
      case 'telehealth':
        return 2;
      default:
        return 10;
    }
  }, [form.appointmentType]);

  function handleChange<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(values: FormState) {
    if (!values.firstName || !values.lastName) {
      return 'Please provide both your first and last name.';
    }
    if (!values.dateOfBirth) {
      return 'Enter your date of birth.';
    }
    if (!values.phone) {
      return 'Add a mobile number so we can text updates.';
    }
    if (!values.visitReason) {
      return 'Select the reason for your visit.';
    }
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    const prefix = form.appointmentType.slice(0, 1).toUpperCase();
    setTicketNumber(`${prefix}-${Math.floor(100 + Math.random() * 900)}`);
    setSubmitted(true);
  }

  function resetForm() {
    setForm(defaultState);
    setSubmitted(false);
    setTicketNumber(null);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">You&apos;re checked in</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Queue Ticket <span className="text-sky-600">{ticketNumber ?? 'Pending'}</span>
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          We&apos;ll text <span className="font-semibold text-slate-800">{form.phone}</span> with updates. Expected rooming in
          approximately{' '}
          <span className="font-semibold text-slate-800">{estimatedWait} minutes</span>.
        </p>

        <dl className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <dt className="font-semibold text-slate-500">Patient</dt>
            <dd className="mt-1 text-slate-900">
              {form.firstName} {form.lastName}
            </dd>
            <dd className="text-xs text-slate-500">DOB {form.dateOfBirth}</dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <dt className="font-semibold text-slate-500">Visit Details</dt>
            <dd className="mt-1 text-slate-900">{form.visitReason}</dd>
            <dd className="text-xs text-slate-500 capitalize">{form.appointmentType.replace('-', ' ')} visit</dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <dt className="font-semibold text-slate-500">Provider Preference</dt>
            <dd className="mt-1 text-slate-900">
              {form.providerPreference || 'Assign the next available clinician'}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <dt className="font-semibold text-slate-500">Insurance</dt>
            <dd className="mt-1 text-slate-900">
              {form.insurance || 'We will verify coverage at the front desk.'}
            </dd>
          </div>
        </dl>

        {form.notes ? (
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-500">Triage Notes</p>
            <p className="mt-1 whitespace-pre-wrap">{form.notes}</p>
          </div>
        ) : null}

        <button
          type="button"
          className="mt-6 w-full rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          onClick={resetForm}
        >
          Start a new check-in
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100"
      noValidate
    >
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Express Check-In</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Tell us a bit about your visit</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your responses route you to the right care team, shorten front desk paperwork, and send arrival alerts to
            your clinician.
          </p>
        </div>

        {error ? <p className="rounded-md bg-red-50 px-4 py-2 text-sm text-red-600">{error}</p> : null}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            First name
            <input
              value={form.firstName}
              onChange={(event) => handleChange('firstName', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              autoComplete="given-name"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Last name
            <input
              value={form.lastName}
              onChange={(event) => handleChange('lastName', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              autoComplete="family-name"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Date of birth
            <input
              type="date"
              value={form.dateOfBirth}
              onChange={(event) => handleChange('dateOfBirth', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Mobile number
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              autoComplete="tel"
              placeholder="(555) 555-1234"
              required
            />
          </label>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700">Type of visit</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                  form.appointmentType === option
                    ? 'border-sky-500 bg-sky-50 text-slate-900'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="capitalize">{option.replace('-', ' ')}</span>
                <input
                  type="radio"
                  name="appointmentType"
                  value={option}
                  checked={form.appointmentType === option}
                  onChange={() => handleChange('appointmentType', option)}
                  className="accent-sky-600"
                />
              </label>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Reason for visit
          <select
            value={form.visitReason}
            onChange={(event) => handleChange('visitReason', event.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            required
          >
            <option value="">Select an option</option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Provider preference
            <select
              value={form.providerPreference}
              onChange={(event) => handleChange('providerPreference', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              {providers.map((provider) => (
                <option key={provider} value={provider === 'No preference' ? '' : provider}>
                  {provider}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Primary insurance
            <input
              value={form.insurance}
              onChange={(event) => handleChange('insurance', event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="e.g., Blue Cross PPO"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Anything your care team should know?
          <textarea
            value={form.notes}
            onChange={(event) => handleChange('notes', event.target.value)}
            rows={4}
            className="rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 shadow-sm shadow-slate-100 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="Share symptoms, accessibility needs, language preferences, or other details."
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          Complete check-in and get queue ticket
        </button>
      </div>
    </form>
  );
}
