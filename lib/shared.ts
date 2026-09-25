import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Evolent';
export const siteUrl = 'https://docs.evolent.dev';
export const discordUrl = 'https://discord.gg/SJJ9Uc9NAp';
export const githubOrgUrl = 'https://github.com/evolent-labs';
export const logoUrl =
  'https://avatars.githubusercontent.com/u/110971334?s=400&u=08b894e2c622900b431ed52533702603b36e82df&v=4';

// docs live at the site root so the old Nextra links (/boosting/Config, ...) keep working
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'evolent-labs',
  repo: 'evolent-labs.github.io',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
