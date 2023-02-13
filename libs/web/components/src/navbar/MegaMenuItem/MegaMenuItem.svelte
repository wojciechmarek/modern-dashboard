<script lang="ts">
  import { Link } from 'svelte-routing';

  export let image: string;
  export let title: string;
  export let subtitle: string;
  export let url: string;
</script>

<li class="h-20 w-full hover:bg-slate-200">
  <Link class="w-full h-full flex items-center px-8" to={url}>
    <img src={image} alt="avatar" class="h-12 w-12 rounded-lg" />
    <div class="text-gray-800 ml-6">
      <h3 class="font-bold">{title}</h3>
      <p class="text-sm text-gray-500">{subtitle}</p>
    </div>
  </Link>
</li>
