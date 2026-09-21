<script>
  import '../src/theme-toggle.js';
  import NavPopover from './components/NavPopover.svelte';

  const codeItems = [
    { href: '#grid', label: 'Grid' },
    { href: '#typography', label: 'Typography' },
    { href: '#buttons', label: 'Buttons' },
    { href: '#forms', label: 'Forms' },
    { href: '#lists', label: 'Lists' },
    { href: '#code', label: 'Code' },
    { href: '#tables', label: 'Tables' },
    { href: '#queries', label: 'Queries' },
    { href: '#utilities', label: 'Utilities' }
  ];

  const moreItems = [
    { href: '#tokens', label: 'Token theme' },
    { href: 'https://github.com/dhg/Skeleton', label: 'Original Skeleton' },
    { href: 'https://github.com/dvoina/skeleton-ng', label: 'skeleton-ng' }
  ];
</script>

<svelte:head>
  <title>Skeleton Modern — getskeleton.com rewrite demo</title>
  <meta
    name="description"
    content="A demo rewrite of getskeleton.com using skeleton-ng's modern grid, tokens, and dark mode."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../src/styles.css" />
</svelte:head>

<main class="wrap">
  <theme-toggle></theme-toggle>
  <section class="header" id="intro">
    <p class="eyebrow kicker">Skeleton NG • 2026 demo</p>
    <h1>Rewriting getskeleton.com with a modern Skeleton</h1>
    <p class="lead">
      This is the same “small CSS starter kit” pitch, rebuilt with CSS Grid, fluid type via
      <code>clamp()</code>, custom-property tokens, and dark mode that respects
      <code>prefers-color-scheme</code> with an override toggle.
    </p>

    <div class="row install">
      <button class="button button-primary">Get started</button>
      <button class="button">View source</button>
      <button class="button button-ghost">See old Skeleton site</button>
    </div>
  </section>

  <div class="navbar-spacer"></div>
  <nav class="navbar" aria-label="Primary">
    <ul class="navbar-list">
      <li class="navbar-item"><a class="navbar-link" href="#intro">Intro</a></li>
      <NavPopover label="Code" items={codeItems} />
      <li class="navbar-item"><a class="navbar-link" href="#examples">Examples</a></li>
      <NavPopover label="More" items={moreItems} />
    </ul>
  </nav>

  <section id="grid">
    <h2>Grid</h2>
    <p>
      Like the original, this uses a 12-column layout. Unlike floats, all sizing here is native
      grid with semantic span classes.
    </p>
    <div class="grid mini-grid">
      <div class="col-12">.col-12</div>
      <div class="col-8">.col-8</div>
      <div class="col-4">.col-4</div>
      <div class="col-6">.col-6</div>
      <div class="col-6">.col-6</div>
      <div class="col-4">.col-4</div>
      <div class="col-4">.col-4</div>
      <div class="col-4">.col-4</div>
    </div>
  </section>

  <section id="typography">
    <h2>Typography</h2>
    <p>
      Type is still intentionally minimal: readable defaults, restrained heading scale, and
      sensible spacing. The main font stack keeps Raleway and adds a mono family for snippets.
    </p>

    <div class="grid hero-grid">
      <div class="col-6">
        <h3>Headings</h3>
        <h1>Heading h1</h1>
        <h2>Heading h2</h2>
        <h3>Heading h3</h3>
      </div>
      <div class="col-6">
        <h3>Text styles</h3>
        <p>
          Anchors, <a href="#forms">forms</a>, <strong>strong</strong>, <em>emphasis</em>, and
          inline <code>code</code> are all styled out of the box.
        </p>
        <pre><code>.some-class {{
  background: var(--surface);
  border: 1px solid var(--border);
}}</code></pre>
      </div>
    </div>
  </section>

  <section id="buttons">
    <h2>Buttons</h2>
    <p>
      Primary, default, and ghost buttons are included to cover common actions without writing
      custom component styles on day one.
    </p>
    <div class="row">
      <button class="button button-primary">Primary action</button>
      <button class="button">Default button</button>
      <button class="button button-ghost">Ghost button</button>
    </div>
  </section>

  <section id="forms">
    <h2>Forms</h2>
    <p>
      Inputs, selects, and textareas share the same spacing and focus treatment, so basic forms
      look coherent by default.
    </p>
    <form>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div>
        <label for="topic">Topic</label>
        <select id="topic">
          <option>General</option>
          <option>Docs</option>
          <option>Examples</option>
        </select>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" rows="4" placeholder="Tell us what you're building..."></textarea>
      </div>
      <div class="row">
        <button class="button button-primary" type="submit">Submit</button>
        <button class="button" type="reset">Reset</button>
      </div>
    </form>
  </section>

  <section id="lists">
    <h2>Lists</h2>
    <div class="grid notes-grid">
      <div class="col-6">
        <h3>Unordered</h3>
        <ul>
          <li>Small-project friendly defaults</li>
          <li>Lightweight visual language</li>
          <li>Dark mode and tokens built in</li>
        </ul>
      </div>
      <div class="col-6">
        <h3>Ordered</h3>
        <ol>
          <li>Install package</li>
          <li>Import stylesheet</li>
          <li>Compose with classes</li>
        </ol>
      </div>
    </div>
  </section>

  <section id="code">
    <h2>Code</h2>
    <p>
      Inline <code>&lt;code&gt;</code> and block <code>&lt;pre&gt;&lt;code&gt;</code> snippets are
      kept intentionally simple.
    </p>
    <pre><code>.button-primary {{
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
}}</code></pre>
  </section>

  <section id="tables">
    <h2>Tables</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Lines</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Grid</td>
          <td>Layout</td>
          <td>~30</td>
        </tr>
        <tr>
          <td>Buttons</td>
          <td>Components</td>
          <td>~25</td>
        </tr>
        <tr>
          <td>Forms</td>
          <td>Elements</td>
          <td>~35</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="queries">
    <h2>Queries</h2>
    <pre><code>/* Mobile-first enhancements */
@media (min-width: 36rem) {{}}
@media (min-width: 48rem) {{}}
@media (min-width: 64rem) {{}}
</code></pre>
  </section>

  <section id="utilities">
    <h2>Utilities</h2>
    <p>
      Most utility needs are covered by tokenized primitives, but helper classes can be added in
      consumer apps where needed.
    </p>
  </section>

  <section id="tokens">
    <h2>Token-driven theme</h2>
    <p>
      Palette, spacing, fonts, and radius are all set by CSS custom properties. Override a few
      tokens and the whole system updates.
    </p>
    <table class="tokens">
      <tbody>
        <tr>
          <td>--bg / --surface / --text / --muted / --border</td>
          <td>Global palette and contrast</td>
        </tr>
        <tr>
          <td>--accent / --accent-ink</td>
          <td>Primary actions and selection</td>
        </tr>
        <tr>
          <td>--s1 ... --s5</td>
          <td>Spacing rhythm</td>
        </tr>
        <tr>
          <td>--sans / --display / --mono</td>
          <td>Typography families</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="examples">
    <h2>Examples</h2>
    <p>
      This page itself is the demo: a modernized rewrite of getskeleton.com using the same
      minimalist philosophy.
    </p>
  </section>
</main>

<style>
  .navbar-spacer {
    height: var(--s4);
  }

  .navbar {
    position: sticky;
    top: 0;
    z-index: 9;
    margin-inline: calc(var(--s3) * -1);
    padding-inline: var(--s3);
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(8px);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .navbar-list,
  .popover-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navbar-list {
    display: flex;
    gap: var(--s2);
    align-items: center;
    min-height: var(--s4);
  }

  :global(.navbar-item) {
    position: relative;
  }

  :global(.navbar-link) {
    color: var(--muted);
    text-decoration: none;
    font-family: var(--sans);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 0.35rem 0.5rem;
    transition:
      background-color 0.15s ease,
      color 0.15s ease,
      box-shadow 0.15s ease;
  }

  :global(.navbar-link:hover),
  :global(.navbar-link[aria-expanded='true']) {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 14%, var(--surface));
    box-shadow: inset 0 -2px 0 var(--accent);
  }

  :global(.popover) {
    position: absolute;
    top: calc(100% + 0.55rem);
    left: 0;
    min-width: 11rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0.5rem;
    display: none;
  }

  :global(.popover.open) {
    display: block;
  }

  :global(.popover-link) {
    display: block;
    color: var(--muted);
    text-decoration: none;
    font-family: var(--sans);
    font-size: 0.76rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.45rem 0.5rem;
    border-radius: 4px;
  }

  :global(.popover-link:hover) {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, var(--surface));
    box-shadow: inset 2px 0 0 var(--accent);
  }

  @media (max-width: 36rem) {
    .navbar-spacer {
      height: var(--s2);
    }

    .navbar {
      position: static;
      margin-inline: 0;
      padding-inline: 0;
      border: none;
      background: transparent;
      backdrop-filter: none;
    }

    .navbar-list {
      flex-wrap: wrap;
      gap: var(--s1) var(--s2);
    }
  }

  .hero-grid > div,
  .notes-grid > div {
    background: transparent;
    border: none;
    padding: 0;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  .install {
    margin-top: var(--s3);
  }

  .kicker {
    margin-bottom: var(--s1);
  }

  .mini-grid > div {
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: var(--s2);
  }

  th,
  td {
    text-align: left;
    padding: 0.7rem;
    border-bottom: 1px solid var(--border);
  }

  th {
    color: var(--muted);
    font-weight: 600;
  }
</style>
