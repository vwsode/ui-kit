import { IconVariant } from '@/icons';

import { SectionMessageAppearance } from './types';

export enum SectionMessageSelector {
  ROOT = 'SectionMessage',
  ACTIONS = 'SectionMessageActions',
  TITLE = 'SectionMessageTitle',
  CONTENT = 'SectionMessageContent',
}

export const SectionMessageIconMap: Record<SectionMessageAppearance, IconVariant> = {
  information: 'info',
  success: 'check-circle',
  warning: 'warning',
  error: 'error',
  discovery: 'question-circle',
};
