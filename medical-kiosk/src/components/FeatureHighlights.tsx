const features = [
  {
    title: 'Guided triage',
    description:
      'Surface high-acuity symptoms instantly with branching questions and nurse alerts. Supports English, Spanish, and ASL video relay.',
    icon: '🩺',
  },
  {
    title: 'Unified queue',
    description:
      'Sync walk-ins, scheduled appointments, and telehealth check-ins so teams can load balance across pods in real time.',
    icon: '🗓️',
  },
  {
    title: 'Smart forms',
    description:
      'Insurance card scan, ID verification, and consent capture reduce paperwork time by 12 minutes per patient on average.',
    icon: '🪪',
  },
  {
    title: 'Wayfinding concierge',
    description:
      'Interactive maps, multilingual directions, and SMS handoff keep family members informed of room changes.',
    icon: '🧭',
  },
];

export default function FeatureHighlights() {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-sky-200 hover:shadow-lg hover:shadow-slate-100"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
          </div>
          <p className="text-sm text-slate-600">{feature.description}</p>
          <div className="mt-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Included in kiosk plan</span>
          </div>
        </article>
      ))}
    </section>
  );
}
