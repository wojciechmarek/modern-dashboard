<script lang="ts">
  import { MegaMenuItem } from '../MegaMenuItem';

  interface MegaMenuProps {
    image: string;
    title: string;
    subtitle: string;
    url: string;
  }

  export let links: MegaMenuProps[];
</script>

<div
  class={`${
    $$props.class || ''
  } h-fit w-96 absolute top-16 -left-5 hidden group-hover:flex bg-white dark:bg-slate-700 rounded-md`}
>
  <ul class="w-full">
    {#each links as link}
      <MegaMenuItem {...link} />
    {/each}
  </ul>
</div>
