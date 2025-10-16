# Taylor Made Dreams · Brand Identity System

This guide captures the refreshed brand direction for Taylor Made Dreams and provides practical references for designers and developers so that every touchpoint feels consistent, joyful, and trustworthy.

---

## 1. Brand Foundations

- **Purpose**  
  Enable children with life-limiting conditions – and their families – to create treasured memories filled with love, play, and hope.

- **Core Values**  
  1. *Compassion first* – warm, human-centred language and imagery.  
  2. *Empowering families* – celebrate resilience, not pity.  
  3. *Trust through transparency* – clear CTAs, accessible content, measurable impact.  
  4. *Joyful optimism* – vivid but gentle palette, playful micro-interactions that stay inclusive.

- **Audience Lenses**  
  - *Primary*: Parents / carers seeking support, clinical partners making referrals.  
  - *Secondary*: Donors (individual and corporate), volunteers, press.  
  - *Tertiary*: Wider community advocates.

---

## 2. Visual Language

### 2.1 Colour Palette

| Pillar | Token | Hex | Usage |
| --- | --- | --- | --- |
| **Dream Purple** | `--color-brand-500` | `#6B4EE6` | Primary actions, headings, icons |
| | `--color-brand-600` | `#5A41C4` | Hover state, dark gradients |
| | `--color-brand-100` | `#E7E1FF` | Background tints, hero overlays |
| **Sunrise Apricot** | `--color-sunrise-500` | `#FF9A6B` | Secondary CTAs, highlights |
| | `--color-sunrise-300` | `#FFC3A6` | Cards, illustrations |
| **Hope Teal** | `--color-teal-500` | `#2CBDA4` | Trust badges, data viz, focus |
| | `--color-teal-200` | `#B8F2E6` | Background accents |
| **Golden Glow** | `--color-gold-400` | `#F5C04C` | Donation prompts, icons |
| **Night Sky** | `--color-slate-900` | `#1E1A36` | Footer, typography on light |
| **Gentle Mist** | `--color-cloud-50` | `#F7F5FF` | Section backgrounds |

Gradients:
- `--gradient sunrise`: `linear-gradient(135deg, #6B4EE6 0%, #9B6BFF 50%, #FF9A6B 100%)`
- `--gradient teal`: `linear-gradient(135deg, #2CBDA4 0%, #6B4EE6 100%)`

### 2.2 Typography Stack

| Role | Font | Weights | Use |
| --- | --- | --- | --- |
| **Headings / CTAs** | *Nunito* | 500–800 | H1–H4, buttons, nav |
| **Body Copy** | *Source Sans 3* | 400–600 | Paragraphs, UI labels |
| **Playful Accent** | *Caveat* | 400, 600 | Quotes, highlights, child voice (sparingly) |

Loading via `next/font/google` keeps performance high. Include `font-display: swap` and expose CSS variables `--font-heading`, `--font-body`, `--font-accent`.

### 2.3 Iconography & Illustration

- Continue using Lucide for consistent stroke icons; apply rounded stroke caps and brand colours.
- Illustration direction: minimal line + fill scenes depicting children & families; avoid overly literal medical imagery.
- Use soft shadows (`0 24px 40px rgba(31, 26, 54, 0.08)`) and rounded corners (`24px`) for cards.

### 2.4 Imagery

- Prioritise genuine photography supplied by the charity (smiling children + carers in candid moments).
- Apply subtle colour grading to align with the Dream Purple & Sunrise tones.
- Provide descriptive alt text focusing on emotions and actions (“Sienna paints with her dad during a Taylor Made Dreams art day”).

---

## 3. Interface Tokens

Expose the following CSS variables in `:root` (see `app/globals.css`):

- Colour tokens described above (`--color-*`) plus aliases (`--primary`, `--secondary`, `--accent`) for backwards compatibility.
- Typography: `--font-heading`, `--font-body`, `--font-accent`.
- Spacing scale:  
  `--space-xxs: 0.25rem`, `--space-xs: 0.5rem`, `--space-sm: 0.75rem`, `--space-md: 1rem`, `--space-lg: 1.5rem`, `--space-xl: 2rem`, `--space-2xl: 3rem`.
- Radius: `--radius-sm: 12px`, `--radius-md: 20px`, `--radius-lg: 28px`, `--radius-full: 999px`.

---

## 4. Tone of Voice

- **Warmly professional** – plain English, positive framing (“We’re here for you” vs. “We know it’s hard”).
- **Empathetic** – acknowledge feelings, offer reassurance.
- **Actionable** – every section ends with a clear step (call, donate, refer, volunteer).
- Use UK spelling and maintain inclusive language (e.g., “families and carers”).

---

## 5. Component Guidance

- **Hero**: Use a single strong visual with supporting stats in a secondary column; allow optional video but avoid autoplay.
- **Navigation**: Group actions into *Support*, *For Families*, *About*, *Stories*. Sticky state uses translucent background with blur.
- **Buttons**: Primary `btn-primary` uses Dream Purple gradient, secondary `btn-secondary` uses Sunrise Apricot, tertiary `btn-outline` retains teal border.
- **Cards**: Apply `card-brand` utility (defined in CSS) – mix of background tint + subtle gradient border.
- **Forms**: Use roomy spacing (`--space-md`), left-aligned labels, inline validation with error text in `--color-sunrise-500`.

---

## 6. Implementation Checklist

1. Add fonts via `next/font/google` and expose variables in `app/layout.tsx`.
2. Update `app/globals.css` with new colour tokens, typography usage, and component utilities.
3. Extend `tailwind.config.js` to reference the CSS variable fonts (`fontFamily.display`, `fontFamily.sans`, `fontFamily.accent`).
4. Replace hard-coded colour styles in components with updated tokens (`text-[var(--color-brand-600)]`, etc.).
5. Audit hero, stats, and footer sections to dial back animation and ensure consistent typography scale.
6. Document brand usage across marketing collateral (social graphics, email templates) – future work.

---

Use this guide as the single source of truth. When in doubt, return to our values: compassionate, empowering, transparent, joyful.
