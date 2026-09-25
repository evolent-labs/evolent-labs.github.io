import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export function LinkButtons({ children }: { children: ReactNode }) {
  return <div className="not-prose my-6 flex flex-wrap gap-2">{children}</div>;
}

export function LinkButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors',
        primary
          ? 'border-transparent bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/85'
          : 'bg-fd-card text-fd-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
      )}
    >
      {children}
      {external && <ArrowUpRight className="size-3.5 opacity-70" />}
    </a>
  );
}
