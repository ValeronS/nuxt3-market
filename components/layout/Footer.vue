<script setup lang="ts">
import { AppUrls } from '~/utils/constants'
import FlagRuIcon from 'assets/icon/FlagRuIcon.vue'
</script>

<template>
  <footer class="footer">
    <span class="text-[15px] leading-[24px] font-medium">© Annonce 2023</span>

    <NuxtLink
      id="DocumentsLink"
      :to="AppUrls.documents.path"
      class="footer__link"
    >
      Документы
    </NuxtLink>

    <NuxtLink id="AboutLink" :to="AppUrls.about.path" class="footer__link">
      О компании
    </NuxtLink>

    <NuxtLink id="ForSellersLink" to="" class="footer__link block sm:hidden">
      Продавцам
    </NuxtLink>

    <NuxtLink id="ForClientsLink" to="" class="footer__link block sm:hidden">
      Покупателям
    </NuxtLink>

    <NuxtLink
      id="MakeAdvertisementLink"
      to=""
      class="footer__link block sm:hidden"
    >
      Разместить объявление
    </NuxtLink>

    <div class="flex sm:hidden gap-[8px]">
      <FlagRuIcon />
      <span>Русский</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply flex flex-col sm:flex-row gap-[20px] mt-[48px] sm:mt-[73px] pt-[24px] px-[32px] pb-[50px] bg-bg-light border-t border-bg-grey;

  &__link {
    @apply text-bg-grey-dark;
  }
}
</style>
