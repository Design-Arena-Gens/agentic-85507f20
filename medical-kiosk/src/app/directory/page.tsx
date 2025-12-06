import DirectorySearch from '@/components/DirectorySearch';
import SectionHeading from '@/components/SectionHeading';

const supportInfo = [
  {
    title: 'Need specialist guidance?',
    detail: 'Concierge nurses can recommend the right specialist based on symptoms and recent visits.',
  },
  {
    title: 'In-person or virtual',
    detail: 'Switch modalities without losing your spot. The kiosk updates your clinician automatically.',
  },
  {
    title: 'Team-based care',
    detail: 'Care pods share notes instantly so you never repeat your story.',
  },
];

export const metadata = {
  title: 'Care Team Directory · MediKiosk',
  description: 'Search for clinicians by name, specialty, language, or availability right from the lobby kiosk.',
};

export default function DirectoryPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Find your match"
        title="Care team directory"
        description="Search across primary care, urgent care, pediatrics, and specialty pods to find the right clinician for your visit."
      />
      <DirectorySearch />
      <div className="grid gap-4 sm:grid-cols-3">
        {supportInfo.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-100"
          >
            <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2">{card.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
