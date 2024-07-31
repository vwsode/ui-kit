import { TestableComponent } from '../../types/controls';

export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export enum SpinnerSizeMap {
  xsmall = 8,
  small = 16,
  medium = 24,
  large = 48,
  xlarge = 96,
}

export type SpinnerProps = {
  /**
   *
   */
  size?: SpinnerSize;
} & TestableComponent;
