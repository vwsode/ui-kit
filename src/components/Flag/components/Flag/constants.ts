import { IconVariant } from '@/icons';

import type { FlagAppearance } from './types';

export enum FlagSelector {
  FLAG = 'Flag',
  ACTION = 'FlagAction',
  ACTIONS = 'FlagActions',
  CONTENT = 'FlagContent',
}

export const IconMap: Record<FlagAppearance, IconVariant> = {
  error: 'error',
  info: 'info',
  normal: 'info',
  success: 'check-circle',
  warning: 'warning',
};
