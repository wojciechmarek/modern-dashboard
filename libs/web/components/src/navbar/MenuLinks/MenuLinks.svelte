<script lang="ts">
  import { MegaMenu } from '@employee-dashboard/web/components';
  import { UserImage } from '@employee-dashboard/web/assets';

  const links = [
    {
      image: UserImage,
      title: 'Log a time',
      subtitle: 'Log a time',
    },

    {
      image: UserImage,
      title: 'Log a time',
      subtitle: 'Log a time',
    },

    {
      image: UserImage,
      title: 'Log a time',
      subtitle: 'Log a time',
    },
  ];

  const menu = ['Employee', 'Projects', 'Clients', 'About'];
</script>

<ul class="flex justify-center items-center gap-3 h-full">
  {#each menu as item}
    <li class="h-full flex items-center rounded-lg group relative">
      <p
        class="mx-3 hover:no-underline text-gray-100 group-hover:text-gray-400"
      >
        {item}
      </p>
      <MegaMenu {links} />
    </li>
  {/each}
</ul>
