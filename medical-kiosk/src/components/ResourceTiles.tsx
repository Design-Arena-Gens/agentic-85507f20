const resources = [
  {
    title: 'New patient onboarding',
    description: 'Upload ID, insurance card, and health history before arrival to shorten wait times by 40%.',
    href: '/check-in',
  },
  {
    title: 'Virtual waiting room',
    description: 'Join from your phone, view real-time queue updates, and get notified when to head inside.',
    href: '/appointments',
  },
  {
    title: 'Caregiver access',
    description: 'Invite family to receive SMS updates, directions, and discharge summaries instantly.',
    href: '/visitor-guide',
  },
];

export default function ResourceTiles() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {resources.map((resource) => (
        <a
          key={resource.title}
          href={resource.href}
          className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-lg hover:shadow-slate-100"
        >
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">{resource.title}</h3>
            <p className="text-sm text-slate-600">{resource.description}</p>
          </div>
          <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Explore</span>
        </a>
      ))}
    </div>
  );
}
