<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import NavBarDesktop from '../nav/NavBarDesktop.vue'
import NavBarMobile from '../nav/NavBarMobile.vue'

const navMobile = ref(true)

let resizeTimeout: ReturnType<typeof setTimeout> | null = null

window.addEventListener('resize', resizeThrottler, false)

function updateScreenSize() {
  const width = document.documentElement.clientWidth

  navMobile.value = width <= 1023
}

function resizeThrottler() {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null
      updateScreenSize()
    }, 66)
  }
}

onMounted(() => {
  resizeThrottler()
})

onUnmounted(() => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
  window.removeEventListener('resize', resizeThrottler, false)
})
</script>

<template>
  <NavBarMobile v-if="navMobile" />
  <NavBarDesktop v-else />
</template>
