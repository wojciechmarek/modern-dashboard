<script lang="ts">
  import { Icon, Button } from '@employee-dashboard/web/components';
  import {
    BarsThreeIcon,
    LogoImage,
    ChevronDownIcon,
    UserImage,
  } from '@employee-dashboard/web/assets';

  let manageOpen: boolean;

  function toggle() {
    manageOpen = !manageOpen;
  }
</script>

<nav
  class="h-16 bg-gray-200 dark:bg-gray-800 flex justify-between items-center pl-3 pr-5 md:px-16"
>
  <div class="h-10 w-10 md:hidden">
    <Button class="hover:bg-gray-700">
      <Icon icon={BarsThreeIcon} />
    </Button>
  </div>

  <div
    class="hidden md:flex justify-center items-center h-10 gap-6 cursor-pointer"
  >
    <div class="flex justify-center items-center gap-3">
      <img src={LogoImage} alt="logo" class="h-8" />
      <p class="text-gray-200 uppercase text-2xl font-extrabold">MicroChip</p>
    </div>
    <div class="h-10 w-fit relative">
      <Button class="group mx-3 flex justify-center items-center">
        <p class="text-gray-200 group-hover:underline" on:click={toggle}>
          Manage
        </p>
        <Icon icon={ChevronDownIcon} class="group-hover:rotate-180 h-6 w-6" />
      </Button>
      {#if manageOpen}
        <dialog open class="h-40 w-72 bg-gray-700 absolute top-12">
          <ul>
            <li class="hover:bg-slate-500">
              <a href="/manage">Manage</a>
            </li>
            <li class="hover:bg-slate-500">
              <a href="/manage">Manage</a>
            </li>
            <li class="hover:bg-slate-500">
              <a href="/manage">Manage</a>
            </li>
            <li class="hover:bg-slate-500">
              <a href="/manage">Manage</a>
            </li>
            <li class="hover:bg-slate-500">
              <a href="/manage">Manage</a>
            </li>
          </ul>
        </dialog>
      {/if}
    </div>
  </div>

  <div class="flex justify-center items-center gap-4 cursor-pointer">
    <p class="text-gray-200 text-1xl font-bold">Steven</p>
    <img src={UserImage} alt="avatar" class="h-8 w-8 rounded-full" />
  </div>
</nav>
