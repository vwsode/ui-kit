import { PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '@/icons';

import type { TestableComponent } from '@/types/controls';

export type SectionMessageAppearance = 'information' | 'success' | 'warning' | 'error' | 'discovery';

export type SectionMessageProps = {
  /**
   * Defines the visual style of the section message.
   */
  appearance?: SectionMessageAppearance;

  /**
   * The title of the section message, displayed prominently.
   */
  title: string;

  /**
   * An icon to visually represent the message.
   */
  icon?: IconVariant | ReactNode;
} & PropsWithChildren &
  TestableComponent;

export type SectionMessageStyledProps = {
  appearance: SectionMessageAppearance;
} & TestableComponent;
