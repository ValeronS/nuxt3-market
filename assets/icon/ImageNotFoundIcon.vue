<script setup lang="ts">
type Props = {
  strokeColor?: string
  width?: number
  height?: number
}

withDefaults(defineProps<Props>(), {
  strokeColor: '#B6BBC6',
  width: 52,
  height: 52,
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M37.6514 0.945312H14.2189C6.06135 0.945312 0.945312 6.7249 0.945312 14.9041V36.9661C0.945312 45.1453 6.03969 50.9249 14.2189 50.9249H37.6378C45.8305 50.9249 50.9222 45.1453 50.9222 36.9661V14.9041C50.933 6.7249 45.8386 0.945312 37.6514 0.945312Z"
      :stroke="strokeColor"
      stroke-width="1.625"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.4835 17.2886C22.4835 20.0511 20.2465 22.2882 17.484 22.2882C14.7242 22.2882 12.4844 20.0511 12.4844 17.2886C12.4844 14.5261 14.7242 12.2891 17.484 12.2891C20.2437 12.2918 22.4808 14.5289 22.4835 17.2886Z"
      :stroke="strokeColor"
      stroke-width="1.625"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.9356 33.9929C48.4358 31.4199 43.6285 26.2227 38.4015 26.2227C33.1717 26.2227 30.1573 37.687 25.1279 37.687C20.0985 37.687 15.5296 32.5033 11.4996 35.8264C7.46958 39.1468 3.65625 45.9366 3.65625 45.9366"
      :stroke="strokeColor"
      stroke-width="1.625"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
