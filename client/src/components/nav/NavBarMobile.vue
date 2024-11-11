<script setup lang="ts">
import { ref } from 'vue'

const isMenu = ref(false)
const isOpen = ref(false)

function showMobileMenu() {
  isMenu.value = !isMenu.value
  isOpen.value = !isOpen.value
}
</script>

<template>
  <section class="mobile-nav">
    <div class="nav-hamburger-icon">
      <button
        type="button"
        @click="showMobileMenu"
        aria-label="Show mobile navigation"
      >
        <span :class="isOpen && 'top-span'"></span>
        <span :class="isOpen && 'hide'"></span>
        <span :class="isOpen && 'bottom-span'"></span>
      </button>
    </div>
    <div class="logo">
      <a href="/"> <h1>DropTrans</h1></a>
    </div>
  </section>
  <section class="menu" v-if="isMenu">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about-us">About us</a></li>
      <li><a href="#invest">Invest</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </section>
</template>
