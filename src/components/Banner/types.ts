import React from 'react';

import { TestableComponent } from '../../types/controls';

export type BannerAppearance = 'warning' | 'error' | 'announcement';

export type BannerProps = {
  /**
   * Defines the appearance of the banner.
   */
  appearance: BannerAppearance;
  /**
   * Child elements that will be displayed inside the banner.
   */
  children: React.ReactNode;
  /**
   * An icon that will be displayed in the banner.
   */
  icon?: React.ReactNode;
} & TestableComponent;

export type StyledBannerProps = {
  appearance: BannerAppearance;
} & TestableComponent;
