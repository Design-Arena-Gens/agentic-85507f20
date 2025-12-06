import SectionHeading from '@/components/SectionHeading';

const visitorSteps = [
  {
    title: 'Welcome & badges',
    detail: 'Check in with a photo ID. Print visitor badges that refresh every 24 hours.',
  },
  {
    title: 'Wayfinding choices',
    detail: 'Pick on-screen directions, SMS navigation, or a printable map with QR codes.',
  },
  {
    title: 'Stay informed',
    detail: 'Opt into updates when the patient changes rooms or is ready for discharge.',
  },
];

const amenities = [
  {
    title: 'Comfort lounge',
    detail: 'Calming workspaces with charging ports, filtered water, snacks, and ambient music.',
  },
  {
    title: 'Family respite rooms',
    detail: 'Private rooms for reflection, prayer, or a quiet call. Reserve directly from the kiosk.',
  },
  {
    title: 'Food & retail',
    detail: 'Cafe hours, dietary details, and contactless ordering from local partners.',
  },
];

const accessibility = [
  'Wheelchair escort requests',
  'Closed captioning and ASL relay',
  'Audio-guided wayfinding',
  'Large-print and high-contrast display modes',
];

export const metadata = {
  title: 'Visitor Guide · MediKiosk',
  description: 'Navigation, amenities, and live updates to keep family and caregivers informed during every visit.',
};

export default function VisitorGuidePage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Visitor hub"
        title="Welcome caregivers, family, and friends"
        description="Everything you need to know to support your loved one—from navigation to amenities—is available on any MediKiosk in the lobby."
      />

      <section className="grid gap-6 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-4">
          {visitorSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-100"
            >
              <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2">{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-lg shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Interactive campus map</h3>
          <p className="mt-2 text-sm text-slate-600">
            Scan the QR code below to open live wayfinding on your phone. Choose walking, wheelchair, or valet routes and
            get turn-by-turn directions indoors.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <div className="grid h-40 w-40 place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400">
              QR Map Preview
            </div>
            <p className="text-xs text-slate-500">Scan with your camera app to launch navigation.</p>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Need help?</p>
          <p className="mt-2 text-sm text-slate-600">
            Tap “Call concierge” on any kiosk to connect with a guest services ambassador. They can arrange transportation,
            interpreter services, or spiritual care support around the clock.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[3fr,2fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {amenities.map((amenity) => (
            <article
              key={amenity.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-100"
            >
              <h3 className="text-base font-semibold text-slate-900">{amenity.title}</h3>
              <p className="mt-2">{amenity.detail}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-100">
          <h3 className="text-base font-semibold text-slate-900">Accessibility services</h3>
          <p className="mt-2">
            MediKiosk is designed with accessibility at the core. Toggle high-contrast, screen reader-friendly flows, or
            request assistance with one tap.
          </p>
          <ul className="mt-4 space-y-2">
            {accessibility.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span aria-hidden>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
