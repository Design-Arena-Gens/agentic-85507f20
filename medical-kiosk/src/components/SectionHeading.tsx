type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`flex max-w-3xl flex-col gap-2 ${alignment}`}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="text-sm text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}
