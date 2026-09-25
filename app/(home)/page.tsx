import Link from 'next/link';
import { ArrowRight, BookOpen, Car, LifeBuoy, Sparkles, Store, Warehouse } from 'lucide-react';
import { products, type Product } from '@/lib/products';
import { discordUrl } from '@/lib/shared';
import { DiscordIcon } from '@/components/icons';

const icons: Record<Product['icon'], typeof Car> = { Car, Warehouse, Store, Sparkles };

const team = [
  { name: 'darkets', role: 'Fullstack Developer', image: 'https://avatars.githubusercontent.com/u/86129179?v=4' },
  { name: 'choxen', role: 'Fullstack Developer', image: 'https://avatars.githubusercontent.com/u/60402744?v=4' },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-6">
      {/* hero */}
      <section className="flex flex-col items-center pt-20 pb-16 text-center md:pt-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-fd-primary" />
          FiveM resources, documented
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          Everything you need to run{' '}
          <span className="bg-gradient-to-r from-fd-primary to-[#7c93ff] bg-clip-text text-transparent dark:to-[#d7dfff]">
            Evolent
          </span>{' '}
          on your server
        </h1>
        <p className="mt-5 max-w-xl text-base text-fd-muted-foreground text-balance md:text-lg">
          Installation guides, configuration references and developer APIs for every Evolent resource.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-xl bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:bg-fd-primary/85"
          >
            <BookOpen className="size-4" />
            Browse documentation
          </a>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border bg-fd-card px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent"
          >
            <DiscordIcon className="size-4" />
            Join our Discord
          </a>
        </div>
      </section>

      {/* products */}
      <section id="products" className="scroll-mt-24">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Resources</h2>
            <p className="mt-1 text-sm text-fd-muted-foreground">Pick a resource to get started.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* help */}
      <section className="mt-16 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl border bg-fd-card p-6 md:p-8">
          <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-fd-primary/15 blur-3xl" />
          <LifeBuoy className="mb-4 size-6 text-fd-primary" />
          <h2 className="text-lg font-semibold tracking-tight">Stuck on something?</h2>
          <p className="mt-2 max-w-md text-sm text-fd-muted-foreground">
            Search the docs with <Kbd>Ctrl</Kbd> <Kbd>K</Kbd>, or open a ticket in our Discord and the team will help
            you out.
          </p>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary hover:underline"
          >
            Open Discord <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="rounded-2xl border bg-fd-card p-6 md:p-8">
          <h2 className="text-lg font-semibold tracking-tight">Meet the team</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">We love making cool stuff for FiveM.</p>
          <ul className="mt-5 flex flex-col gap-3">
            {team.map((member) => (
              <li key={member.name} className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.image} alt="" className="size-10 rounded-full border" />
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-fd-muted-foreground">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon];

  return (
    <div className="group relative flex flex-col rounded-2xl border bg-fd-card p-6 transition hover:border-fd-primary/40 hover:shadow-lg hover:shadow-fd-primary/5">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl border bg-gradient-to-b from-fd-primary/15 to-fd-primary/5 text-fd-primary">
          <Icon className="size-5" />
        </div>
        {product.badge && (
          <span className="rounded-full border border-fd-primary/30 bg-fd-primary/10 px-2 py-0.5 text-xs font-medium text-fd-primary">
            {product.badge}
          </span>
        )}
      </div>
      <p className="text-xs font-medium tracking-wide text-fd-muted-foreground uppercase">{product.tagline}</p>
      <h3 className="mt-1 text-lg font-semibold tracking-tight">
        <Link href={`/${product.slug}`} className="inline-flex items-center gap-1.5 after:absolute after:inset-0">
          Evolent {product.name}
          <ArrowRight className="size-4 text-fd-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-fd-primary" />
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-fd-muted-foreground">{product.description}</p>
      <div className="relative z-10 mt-5 flex flex-wrap gap-2 border-t pt-4">
        {product.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-2 py-1 text-xs font-medium text-fd-muted-foreground transition hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border bg-fd-muted px-1.5 py-0.5 font-mono text-[11px] text-fd-foreground">{children}</kbd>
  );
}
