import React from 'react';

import { TestableComponent } from '../../types/controls';

export type LozengeAppearance = 'default' | 'inprogress' | 'moved' | 'new' | 'removed' | 'success';

export type LozengeProps = {
  /**
   * Defines the appearance of the lozenge.
   */
  appearance: LozengeAppearance;
  /**
   * Indicates whether the text in the lozenge should be bold.
   */
  isBold?: boolean;
  /**
   * The content of the lozenge that will be displayed.
   */
  children: React.ReactNode;
  /**
   * Maximum width of the lozenge.
   * Can be specified as a string (e.g., '100px') or a number (e.g., 100).
   */
  maxWidth?: string | number;
} & TestableComponent;

export type StyledLozengeProps = Omit<LozengeProps, 'children'>;

export type StyledLozengeTextProps = {
  maxWidth: string | number;
} & TestableComponent;
