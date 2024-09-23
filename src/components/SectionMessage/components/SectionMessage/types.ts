import { PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '@/icons';

import type { TestableComponent } from '@/types/controls';

export type SectionMessageAppearance = 'information' | 'success' | 'warning' | 'error' | 'discovery';

export type SectionMessageProps = {
  /**
   *
   */
  appearance?: SectionMessageAppearance;

  /**
   *
   */
  title: string;

  /**
   *
   */
  icon: IconVariant | ReactNode;
} & PropsWithChildren &
  TestableComponent;

export type SectionMessageStyledProps = {
  appearance: SectionMessageAppearance;
} & TestableComponent;
