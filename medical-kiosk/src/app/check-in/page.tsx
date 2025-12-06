import CheckInForm from '@/components/CheckInForm';
import SectionHeading from '@/components/SectionHeading';

const kioskTips = [
  {
    title: 'Scan and go',
    detail: 'Upload ID and insurance for automatic verification and eligibility checks.',
  },
  {
    title: 'Symptom triage',
    detail: 'Urgent flags instantly alert the nurse station while keeping you informed.',
  },
  {
    title: 'Language access',
    detail: 'Switch to Spanish, Mandarin, or ASL video support at any time.',
  },
];

export const metadata = {
  title: 'Express Check-In · MediKiosk',
  description: 'Complete your intake in minutes, get a queue ticket, and keep family informed with real-time updates.',
};

export default function CheckInPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Express Check-In"
          title="Skip the paperwork, head straight to care"
          description="Share a few details so we can match you with the right clinician and keep you updated every step of the way."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {kioskTips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-100"
            >
              <h3 className="text-base font-semibold text-slate-900">{tip.title}</h3>
              <p className="mt-2">{tip.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <CheckInForm />
    </div>
  );
}
