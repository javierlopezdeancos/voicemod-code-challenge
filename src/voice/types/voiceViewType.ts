import type { VoiceIconEnum } from "@/voice/enums/voiceIconEnum";
import type { VoiceTagEnum } from "@/voice/enums/voiceTagEnum";

export type VoiceViewType = {
  id: string;
  name: string;
  icon: VoiceIconEnum;
  tags: VoiceTagEnum[];
};
