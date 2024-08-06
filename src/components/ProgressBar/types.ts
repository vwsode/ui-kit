import { TestableComponent } from '../../types/controls';

export type ProgressBarAppearance = 'default' | 'success' | 'inverse';

type ProgressBarBaseProps = {
  /**
   * The visual style of the progress bar.
   */
  appearance?: ProgressBarAppearance;
  /**
   * Shows the progress bar in an indeterminate state when true.
   */
  isIndeterminate?: boolean;
} & TestableComponent;

export type ProgressBarProps =
  | (ProgressBarBaseProps & { value: number; isIndeterminate?: false })
  | (ProgressBarBaseProps & { value?: never; isIndeterminate: true });

export type ProgressBarStory = {
  /**
   * The visual style of the progress bar.
   */
  appearance?: ProgressBarAppearance;
  /**
   * Shows the progress bar in an indeterminate state when true.
   */
  isIndeterminate?: boolean;
  /**
   *
   */
  value: number;
} & TestableComponent;

export type StyledRootProps = {
  appearance: ProgressBarAppearance;
} & TestableComponent;

export type StyledProgressProps = {
  value: number;
  appearance: ProgressBarAppearance;
  isIndeterminate: boolean;
} & TestableComponent;
