# skeleton-ng

A 2026 rebuild of the [Skeleton](http://getskeleton.com) CSS framework: CSS Grid
instead of floats, `clamp()` instead of fixed breakpoints, custom-property
tokens instead of hardcoded values, and real dark mode via
`prefers-color-scheme` plus a manual toggle. Same restraint, none of the 2014
plumbing.

## Install

Published via GitHub Container Registry (GHCR):

```bash
ghcr.io/dvoina/skeleton-ng
```

For local development, you can still copy this folder into your project
(e.g. `src/lib/skeleton-ng`) or install it as a local/git dependency.

## Publishing

This repo includes a GitHub Action at
`.github/workflows/publish-github-packages.yml` that installs dependencies,
lints CSS, performs a package build check, and runs on pushes/PRs. Publishing
to GHCR happens only on `v*` tags (or manual dispatch).

For tag releases, the workflow uses the tag version (for example `v0.1.1` →
`0.1.1`) for `package.json` before publishing. For manual dispatch, provide a
semver `version` input.

## Usage (SvelteKit and plain HTML)

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

**2. Register and use the theme toggle web component**:

```svelte
<script>
  import '@dvoina/skeleton-ng/theme-toggle.js';
</script>

<theme-toggle></theme-toggle>
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
works in any framework, or link `src/styles.css` directly in a `<head>`.
The theme toggle is also framework-agnostic:

```html
<script type="module">
  import '@dvoina/skeleton-ng/theme-toggle.js';
</script>

<theme-toggle></theme-toggle>
```

## Demo: getskeleton.com rewrite

Two demo versions of the original `getskeleton.com` landing page rewrite live
in this repo:

- `demo/*.html` (static HTML demo)
- `demo/*.svelte` (Svelte demo, with componentized popover logic in
  `demo/components/NavPopover.svelte`)

Open the HTML file directly in a browser, or copy the Svelte file into your app
to preview the framework primitives (grid, type, buttons, forms, tokens, and
theme toggle) in one page.
