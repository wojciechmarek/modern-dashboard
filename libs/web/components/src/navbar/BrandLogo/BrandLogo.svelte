<script lang="ts">
  import {
    LogoLightImage,
    LogoDarkImage,
  } from '@employee-dashboard/web/assets';
</script>

<div class="flex justify-center items-center gap-3 h-full">
  <img src={LogoLightImage} alt="logo" class="h-10 dark:hidden" />
  <img src={LogoDarkImage} alt="logo" class="h-10 hidden dark:block" />
</div>
