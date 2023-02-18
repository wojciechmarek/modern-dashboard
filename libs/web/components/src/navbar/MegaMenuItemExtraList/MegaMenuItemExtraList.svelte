<script lang="ts">
  import { Link } from 'svelte-routing';
  import { MegaMenuItem } from '../MegaMenuListItem';

  interface MegaMenuProps {
    image: string;
    title: string;
    subtitle: string;
    url: string;
  }

  export let links: MegaMenuProps[];
  export let extraLinks: MegaMenuProps[];
</script>

<div
  class={`${
    $$props.class || ''
  } h-fit w-auto absolute top-16 -left-5 hidden group-hover:flex bg-white dark:bg-slate-700 rounded-md`}
>
  <div class="flex flex-row">
    <ul class="w-96">
      {#each links as link}
        <MegaMenuItem {...link} />
      {/each}
    </ul>
    <ul
      class="w-48 flex flex-col pl-3 bg-slate-100 dark:bg-slate-600 rounded-r-md"
    >
      <p class="mt-5 font-bold mb-2 text-gray-800 dark:text-slate-200">
        Extra links:
      </p>
      {#each extraLinks as link}
        <Link
          to={link.url}
          class="no-underline text-gray-800 dark:text-slate-200"
          >{link.title}</Link
        >
      {/each}
    </ul>
  </div>
</div>
