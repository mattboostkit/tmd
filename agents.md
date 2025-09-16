# agents.md

## Sanity integration
- Required env vars live in `.env.local` (not committed):
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET` (defaults to `production` if omitted)
  - `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to `2024-01-01`)
  - `NEXT_PUBLIC_SANITY_USE_CDN` (set to `false` when testing previews)
  - `SANITY_API_READ_TOKEN` (only needed for draft preview mode)
- Blog pages consume documents of type `post` with fields: `title`, `slug`, `publishedAt`, `excerpt`, `coverImage`, `body`, `seoTitle`, `seoDescription`, `author`, and `categories`. Categories should expose `title` and `slug`.
- `lib/sanity.client.ts` centralises client creation. Use `getClient(true)` to access preview drafts. `urlForImage(source)` builds optimised CDN URLs.

## Blog architecture
- Route group `app/blog` wraps pages with the main site header/footer.
- `app/blog/page.tsx` renders the listing page using `BLOG_POSTS_QUERY` with ISR (30 min revalidate).
- `app/blog/[slug]/page.tsx` renders individual posts with rich text support via `PortableText` components and provides metadata overrides.
- Adding new fields to the Sanity schema requires updating the GROQ queries in `lib/sanity.queries.ts` and the associated types in `lib/types.ts`.

## Development tips
- Run `npm run dev` for local development (Turbopack enabled). Blog routes will show a configuration warning if Sanity env vars are missing.
- When introducing new remote images ensure the domain is whitelisted in `next.config.ts` (`cdn.sanity.io` and `images.unsplash.com` are configured).
- Use Tailwind utility classes and the shared design tokens defined in `app/globals.css`. Sections that should work with the skip link require `id="main-content"` on the top-level `<main>` element.
- Forms remain prototype-only. Integrations live in `FORM_INTEGRATION.md`.

## Quick setup checklist
1. In the Sanity Manage UI, create a dataset named `production` for project `nzkjg3l9` (or reuse an existing dataset).
2. Generate a read token with Viewer permissions and paste it into `SANITY_API_READ_TOKEN` in `.env.local`.
3. Duplicate `.env.example` to `.env.local` and adjust values if you use a different dataset or API version.
4. In Sanity Studio, ensure you have document types that match the blog schemas (`post`, `category`, `author`).
5. After publishing posts, run `npm run dev` and browse `/blog` to confirm data is flowing.
