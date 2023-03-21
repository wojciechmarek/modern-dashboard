<script lang="ts">
  import { Layout } from '@employee-dashboard/web/views';

  import { theme } from '@employee-dashboard/web/utils';

  theme.subscribe((value) => {
    if (value === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  });
</script>

<Layout />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    margin: 0;
    padding: 0;
  }
</style>
