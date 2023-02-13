<script lang="ts">
  import { theme } from '@employee-dashboard/web/utils';
</script>

<div class="flex flex-col items-center bg-gray-900 h-full">
  <h1 class="text-5xl font-bold text-white mt-10">Dashboard</h1>
  <div class="mt-10 flex gap-10">
    <button
      on:click={() => {
        theme.set('light');
      }}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Light</button
    >
    <button
      on:click={() => {
        theme.set('dark');
      }}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Dark</button
    >
  </div>
</div>
