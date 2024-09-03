import {
  Preflight,
  DeadLinks,
  SEOAudit,
} from '@planetary/sanity-plugin-preflight';
import { RocketIcon } from '@sanity/icons';
import type { DefaultDocumentNodeResolver } from 'sanity/structure';
import { useSecrets, SettingsView } from '@sanity/studio-secrets';

const namespace = 'DataForSeo';

const pluginConfigKeys = [
  {
    key: process.env.DATA_FOR_SEO_API_KEY,
    title: 'Data for SEO API Key',
    description: 'API key for Data for SEO',
  },
];

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(
            Preflight({
              plugins: [
                SEOAudit({
                  secretsNamespace: namespace,
                  baseUrl: 'https://localhost:3000',
                  rules: {
                    flash: 'off',
                    is_www: {
                      label: 'Compact domain',
                      description: 'The domain should not include www',
                      severity: 'error',
                      expected: false,
                    },
                  },
                }),
                DeadLinks({
                  content: 'body',
                }),
              ],
            })
          )
          .title('Preflight')
          .icon(RocketIcon),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
