import { loader, type InferPageType } from 'fumadocs-core/source';
import { docs } from 'collections/server';
import { docsContentRoute, docsRoute } from './shared';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import IconContainer from '@/components/icon';

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: docsRoute,
  icon(icon) {
    if (icon && icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      });
  },
});

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
