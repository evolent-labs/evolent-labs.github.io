import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.evolent.dev${asPath}`;
  const description = frontMatter.description || "Documentation for Evolent's resources.";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="./static/favicon.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const pathSegments = asPath.replace(/[-_]/g, ' ').split('/');
  const category = pathSegments[1] && pathSegments[1][0] !== '#' ? pathSegments[1] : 'Evolent';
  const rawTitle = pathSegments[pathSegments.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${rawTitle === category ? 'Documentation' : capitalizeCategory(category)}`,
  };
}

function capitalizeCategory(category) {
  return category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', lineHeight: '38px' }}>
      <img
        src="https://avatars.githubusercontent.com/u/110971334?s=400&u=08b894e2c622900b431ed52533702603b36e82df&v=4"
        alt="Evolent Logo"
        style={{ height: '38px', marginRight: '10px', borderRadius: '10%' }}
      />
      <span style={{ fontWeight: 550, fontSize: '20px' }}>Evolent</span>
    </div>
  ),
  project: {
    link: 'https://github.com/evolent-labs',
  },
  chat: {
    link: 'https://discord.gg/SJJ9Uc9NAp',
  },
  docsRepositoryBase: 'https://github.com/Void-Developments/evolent-labs.github.io',
  footer: {
    text: 'Evolent',
  },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps: useNextSeoProps,
};

export default config;
