<script lang="ts">
  import {
    MenuLinks,
    BrandLogo,
    Hamburger,
    UserProfile,
  } from '@employee-dashboard/web/components';
</script>

<nav
  class="h-20 bg-gray-200 dark:bg-gray-800 flex justify-between items-center pl-3 pr-5 md:px-6 lg:px-10"
>
  <Hamburger />
  <div
    class="hidden md:flex justify-center items-center md:gap-5 lg:gap-10 cursor-pointer h-5/6"
  >
    <BrandLogo />
    <MenuLinks />
  </div>

  <UserProfile />
</nav>
