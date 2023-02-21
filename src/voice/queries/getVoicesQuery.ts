import type { VoiceViewType } from "@/voice/types/voiceViewType";

export const getVoicesQuery = async (): Promise<VoiceViewType[] | []> => {
  const voicesFetchResponse = await fetch("/voices.json");
  const voices = await voicesFetchResponse.json();

  if (!voices) {
    return [];
  }

  return voices;
};
