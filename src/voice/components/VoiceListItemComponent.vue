<script setup lang="ts">
import { computed } from "vue";
import type { VoiceViewType } from "@/voice/types/voiceViewType";

const props = defineProps<{
  voice: VoiceViewType;
}>();

const voiceAlt = computed(() => `${props.voice.name} image`);
const voiceIconPath = computed(() => `src/assets/${props.voice.icon}`);
</script>

<template>
  <figure class="wrapper">
    <img class="image" :src="voiceIconPath" :alt="voiceAlt" />
    <figcaption class="name">{{ voice.name }}</figcaption>
  </figure>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 0;
}

.image {
  background-color: var(--color-secondary);
  border-radius: 900%;
}

.name {
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.8rem;
}
</style>
