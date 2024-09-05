<script setup lang="ts">
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'
import type { LngLat } from '@yandex/ymaps3-types'
import MarkerMapIcon from 'assets/icon/MarkerMapIcon.vue'

type Props = {
  latitude: number
  longitude: number
  width: string
  height: string
}
withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
})
</script>

<template>
  <yandex-map
    :settings="{
      location: {
        center: [latitude, longitude],
        zoom: 13, // степень отдаления карты
      },
    }"
    :width="width"
    :height="height"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker
      :settings="{ coordinates: [latitude, longitude] as LngLat }"
      position="top-center left-center"
    >
      <MarkerMapIcon />
    </yandex-map-marker>
  </yandex-map>
</template>

<style scoped lang="scss"></style>
