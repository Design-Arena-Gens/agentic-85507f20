import AppointmentScheduler from '@/components/AppointmentScheduler';
import SectionHeading from '@/components/SectionHeading';

const perks = [
  {
    label: 'Hold slots instantly',
    description: 'Reserve a visit without leaving the kiosk. Holds sync to clinician calendars.',
  },
  {
    label: 'Hybrid care',
    description: 'Blend in-person, curbside, and virtual follow-up slots with unified notifications.',
  },
  {
    label: 'Care circle updates',
    description: 'Add caregivers to text alerts so everyone stays coordinated during the visit.',
  },
];

export const metadata = {
  title: 'Appointments · MediKiosk',
  description: 'Grab the next available slot or manage your scheduled visits directly from the kiosk.',
};

export default function AppointmentsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Same-day access"
          title="Reserve a visit or adjust your schedule"
          description="Pulls live availability from the clinical schedule so you can confirm a time before leaving the lobby."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-100"
            >
              <h3 className="text-base font-semibold text-slate-900">{perk.label}</h3>
              <p className="mt-2">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>

      <AppointmentScheduler />
    </div>
  );
}
