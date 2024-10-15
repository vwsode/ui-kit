import { PropsWithClassName, TestableComponent } from '../types/controls';

export type IconVariant =
  | 'checkrmark-circle'
  | 'error-circle'
  | 'warning'
  | 'spinner'
  | 'editor-close'
  | 'editor-done'
  | 'more'
  | 'chevron-left'
  | 'chevron-right'
  | 'info'
  | 'check-circle'
  | 'error'
  | 'question-circle'
  | 'chevron-down'
  | 'backlog'
  | 'bitbucket-branches';

export type IconSize = 8 | 16 | 20 | 24 | 32 | 48 | 96;

export type IconBaseProps = {
  /**
   * The size of the icon.
   */
  size: IconSize;
};

export type IconProps = {
  /**
   * The variant of the icon.
   */
  type: IconVariant;
  /**
   * The fill color of the icon.
   */
  fill?: string;
} & TestableComponent &
  PropsWithClassName &
  IconBaseProps;
