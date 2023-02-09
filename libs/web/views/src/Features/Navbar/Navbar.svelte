<script lang="ts">
  import { Icon, Button } from '@employee-dashboard/web/components';
  import {
    BarsThreeIcon,
    LogoImage,
    UserImage,
  } from '@employee-dashboard/web/assets';

  const menu = ['Employee', 'Projects', 'Clients', 'About'];
  const links = ['Find a job', 'Post a job', 'About us', 'Contact us'];
</script>

<nav
  class="h-20 bg-gray-200 dark:bg-gray-800 flex justify-between items-center pl-3 pr-5 md:px-16"
>
  <div class="h-10 w-10 md:hidden">
    <Button class="hover:bg-gray-700">
      <Icon icon={BarsThreeIcon} />
    </Button>
  </div>

  <div
    class="hidden md:flex justify-center items-center gap-10 cursor-pointer h-4/6"
  >
    <div class="flex justify-center items-center gap-3 h-full">
      <img src={LogoImage} alt="logo" class="h-8" />
      <p class="text-gray-200 uppercase text-2xl font-extrabold">MicroChip</p>
    </div>

    <ul class="flex justify-center items-center gap-3 h-full">
      {#each menu as item}
        <li class=" h-full flex items-center rounded-lg group relative">
          <p
            class="mx-3 hover:no-underline text-gray-100 group-hover:text-gray-400"
          >
            {item}
          </p>
          <div
            class="h-fit w-96 absolute top-14 hidden group-hover:flex bg-white rounded-md"
          >
            <ul class="w-full">
              {#each links as item}
                <li
                  class="h-20 w-full flex items-center px-8 hover:bg-slate-200"
                >
                  <img
                    src={UserImage}
                    alt="avatar"
                    class="h-12 w-12 rounded-lg"
                  />
                  <div class="text-gray-800 ml-6">
                    <h3 class="font-bold">{item}</h3>
                    <p class="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  </div>

  <div class="flex justify-center items-center gap-4 cursor-pointer">
    <p class="text-gray-200 text-1xl font-bold">Steven</p>
    <img src={UserImage} alt="avatar" class="h-8 w-8 rounded-full" />
  </div>
</nav>
