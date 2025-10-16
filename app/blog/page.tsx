import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { BLOG_POSTS_QUERY } from '../../lib/sanity.queries';
import { getClient, urlForImage, hasSanityConfig } from '../../lib/sanity.client';
import type { BlogPostPreview } from '../../lib/types';

export const metadata: Metadata = {
  title: 'Stories & Updates | Taylor Made Dreams Blog',
  description:
    'Follow the latest updates from Taylor Made Dreams, discover new family stories, fundraising ideas, and expert advice for supporting children with life-limiting conditions.',
};

export const revalidate = 1800; // Revalidate every 30 minutes.

async function getBlogPosts(): Promise<BlogPostPreview[]> {
  try {
    const posts = await getClient().fetch<BlogPostPreview[]>(BLOG_POSTS_QUERY, {}, {
      next: { revalidate },
    });
    return posts;
  } catch (error) {
    console.error('Failed to fetch Sanity blog posts', error);
    return [];
  }
}

const formatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' });

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();
  const [featured, ...rest] = posts;
  const shouldShowSetupNotice = !hasSanityConfig;

  return (
    <div className="pb-24">
      <section className="bg-gradient-to-br from-brand-600 to-brand-400 text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl space-y-4">
            <p className="uppercase tracking-wide text-sm text-yellow-200 font-semibold">Insights &amp; Stories</p>
            <h1 className="text-3xl md:text-5xl font-bold">Taylor Made Dreams Blog</h1>
            <p className="text-lg text-white/80">
              Real-life stories, practical resources, and fundraising inspiration from across Sussex and the South East.
              Discover how your support transforms young lives every day.
            </p>
            <Link
              href="#latest-posts"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] hover:text-white transition"
            >
              Skip to latest articles
            </Link>
          </div>
        </div>
      </section>

      <section id="latest-posts" className="container mt-12 space-y-16">
        {featured ? (
          <article className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 min-h-[320px]">
              {featured.coverImage ? (
                <Image
                  src={urlForImage(featured.coverImage).width(900).height(700).quality(80).url()}
                  alt={featured.title ?? 'Taylor Made Dreams story'}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-100 to-yellow-100">
                  <span className="text-lg font-semibold text-brand-600">New Taylor Made Dreams Story</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-white/80">
                  {featured.categories?.map((category) => (
                    <span key={category._id} className="px-3 py-1 rounded-full bg-white/20">
                      {category.title}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link href={`/blog/${featured.slug}`} className="hover:underline">
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-white/80 clamp-2">{featured.excerpt}</p>
                <p className="text-sm text-white/70">
                  {featured.publishedAt ? formatter.format(new Date(featured.publishedAt)) : 'Date coming soon'}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Featured story</p>
                <h2 className="text-3xl font-bold text-gray-900">
                  <Link href={`/blog/${featured.slug}`} className="hover:text-brand-600">
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed">{featured.excerpt}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
                <div className="space-x-2">
                  {featured.author?.name && <span>{featured.author.name}</span>}
                  {featured.author?.jobTitle && (
                  <span className="text-gray-400" aria-label="Author role">
                    Â· {featured.author.jobTitle}
                  </span>
                )}
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="btn btn-outline text-brand-600 border-brand-600 hover:text-white hover:bg-brand-600"
                >
                  Read full story
                </Link>
              </div>
            </div>
          </article>
        ) : (
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">No posts published yet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {shouldShowSetupNotice ? (
                <span>
                  Set your Sanity environment variables (<code>NEXT_PUBLIC_SANITY_*</code>) and publish at least one <code>post</code> document to populate the blog. See <code>agents.md</code> for details.
                </span>
              ) : (
                <span>
                  Add posts in Sanity Studio using the <code>post</code> schema and they will appear here automatically once published.
                </span>
              )}
            </p>
          </div>
        )}

        {rest.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Latest articles</h2>
              <Link href="/#contact" className="text-sm font-semibold text-brand-600 hover:underline">
                Subscribe for updates
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((post) => (
                <article key={post._id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden border border-gray-100">
                  <div className="relative h-48 bg-gray-100">
                    {post.coverImage ? (
                      <Image
                        src={urlForImage(post.coverImage).width(600).height(400).quality(75).url()}
                        alt={post.title ?? 'Taylor Made Dreams blog image'}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : null}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-brand-600/80">
                      {post.categories?.map((category) => (
                        <span key={category._id} className="px-2.5 py-1 bg-[var(--muted)] rounded-full">
                          {category.title}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 clamp-3">{post.excerpt}</p>
                    <div className="text-xs text-gray-500">
                      {post.publishedAt ? formatter.format(new Date(post.publishedAt)) : 'Publish date coming soon'}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
