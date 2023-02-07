<script lang="ts">
  export let icon;
</script>

<div
  class={`${
    $$props.class || ''
  } h-full w-full flex justify-center items-center`}
>
  <div
    class="h-[calc(100%*0.618)] w-[calc(100%*0.618)] text-gray-800 dark:text-slate-100"
  >
    <svelte:component this={icon} />
  </div>
</div>
