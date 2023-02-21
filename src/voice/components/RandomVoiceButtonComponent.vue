<script setup lang="ts">
import { ref } from "vue";

export type RandomVoiceButtonPayloadType = {
  active: boolean;
};

const active = ref(false);

const emit = defineEmits<{
  (e: "random", payload: RandomVoiceButtonPayloadType): void;
}>();

const triggerRandom = () => {
  active.value = !active.value;
  emit("random", { active: active.value });
};
</script>

<template>
  <button class="button" :class="{ active: active }" @click="triggerRandom">
    <img
      class="image"
      src="src/assets/button-random.svg"
      alt="random voice button"
    />
  </button>
</template>

<style scoped>
.button {
  background: transparent;
  border: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.button.active {
  background: var(--color-selected);
  border-radius: 100%;
}
</style>
