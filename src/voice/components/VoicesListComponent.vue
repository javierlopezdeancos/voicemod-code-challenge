<script setup lang="ts">
import VoiceListItemComponent from "./VoiceListItemComponent.vue";
import type { VoiceViewType } from "@/voice/types/voiceViewType";

const props = defineProps<{
  title?: string;
  voices?: VoiceViewType[];
  randomVoice?: VoiceViewType;
}>();
</script>

<template>
  <section v-if="randomVoice" class="container">
    <header class="header">
      <h3 class="title">random voice</h3>
      <hr class="divider" />
    </header>
    <div class="body">
      <VoiceListItemComponent :voice="randomVoice" />
    </div>
  </section>
  <section class="container">
    <header v-if="props?.title" class="header">
      <h3 class="title">{{ props.title }}</h3>
      <hr class="divider" />
    </header>
    <div v-if="props?.voices" class="body">
      <VoiceListItemComponent
        v-for="voice in voices"
        :key="voice.id"
        :voice="voice"
      />
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

.title {
  color: var(--color-primary);
  text-align: left;
  text-transform: uppercase;
  flex: 1;
}

.divider {
  flex: 10;
  border-color: var(--color-primary);
  border-width: 0.5px;
}

.body {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
}
</style>
