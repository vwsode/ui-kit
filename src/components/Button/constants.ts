import { SpinnerSize } from '../Spinner/types.ts';

import { ButtonSpacing } from './types.ts';

export enum ButtonSelector {
  BUTTON = 'Button',
}

export const ButtonIconSpacingMap: Record<ButtonSpacing, SpinnerSize> = {
  default: 'medium',
  compact: 'small',
  none: 'small',
};
