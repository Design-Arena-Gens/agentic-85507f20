'use client';

import { useEffect, useState } from 'react';

type Metric = {
  label: string;
  stat: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
  description: string;
};

const baseMetrics: Metric[] = [
  {
    label: 'Average wait',
    stat: '08 min',
    trend: 'down',
    change: '-2 min',
    description: 'Compared to last hour',
  },
  {
    label: 'Patients queued',
    stat: '14',
    trend: 'up',
    change: '+3',
    description: 'Across all departments',
  },
  {
    label: 'Next telehealth slot',
    stat: '3:45 PM',
    trend: 'stable',
    change: 'In 20 min',
    description: 'With Dr. Patel',
  },
];

export default function QueueInsights() {
  const [metrics, setMetrics] = useState(baseMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((current) =>
        current.map((metric) => {
          if (metric.label === 'Average wait') {
            const wait = Math.max(4, Math.min(18, parseInt(metric.stat, 10) + (Math.random() > 0.5 ? 1 : -1)));
            const diff = wait - parseInt(metric.stat, 10);
            return {
              ...metric,
              stat: `${wait.toString().padStart(2, '0')} min`,
              trend: diff > 0 ? 'up' : diff < 0 ? 'down' : 'stable',
              change: `${diff > 0 ? '+' : ''}${diff} min`,
            };
          }
          if (metric.label === 'Patients queued') {
            const count = Math.max(4, Math.min(24, parseInt(metric.stat, 10) + (Math.random() > 0.5 ? 1 : -1)));
            const diff = count - parseInt(metric.stat, 10);
            return {
              ...metric,
              stat: `${count}`,
              trend: diff > 0 ? 'up' : diff < 0 ? 'down' : 'stable',
              change: `${diff > 0 ? '+' : ''}${diff}`,
            };
          }
          if (metric.label === 'Next telehealth slot') {
            return {
              ...metric,
              description: metric.description === 'With Dr. Patel' ? 'With NP Adams' : 'With Dr. Patel',
            };
          }
          return metric;
        })
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-lg shadow-slate-100 sm:p-8">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Live operations</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">Queue pulse</h3>
          <p className="mt-2 text-sm text-slate-600">
            Feed pulls from check-in kiosks, telehealth lobby, and nurse tablets. Refreshes automatically.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{metric.label}</dt>
              <dd className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-900">{metric.stat}</span>
                <TrendPill trend={metric.trend} change={metric.change} />
              </dd>
              <dd className="mt-2 text-xs text-slate-500">{metric.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function TrendPill({ trend, change }: { trend: Metric['trend']; change: string }) {
  const styles =
    trend === 'up'
      ? 'bg-red-50 text-red-600'
      : trend === 'down'
      ? 'bg-emerald-50 text-emerald-600'
      : 'bg-slate-100 text-slate-600';

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${styles}`}>
      {trend === 'stable' ? 'Stable' : trend === 'up' ? 'Rising' : 'Improving'} · {change}
    </span>
  );
}
