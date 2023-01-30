<script lang="ts">
	import Tailwind from "./Tailwind.svelte";
</script>

<Tailwind />

<style lang="postcss">
  :global {
    body {
      @apply h-full min-h-full bg-gray-800;
    }
    h1 {
      @apply bg-pink-500 text-gray-100 font-bold text-xl rounded-lg px-5;
    }
  }
  
  .example {
	@apply mt-4 text-red-500 text-5xl font-bold;
  }
</style>

<main>
	<h1>Hello {name} from the <span class="text-7xl">Svelte</span> Tailwind Nx template!</h1>
	<div>
		<span class="example">Example goes here</span>
	</div>
</main>

