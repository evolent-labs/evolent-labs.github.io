# Evolent Docs

Documentation for Evolent's FiveM resources, live at [docs.evolent.dev](https://docs.evolent.dev). Built with [Fumadocs](https://fumadocs.dev) on Next.js and exported as a static site to GitHub Pages.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` creates the static site in `out/`.

## Writing docs

Every page is an `.mdx` file in `content/docs/`. Each resource has its own folder, which shows up as a tab in the navbar.

```
content/docs/
├── meta.json            order of the resource tabs
└── garage/
    ├── meta.json        tab title, icon and sidebar order
    ├── index.mdx        /garage
    └── Config.mdx       /garage/Config
```

A page starts with frontmatter:

```mdx
---
title: Configuration
description: Shown under the title and in search results.
icon: Settings2        # any icon from lucide.dev
---
```

These components work in every page without an import:

| Component | Use |
| :--- | :--- |
| `<Steps>` / `<Step>` | Numbered installation steps. Start each step with a `###` heading. |
| `<Tabs items={[...]}>` / `<Tab>` | Tabbed content, e.g. server / client code. |
| `<Callout type="info \| warn \| error \| success">` | Notes and warnings. Add `title="..."` for a heading. |
| `<Cards>` / `<Card>` | Link cards, e.g. "Next steps" at the end of a page. |
| `<LinkButtons>` / `<LinkButton href primary>` | Buttons such as "Our Store" at the top of a resource. |
| `<Accordions>` / `<Accordion>` | Collapsible sections. |

Code blocks take a title, and `// [!code ++]` marks added lines:

````mdx
```lua title="config.lua"
Config.Framework = 'qbx' -- [!code ++]
```
````

## Adding a new resource

1. Create `content/docs/<name>/` with an `index.mdx` and a `meta.json` (`"root": true`, a `title` and an `icon`).
2. Add the folder name to `content/docs/meta.json`.
3. Add a card for it in `lib/products.ts` so it shows up on the landing page.
