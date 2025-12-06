import CarePodList from '@/components/CarePodList';
import FeatureHighlights from '@/components/FeatureHighlights';
import Hero from '@/components/Hero';
import QueueInsights from '@/components/QueueInsights';
import ResourceTiles from '@/components/ResourceTiles';
import SectionHeading from '@/components/SectionHeading';

const milestones = [
  {
    time: '0:00',
    title: 'Patient greets the kiosk',
    detail: 'Scans QR code or taps start on touch display.',
  },
  {
    time: '0:45',
    title: 'Smart intake forms',
    detail: 'Insurance verification and symptom triage tailored to visit type.',
  },
  {
    time: '1:30',
    title: 'Queue transparency',
    detail: 'Patient receives digital ticket with live wait estimates and directions.',
  },
  {
    time: '2:30',
    title: 'Care coordinator alert',
    detail: 'Clinician dashboard updates with readiness indicators and EHR pre-charting.',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-12 sm:space-y-20 sm:pb-16">
      <Hero />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Why MediKiosk"
          title="Designed for the rhythm of modern care teams"
          description="Patients finish check-in in under three minutes, while staff gain real-time routing tools that calm even the busiest waiting room."
          align="center"
        />
        <FeatureHighlights />
      </section>

      <section className="grid gap-6 lg:grid-cols-[3fr,2fr]">
        <QueueInsights />
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
          <SectionHeading
            eyebrow="Experience walkthrough"
            title="From lobby tap to exam room calm"
            description="Every step is optimized for clarity, accessibility, and collaboration. The kiosk guides patients while your team keeps moving."
          />
          <ol className="mt-6 space-y-4 text-sm text-slate-600">
            {milestones.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 shadow-sm shadow-slate-100"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <span>{item.time}</span>
                  <span>{item.title}</span>
                </div>
                <p className="mt-2 text-slate-700">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Operational view"
          title="Know which care pods are ready"
          description="Dynamic routing keeps clinicians working at top of license while offering patients fast, confident guidance."
        />
        <CarePodList />
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Patient tools"
          title="Give every visitor confidence"
          description="Self-check flows blend with concierge support for families, caregivers, and remote participants."
        />
        <ResourceTiles />
      </section>
    </div>
  );
}
