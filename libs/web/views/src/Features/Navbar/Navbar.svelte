<script lang="ts">
  import { Icon, Button } from '@employee-dashboard/web/components';
  import {
    BarsThreeIcon,
    LogoImage,
    ChevronDownIcon,
  } from '@employee-dashboard/web/assets';
</script>

<nav
  class="h-16 bg-gray-200 dark:bg-gray-800 flex justify-between items-center px-3"
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
    <div class="h-10 w-fit">
      <Button class="hover:bg-gray-700 mx-3 flex justify-center items-center">
        <p class="text-gray-200">Manage</p>
        <Icon icon={ChevronDownIcon} class="h-6 w-6" />
      </Button>
    </div>
  </div>

  <ul class="flex justify-center gap-2">
    <li><a href="/">Dashboard</a></li>
    <li><a href="/employees">Employees</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
</nav>
