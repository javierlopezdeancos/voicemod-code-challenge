<script setup lang="ts">
import { ref, onMounted } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import VoicesListComponent from "@/voice/components/VoicesListComponent.vue";
import SortVoicesSelectorComponent from "@/voice/components/SortVoicesSelectorComponent.vue";
import FilterByTagVoicesSelectorComponent from "../components/FilterByTagVoicesSelectorComponent.vue";
import RandomVoiceButtonComponent from "@/voice/components/RandomVoiceButtonComponent.vue";
import { useVoicesStore } from "@/voice/stores/voicesStore";
import { getVoicesQuery } from "@/voice/queries/getVoicesQuery";
import { VoiceSortVariantEnum } from "@/voice/enums/sortVoiceVariantEnum";
import type { SortVoicesSelectorPayloadType } from "@/voice/components/SortVoicesSelectorComponent.vue";
import type { FilterVoicesSelectorPayloadType } from "@/voice/components/FilterByTagVoicesSelectorComponent.vue";
import type { RandomVoiceButtonPayloadType } from "@/voice/components/RandomVoiceButtonComponent.vue";
import type { VoiceViewType } from "@/voice/types/voiceViewType";
import type { VoiceTagEnum } from "../enums/voiceTagEnum";

const voicesStore = useVoicesStore();

let proVoices = ref([] as VoiceViewType[]);
let randomVoice = ref();

onMounted(async () => {
  const voices = await getVoicesQuery();
  proVoices.value = voices;
  voicesStore.setVoices(voices);
});

const sortVoices = (payload: SortVoicesSelectorPayloadType) => {
  if (payload.type === VoiceSortVariantEnum.asc) {
    proVoices.value = voicesStore.sortVoicesAsc();
    return;
  }

  if (payload.type === VoiceSortVariantEnum.desc) {
    proVoices.value = voicesStore.sortVoicesDesc();
    return;
  }

  proVoices.value = voicesStore.voices;
};

const filterVoicesByTag = (payload: FilterVoicesSelectorPayloadType) => {
  if (payload.tag === "") {
    proVoices.value = voicesStore.voices;
    return;
  }

  proVoices.value = voicesStore.filterBy(payload.tag as VoiceTagEnum);
};

const setRandomVoice = (payload: RandomVoiceButtonPayloadType) => {
  if (!payload.active) {
    randomVoice.value = undefined;
    return;
  }

  randomVoice.value = voicesStore.randomVoice();
};
</script>

<template>
  <HeaderComponent>
    <template v-slot:sort-voices>
      <SortVoicesSelectorComponent @sort="sortVoices" />
    </template>
    <template v-slot:filter-voices>
      <FilterByTagVoicesSelectorComponent @filterByTag="filterVoicesByTag" />
    </template>
    <template v-slot:random-voice>
      <RandomVoiceButtonComponent @random="setRandomVoice" />
    </template>
  </HeaderComponent>
  <main class="main">
    <VoicesListComponent
      title="pro voices"
      :voices="proVoices"
      :randomVoice="randomVoice"
    />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
}
</style>
