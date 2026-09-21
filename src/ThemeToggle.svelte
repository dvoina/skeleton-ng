<script>
  import { onMount } from 'svelte';

  let theme = '';

  onMount(() => {
    try {
      theme = localStorage.getItem('theme') ?? '';
    } catch (e) {
      /* storage unavailable, fall back to prefers-color-scheme */
    }
  });

  $: if (typeof document !== 'undefined') {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }

  function toggle() {
    theme = theme === 'dark' ? 'light' : theme === 'light' ? '' : 'dark';
  }
</script>

<button class="theme-toggle" on:click={toggle} aria-label="Toggle color theme">
  ☾ theme
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: calc(1rem + env(safe-area-inset-top, 0px));
    right: 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.5em 0.9em;
    font-family: var(--mono, monospace);
    font-size: 0.8rem;
    color: var(--text);
    cursor: pointer;
    z-index: 10;
  }
  .theme-toggle:hover {
    border-color: var(--muted, var(--border));
  }
</style>
