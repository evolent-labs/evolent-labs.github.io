export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: 'Car' | 'Warehouse' | 'Store' | 'Sparkles';
  badge?: string;
  paid: boolean;
  links: { label: string; href: string }[];
};

// order here is the order of the cards on the landing page
export const products: Product[] = [
  {
    slug: 'garage',
    name: 'Garage',
    tagline: 'Underground lifts & terminals',
    description:
      'Animated vehicle lifts with a touch screen terminal, job access, impounds and an in-game garage manager.',
    icon: 'Warehouse',
    badge: 'New',
    paid: true,
    links: [
      { label: 'Installation', href: '/garage' },
      { label: 'Garage Manager', href: '/garage/Manager' },
      { label: 'Configuration', href: '/garage/Config' },
    ],
  },
  {
    slug: 'boosting',
    name: 'Boosting',
    tagline: 'Vehicle boosting contracts',
    description:
      'Contract based boosting with classes, progression, a market and fully custom missions.',
    icon: 'Car',
    paid: true,
    links: [
      { label: 'Installation', href: '/boosting' },
      { label: 'Custom Missions', href: '/boosting/Missions' },
      { label: 'Configuration', href: '/boosting/Config' },
    ],
  },
  {
    slug: 'fleamarket',
    name: 'Fleamarket',
    tagline: 'Player driven marketplace',
    description:
      'A living marketplace where players list, trade and flip items, shaped by supply, demand and reputation.',
    icon: 'Store',
    paid: true,
    links: [
      { label: 'Installation', href: '/fleamarket' },
      { label: 'Configuration', href: '/fleamarket/Config' },
    ],
  },
  {
    slug: 'skills',
    name: 'Skills',
    tagline: 'Player skill progression',
    description: 'Level up driving, shooting or any skill you define. Free and open source.',
    icon: 'Sparkles',
    badge: 'Free',
    paid: false,
    links: [
      { label: 'Installation', href: '/skills' },
      { label: 'Server Exports', href: '/skills/Functions/Server' },
      { label: 'Client Exports', href: '/skills/Functions/Client' },
    ],
  },
];
