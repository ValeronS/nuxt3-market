<script setup lang="ts">
import { AppUrls } from '~/utils/constants'
</script>

<template>
  <footer class="footer">
    <span class="text-[15px] leading-[24px] font-medium">© Annonce 2023</span>

    <router-link :to="AppUrls.documents.path" class="footer__link">
      Документы
    </router-link>

    <router-link :to="AppUrls.about.path" class="footer__link">
      О компании
    </router-link>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply flex gap-[20px] mt-[73px] pt-[24px] px-[32px] pb-[50px] bg-bg-light border-t border-bg-grey;

  &__link {
    @apply text-bg-grey-dark;
  }
}
</style>
