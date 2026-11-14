import Link from "next/link";

/** Small mono section label, e.g. "02 — The work". */
export function SectionLabel({
  n,
  children,
  className = "",
}: {
  n?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      {n && <span className="opacity-100">{n}</span>}
      <span className="opacity-80">{children}</span>
    </p>
  );
}

/** Container with the site's standard 16px mobile gutter. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline-dark" | "outline-light";
  external?: boolean;
  className?: string;
  track?: boolean;
};

/** Primary = brass fill. outline-dark = for dark sections, outline-light = for cream sections. */
export function Button({ href, children, variant = "primary", external, className = "", track }: BtnProps) {
  const styles = {
    primary: "bg-brass text-ink hover:bg-brass-hover border border-brass",
    "outline-dark": "border border-cream/40 text-cream hover:border-cream hover:bg-cream/5",
    "outline-light": "border border-ink/40 text-ink hover:border-ink hover:bg-ink/5",
  }[variant];
  const cls = `headline inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm tracking-normal transition-colors ${styles} ${className}`;
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} data-track={track ? "book" : undefined}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
