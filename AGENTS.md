# AGENTS.md

## Project Overview

Personal website for raman.codes. Static site built with **Astro 5**, **Tailwind CSS v4**, and **TypeScript** (strict mode). Deployed to **Cloudflare Pages/Workers** via Wrangler. Package manager is **Bun**.

No client-side framework runtime (React/Vue/Svelte) -- all interactivity uses vanilla DOM manipulation in `<script>` tags within Astro components.

## Build / Dev / Lint Commands

```bash
bun run dev          # Start dev server on port 3000
bun run build        # Production build (astro build)
bun run preview      # Preview production build locally
bun run lint         # ESLint + Prettier check
bun run format       # Auto-format with Prettier
bun run deploy       # Build + deploy to Cloudflare via Wrangler
```

**No test framework is configured.** There are no test files, no test runner, and no `test` script.

Always run `bun run build` to verify changes compile without errors before considering work complete.

## Project Structure

```
src/
  app.css                  # Global styles, Tailwind v4 theme config
  content.config.ts        # Astro content collections (Zod schemas)
  assets/                  # Images (processed by Astro's asset pipeline)
  components/              # Reusable Astro components
  content/blog/            # Markdown blog posts
  layouts/Base.astro       # Single layout wrapping all pages
  pages/                   # File-based routing
  utils/                   # Utility functions (e.g., dates.ts)
public/                    # Static assets served as-is
astro.config.mjs           # Astro config (static output, Cloudflare adapter)
wrangler.jsonc             # Cloudflare Workers/Pages config
```

## Code Style

Run `bun run format` to auto-fix formatting issues.

### TypeScript

- **Strict mode** -- extends `astro/tsconfigs/strict`
- Path alias `@/*` maps to `src/*` (configured but not currently used in the codebase; prefer relative imports to match existing code)
- Use **`interface`** (not `type`) for object shapes
- Explicit parameter types on functions; return types are inferred (not annotated)
- Use `as HTMLElement` type assertions for DOM element queries
- Use optional chaining (`?.`) and nullish coalescing (`??`) over manual null checks

### Naming Conventions

| Thing               | Convention              | Example                       |
| ------------------- | ----------------------- | ----------------------------- |
| Components          | PascalCase `.astro`     | `ProfileCard.astro`           |
| Pages               | lowercase `.astro`      | `index.astro`, `[slug].astro` |
| Utility files       | camelCase `.ts`         | `dates.ts`                    |
| Blog content        | kebab-case `.md`        | `make-git-prettier.md`        |
| Asset files         | snake_case              | `solace_logo.jpeg`            |
| Variables/functions | camelCase               | `formatDateFriendly`          |
| Interfaces          | PascalCase              | `Experience`, `Props`         |
| CSS theme tokens    | `--color-*`, `--font-*` | `--color-accent`              |

### Astro Components

- Frontmatter block (`---`) at the top contains all TypeScript: imports, interfaces, data, logic
- Define `interface Props` in frontmatter for component props; destructure from `Astro.props` with defaults
- Use `<slot />` for content projection in layout components
- Data arrays are defined as typed constants directly in frontmatter (not fetched externally)
- Import images as modules and use `.src` property: `import logo from '../assets/logo.jpeg'` then `src={logo.src}`

### Imports

- Use **relative paths** (`../components/Nav.astro`) -- do not use the `@/*` alias
- Astro built-in imports: `astro:content` for collections, `astro/loaders` for glob loader
- Font imports go in the layout: `@fontsource-variable/geist`, `@fontsource/instrument-serif`
- Order: external packages, then Astro modules, then local imports (layouts, components, utils, assets)

### Tailwind CSS v4

- Configured entirely via `src/app.css` using `@import 'tailwindcss'` and `@theme { }` -- there is no `tailwind.config.*` file
- Loaded as a Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`, not an Astro integration
- Use semantic color tokens defined in the theme: `bg`, `body`, `title`, `primary`, `accent`, `hover`, `border`
- Use `@tailwindcss/typography` plugin for prose/markdown content styling
- Mobile-first responsive design: base styles for mobile, `md:` prefix for desktop
- Transitions: `transition-all duration-300 ease-in-out` on interactive elements
- No icon library -- icons are inline SVGs

### Client-Side JavaScript

- Written in `<script>` tags at the bottom of `.astro` components
- Vanilla JS only -- no framework runtime on the client
- Pattern: define an `init*` function, call it immediately (e.g., `initCopyButtons()`)
- Use `document.querySelectorAll` with `for...of` loops (not `.forEach`)
- Guard clauses for null checks: `if (!element) return;` or `if (!element) continue;`
- Template literals for SVG icon markup strings

### Content Collections

- Blog posts are Markdown files in `src/content/blog/` with YAML frontmatter
- Schema validated with Zod in `src/content.config.ts`
- Required frontmatter fields: `title` (string), `publishedAt` (date, coerced)
- Use `getCollection('blog')` and `render()` from `astro:content`

### Error Handling

- Guard clauses with early returns for null/undefined DOM elements
- Optional chaining (`?.`) for potentially null references
- Nullish coalescing (`??`) for fallback values (e.g., `preTag.textContent ?? ''`)
- No try/catch blocks needed -- this is a static site with no API routes or async error paths

## Deployment

- Static output mode with Cloudflare adapter (`@astrojs/cloudflare`)
- Domain: `raman.codes`
- Sitemap auto-generated by `@astrojs/sitemap`
- Shiki syntax highlighting with `kanagawa-wave` theme for code blocks
- Manual deploy via `bun run deploy` (no CI/CD pipeline)
