<script setup lang="ts">
import { computed } from "vue";
import { VoiceTagEnum } from "@/voice/enums/voiceTagEnum";

export type FilterVoicesSelectorPayloadType = {
  tag: VoiceTagEnum | "";
};

const emit = defineEmits<{
  (e: "filterByTag", payload: FilterVoicesSelectorPayloadType): void;
}>();

let selected = "";

const optionCase = (option: string): string => {
  return option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
};

const options = computed(() =>
  Object.keys(VoiceTagEnum).map((option) => optionCase(option))
);

const triggerFilterByTag = () => {
  emit("filterByTag", { tag: selected.toLowerCase() as VoiceTagEnum });
};
</script>

<template>
  <select v-model="selected" @change="triggerFilterByTag">
    <option value="">No Filter</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>
