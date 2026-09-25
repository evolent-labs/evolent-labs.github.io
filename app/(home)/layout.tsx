import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { products } from '@/lib/products';

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = baseOptions();

  return (
    <HomeLayout
      {...base}
      links={[
        {
          type: 'menu',
          text: 'Resources',
          items: products.map((product) => ({
            text: `Evolent ${product.name}`,
            description: product.tagline,
            url: `/${product.slug}`,
          })),
        },
        ...(base.links ?? []),
      ]}
    >
      {children}
      <footer className="mt-auto border-t py-8 text-center text-xs text-fd-muted-foreground">
        © {new Date().getFullYear()} Evolent. All rights reserved.
      </footer>
    </HomeLayout>
  );
}
