<script setup lang="ts">
import { ref } from 'vue'

const isMenu = ref(false)
</script>

<template>
  <section class="mobile-nav">
    <div class="nav-hamburger-icon">
      <button
        type="button"
        @click="() => (isMenu = !isMenu)"
        aria-label="Show mobile navigation"
      >
        <span></span>
        <span></span>
        <span></span>
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
