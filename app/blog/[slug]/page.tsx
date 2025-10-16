import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { cache } from 'react';
import type { ReactNode } from 'react';

import { BLOG_POST_QUERY, BLOG_POST_SLUGS_QUERY } from '../../../lib/sanity.queries';
import { getClient, urlForImage } from '../../../lib/sanity.client';
import type { BlogPost } from '../../../lib/types';

export const revalidate = 1800; // 30 minutes

const fetchPost = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const post = await getClient().fetch<BlogPost | null>(
      BLOG_POST_QUERY,
      { slug },
      { next: { revalidate } },
    );
    return post;
  } catch (error) {
    console.error('Failed to load Sanity post', error);
    return null;
  }
});

export async function generateStaticParams() {
  try {
    const slugs = await getClient().fetch<{ slug: string }[]>(BLOG_POST_SLUGS_QUERY);
    return slugs.map(({ slug }) => ({ slug }));
  } catch (error) {
    console.error('Failed to fetch Sanity slugs', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: 'Story not found | Taylor Made Dreams',
    };
  }

  const baseTitle = post.seoTitle ?? post.title ?? 'Taylor Made Dreams Story';
  const description = post.seoDescription ?? post.excerpt ?? 'Stories and updates from Taylor Made Dreams.';
  const ogImage = post.coverImage ? urlForImage(post.coverImage).width(1200).height(630).url() : '/og-image.svg';

  return {
    title: `${baseTitle} | Taylor Made Dreams`,
    description,
    openGraph: {
      title: baseTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description,
      images: [ogImage],
    },
  };
}

const components = {
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
      if (!value) {
        return null;
      }
      return (
        <div className="my-8 overflow-hidden rounded-2xl">
          <Image
            src={urlForImage(value).width(1200).quality(80).url()}
            alt={value.alt ?? 'Taylor Made Dreams'}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string }; children?: ReactNode }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-brand-600 underline underline-offset-2 hover:text-brand-400"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="text-lg leading-8 text-gray-700 mb-6">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">{children}</ol>
    ),
  },
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' });

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-24">
      <header className="bg-gradient-to-br from-brand-600 to-brand-400 text-white">
        <div className="container py-16 md:py-24 space-y-6">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-yellow-200">
            {post.categories?.map((category) => (
              <span key={category._id} className="px-3 py-1 rounded-full bg-white/15">
                {category.title}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            {post.title}
          </h1>
          <div className="text-sm text-white/80 flex flex-wrap items-center gap-2">
            {post.author?.name && <span>{post.author.name}</span>}
            {post.author?.jobTitle && (
            <span className="text-white/60" aria-label="Author role">
              Â· {post.author.jobTitle}
            </span>
          )}
            {post.publishedAt && (
              <span className="mx-2 text-white/50">|</span>
            )}
            {post.publishedAt && <span>{dateFormatter.format(new Date(post.publishedAt))}</span>}
          </div>
        </div>
      </header>

      {post.coverImage && (
        <div className="relative h-[320px] md:h-[480px] w-full overflow-hidden">
          <Image
            src={urlForImage(post.coverImage).width(1400).height(840).quality(80).url()}
            alt={post.title ?? 'Taylor Made Dreams story'}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <div className="container mt-10 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
        <div>
          {post.body ? (
            <PortableText value={post.body} components={components} />
          ) : (
            <p className="text-gray-600">
              This story is being prepared. Check back soon for the full update from the Taylor Made Dreams team.
            </p>
          )}
        </div>
        <aside className="space-y-6">
          <div className="bg-[var(--muted)] p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Ready to help?</h2>
            <p className="text-sm text-gray-700 mb-4">
              Your support keeps our dream fulfilment programme running. Make a donation or explore upcoming events to get involved.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/#donate" className="btn-donate text-center">
                Donate today
              </Link>
              <Link href="/#news" className="btn btn-outline text-center">
                View fundraising events
              </Link>
            </div>
          </div>
          {post.author?.name && (
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                About the author
              </h3>
              <p className="text-base font-semibold text-gray-900">{post.author.name}</p>
              {post.author.jobTitle && <p className="text-sm text-gray-600">{post.author.jobTitle}</p>}
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
