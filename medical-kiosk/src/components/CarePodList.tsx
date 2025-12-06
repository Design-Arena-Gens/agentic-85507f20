const pods = [
  {
    name: 'Immediate Care',
    status: 'Now rooming',
    roomsAvailable: 3,
    lead: 'Dr. Marcus Lee',
    notes: 'Route respiratory and high-fever visits here first.',
  },
  {
    name: 'Family Medicine',
    status: 'On schedule',
    roomsAvailable: 5,
    lead: 'Dr. Priya Patel',
    notes: 'Ideal for well visits, physicals, chronic care follow-ups.',
  },
  {
    name: 'Pediatrics',
    status: 'Short wait',
    roomsAvailable: 2,
    lead: 'NP Haley Adams',
    notes: 'Support ChildLife alert for sensory-friendly rooms.',
  },
  {
    name: 'Diagnostics & Labs',
    status: 'Walk-in welcome',
    roomsAvailable: 6,
    lead: 'Supervisor Jordan Brooks',
    notes: 'Auto-notify radiology when imaging orders flagged urgent.',
  },
];

export default function CarePodList() {
  return (
    <div className="space-y-4">
      {pods.map((pod) => (
        <article
          key={pod.name}
          className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm shadow-slate-100"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold text-slate-900">{pod.name}</h3>
            <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {pod.status}
            </span>
          </div>
          <dl className="mt-4 grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Rooms available</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">{pod.roomsAvailable}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Clinical lead</dt>
              <dd className="mt-1 text-slate-900">{pod.lead}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Routing tips</dt>
              <dd className="mt-1">{pod.notes}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
