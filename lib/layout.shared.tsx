import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, discordUrl, githubOrgUrl, logoUrl } from './shared';
import { DiscordIcon } from '@/components/icons';

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoUrl} alt="" width={28} height={28} className="size-7 rounded-lg" />
      <span className="text-[15px] font-semibold tracking-tight">{appName}</span>
      <span className="rounded-md border border-fd-primary/30 bg-fd-primary/10 px-1.5 py-0.5 text-[11px] font-medium text-fd-primary">
        Docs
      </span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
    },
    githubUrl: githubOrgUrl,
    links: [
      {
        type: 'icon',
        label: 'Discord',
        icon: <DiscordIcon />,
        text: 'Discord',
        url: discordUrl,
        external: true,
      },
    ],
  };
}
