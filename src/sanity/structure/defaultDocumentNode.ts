import {
  Preflight,
  DeadLinks,
  SEOAudit,
} from '@planetary/sanity-plugin-preflight';
import { RocketIcon } from '@sanity/icons';
import type { DefaultDocumentNodeResolver } from 'sanity/structure';

const namespace = 'SANITY_SECRETS';

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
                  baseUrl: 'https://sanity-nextjs-app-beige.vercel.app/',
                  // rules: {
                  //   flash: 'off',
                  //   is_www: {
                  //     label: 'Compact domain',
                  //     description: 'The domain should not include www',
                  //     severity: 'error',
                  //     expected: false,
                  //   },
                  // },
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
