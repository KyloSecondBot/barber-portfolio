/** Section label for cream sections. Full-strength muted-2 so small mono text passes AA contrast. */
export function SectionTag({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="label flex items-center gap-3 text-muted-2">
      <span className="text-ink">{n}</span>
      <span>{children}</span>
    </p>
  );
}
