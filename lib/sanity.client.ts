import { createClient, type ClientConfig } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

type SanityEnvironment = ClientConfig & { useCdn: boolean };

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'nzkjg3l9';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';
const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN !== 'false';

export const sanityConfig: SanityEnvironment | null = projectId
  ? ({ projectId, dataset, apiVersion, useCdn } satisfies SanityEnvironment)
  : null;

const previewToken = process.env.SANITY_API_READ_TOKEN;

const baseClient = sanityConfig ? createClient(sanityConfig) : null;

const previewClientInternal = sanityConfig && previewToken
  ? createClient({
      ...sanityConfig,
      token: previewToken,
      useCdn: false,
      perspective: 'previewDrafts',
    })
  : null;

export const hasSanityConfig = Boolean(sanityConfig);

export const getClient = (preview = false) => {
  if (!sanityConfig) {
    throw new Error('Sanity configuration is missing. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.');
  }

  if (preview && previewClientInternal) {
    return previewClientInternal;
  }

  return baseClient ?? createClient(sanityConfig);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = sanityConfig && sanityConfig.projectId ? imageUrlBuilder(sanityConfig as any) : null;

export const urlForImage = (source: SanityImageSource) => {
  if (!builder) {
    throw new Error('Sanity image builder is not configured.');
  }

  return builder.image(source).auto('format').fit('max');
};

export const sanityClient = baseClient;
export const previewClient = previewClientInternal;
