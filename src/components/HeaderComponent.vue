<script setup lang="ts">
import LogoComponent from "@/components/LogoComponent.vue";
</script>

<template>
  <header class="header">
    <section class="search">
      <LogoComponent height="1rem" />
    </section>
    <section class="filters">
      <slot name="sort-voices"></slot>
      <slot name="filter-voices"></slot>
      <slot name="random-voice"></slot>
    </section>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
}
</style>
