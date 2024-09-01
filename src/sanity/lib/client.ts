import 'server-only';

import { draftMode } from 'next/headers';
import { createClient, type QueryOptions, type QueryParams } from 'next-sanity';

import { apiVersion, dataset, projectId } from './api';
import { token } from './token';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
    studioUrl: '/studio',
  },
});
