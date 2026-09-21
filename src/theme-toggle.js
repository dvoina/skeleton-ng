const TEMPLATE = `
  <style>
    :host {
      position: fixed;
      top: calc(1rem + env(safe-area-inset-top, 0px));
      right: 1rem;
      z-index: 10;
    }

    button {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.5em 0.9em;
      font-family: var(--mono, monospace);
      font-size: 0.8rem;
      color: var(--text);
      cursor: pointer;
    }

    button:hover {
      border-color: var(--muted, var(--border));
    }
  </style>
  <button type="button" aria-label="Toggle color theme">☾ theme</button>
`;

const BaseHTMLElement = globalThis.HTMLElement ?? class {};

function readTheme() {
  try {
    return localStorage.getItem('theme') ?? '';
  } catch {
    return '';
  }
}

function writeTheme(value) {
  try {
    localStorage.setItem('theme', value);
  } catch {}
}

function applyTheme(value) {
  if (value) {
    document.documentElement.setAttribute('data-theme', value);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function nextTheme(value) {
  return value === 'dark' ? 'light' : value === 'light' ? '' : 'dark';
}

export class ThemeToggleElement extends BaseHTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = TEMPLATE;
    }
    const button = this.shadowRoot.querySelector('button');
    button?.removeEventListener('click', this.#handleClick);
    button?.addEventListener('click', this.#handleClick);

    this.#theme = readTheme();
    applyTheme(this.#theme);
  }

  disconnectedCallback() {
    this.shadowRoot?.querySelector('button')?.removeEventListener('click', this.#handleClick);
  }

  #theme = '';

  #handleClick = () => {
    this.#theme = nextTheme(this.#theme);
    applyTheme(this.#theme);
    writeTheme(this.#theme);
  };
}

export function defineThemeToggle() {
  if (typeof window === 'undefined' || !window.customElements) return;
  if (!window.customElements.get('theme-toggle')) {
    window.customElements.define('theme-toggle', ThemeToggleElement);
  }
}

defineThemeToggle();
