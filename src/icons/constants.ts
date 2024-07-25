import { Icon16 as CheckMarkIcon16, Icon20 as CheckMarkIcon20 } from './checkmark-circle';
import { Icon16 as ErrorCircleIcon16, Icon20 as ErrorCircleIcon20 } from './error-circle';
import { Icon16 as WarningIcon16, Icon20 as WarningIcon20 } from './warning';

import type { IconKey } from './types';

export const iconComponentsMap: Record<IconKey, string> = {
  'checkrmark-circle-16': CheckMarkIcon16,
  'checkrmark-circle-20': CheckMarkIcon20,
  'error-circle-16': ErrorCircleIcon16,
  'error-circle-20': ErrorCircleIcon20,
  'warning-16': WarningIcon16,
  'warning-20': WarningIcon20,
};
