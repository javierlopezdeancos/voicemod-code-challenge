<script setup lang="ts"></script>

<template>
  <div class="container"><slot></slot></div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: calc(100vw - (15rem * 2));
  min-height: calc(100vh - (2rem * 2));
  margin: 0;
  padding: 2rem 15rem;
  text-align: center;
}
</style>
