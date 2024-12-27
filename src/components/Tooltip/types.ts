import { ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export type TooltipProps = {
  content: ReactNode | string;
  placement?: TooltipPlacement;
  referenceElement: HTMLElement | null;
};
