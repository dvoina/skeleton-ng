# skeleton-modern

A 2026 rebuild of the [Skeleton](http://getskeleton.com) CSS framework: CSS Grid
instead of floats, `clamp()` instead of fixed breakpoints, custom-property
tokens instead of hardcoded values, and real dark mode via
`prefers-color-scheme` plus a manual toggle. Same restraint, none of the 2014
plumbing.

## Install

Not on the npm registry yet — for now, copy this folder into your project
(e.g. `src/lib/skeleton-modern`) or install it as a local/git dependency:

```bash
npm install ./skeleton-modern
# or, once published:
npm install @dvoina/skeleton-ng
```

## Publishing to GitHub Packages

This repo includes a GitHub Action at
`.github/workflows/publish-github-packages.yml` that installs dependencies,
lints CSS, performs a package build check, and runs on pushes/PRs. Publishing
to GitHub Packages happens only on `v*` tags (or manual dispatch).

For GitHub's npm registry, package names must be scoped (for example
`@dvoina/skeleton-ng`) and consumers install from `npm.pkg.github.com`.

## Usage (SvelteKit)

**1. Load the stylesheet once**, in `src/app.html` (before your app's own CSS)
or by importing it in `src/routes/+layout.svelte`:

```svelte
<script>
  import '@dvoina/skeleton-ng/styles.css';
</script>
```

Also add the fonts it expects, in `src/app.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**2. Drop in the theme toggle** anywhere in your layout:

```svelte
<script>
  import { ThemeToggle } from '@dvoina/skeleton-ng';
</script>

<ThemeToggle />
```

**3. Use the classes** in your markup — `.grid` / `.col-4` / `.col-6` /
`.col-8` / `.col-12` for layout, `.button` / `.button-primary` /
`.button-ghost` for actions, plain `<input>` / `<select>` / `<textarea>` are
already styled.

```svelte
<div class="grid">
  <div class="col-8">Main content</div>
  <div class="col-4">Sidebar</div>
</div>

<button class="button button-primary">Save changes</button>
```

## Tokens

Everything is driven by custom properties on `:root` — override any of them
in your own CSS to retheme:

| Token | Purpose |
|---|---|
| `--bg` / `--surface` / `--text` / `--muted` / `--border` | palette |
| `--accent` / `--accent-ink` | primary action color + its contrast text |
| `--radius` | corner radius, used everywhere |
| `--sans` / `--display` / `--mono` | Raleway · Raleway · IBM Plex Mono |
| `--s1`…`--s5` | spacing scale |

## Plain HTML / non-Svelte use

The stylesheet has no Svelte dependency — `import '@dvoina/skeleton-ng/styles.css'`
works in any framework, or link `src/styles.css` directly in a `<head>`. Only
`ThemeToggle` requires Svelte; recreate its ~15 lines of logic in vanilla JS
or your framework of choice if you're not on Svelte.
