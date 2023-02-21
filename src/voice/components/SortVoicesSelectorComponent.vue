<script setup lang="ts">
import { VoiceSortVariantEnum } from "@/voice/enums/sortVoiceVariantEnum";

export type SortVoicesSelectorPayloadType = {
  type: VoiceSortVariantEnum | "";
};

const emit = defineEmits<{
  (e: "sort", payload: SortVoicesSelectorPayloadType): void;
}>();

let selected = "";

const triggerSort = () => {
  emit("sort", { type: selected as VoiceSortVariantEnum });
};
</script>

<template>
  <select v-model="selected" @change="triggerSort">
    <option value="">No Order</option>
    <option :value="VoiceSortVariantEnum.asc">Ascending Order</option>
    <option :value="VoiceSortVariantEnum.desc">Descending Order</option>
  </select>
</template>
