import { PropsWithClassName, TestableComponent } from '../types/controls';

export type IconVariant = 'checkrmark-circle' | 'error-circle' | 'warning';

export type IconSize = 16 | 20;

export type IconProps = {
  /**
   * The variant of the icon.
   */
  type: IconVariant;
  /**
   * The size of the icon.
   */
  size: IconSize;
  /**
   * The fill color of the icon.
   */
  fill?: string;
} & TestableComponent &
  PropsWithClassName;

export type IconKey = `${IconVariant}-${IconSize}`;
