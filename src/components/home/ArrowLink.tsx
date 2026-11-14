import Link from "next/link";

/** Text link with an arrow, 44px tall touch target. */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`label group inline-flex min-h-11 items-center gap-2 border-b border-current text-[0.8rem] transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
