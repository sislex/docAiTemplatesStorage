import {
  buildTemplateStorageAppSupportPrompt,
  TEMPLATE_STORAGE_APP_SUPPORT_SKILL_ID,
} from './templateStorageAppSupport.js';

interface SkillDefinition {
  id: string;
  prompt: string;
}

const DEFAULT_SKILL_ID = TEMPLATE_STORAGE_APP_SUPPORT_SKILL_ID;
const DEFAULT_SKILL: SkillDefinition = {
  id: TEMPLATE_STORAGE_APP_SUPPORT_SKILL_ID,
  prompt: buildTemplateStorageAppSupportPrompt(),
};

const SKILLS: Record<string, SkillDefinition> = {
  [TEMPLATE_STORAGE_APP_SUPPORT_SKILL_ID]: DEFAULT_SKILL,
};

export function resolveSkillDefinition(skillId: string | undefined): SkillDefinition {
  const requested = skillId?.trim();
  if (requested && SKILLS[requested]) {
    return SKILLS[requested];
  }

  return DEFAULT_SKILL;
}

export { DEFAULT_SKILL_ID };
