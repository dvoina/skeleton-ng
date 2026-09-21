<script context="module">
  const registry = new Set();
</script>

<script>
  import { onMount } from 'svelte';

  export let label = '';
  export let items = [];

  let open = false;
  let rootElement;

  function close() {
    open = false;
  }

  function closeOthers() {
    registry.forEach((entry) => {
      if (entry !== close) entry();
    });
  }

  function toggle(event) {
    event.preventDefault();
    const shouldOpen = !open;
    closeOthers();
    open = shouldOpen;
  }

  function handleDocumentClick(event) {
    if (!rootElement?.contains(event.target)) close();
  }

  onMount(() => {
    registry.add(close);
    document.addEventListener('click', handleDocumentClick);
    return () => {
      registry.delete(close);
      document.removeEventListener('click', handleDocumentClick);
    };
  });
</script>

<li class="navbar-item" bind:this={rootElement}>
  <a class="navbar-link" href="#" aria-expanded={open} on:click={toggle}>
    {label}
  </a>
  <div class="popover" class:open>
    <ul class="popover-list">
      {#each items as item}
        <li>
          <a class="popover-link" href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</li>
