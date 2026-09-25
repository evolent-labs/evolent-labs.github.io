import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import type { MDXComponents } from 'mdx/types';
import { Blocks, CarFront, Code, LayoutDashboard, Monitor, Route, Server, Settings2, Terminal } from 'lucide-react';
import { LinkButton, LinkButtons } from '@/components/link-buttons';

// everything here can be used in any .mdx file without an import
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    Tab,
    Tabs,
    Accordion,
    Accordions,
    TypeTable,
    LinkButton,
    LinkButtons,
    // icons used by <Card icon={...}>
    Blocks,
    CarFront,
    Code,
    LayoutDashboard,
    Monitor,
    Route,
    Server,
    Settings2,
    Terminal,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
