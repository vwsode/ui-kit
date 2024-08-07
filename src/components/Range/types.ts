import { RefObject } from 'react';

import { TestableComponent } from '../../types/controls';

export type RangeProps = {
  /**
   * Indicates whether the range control is disabled.
   */
  isDisabled?: boolean;
  /**
   * The maximum allowable value for the range.
   */
  max?: number;
  /**
   * The minimum allowable value for the range.
   */
  min?: number;
  /**
   * A callback function that is called when the value of the range changes.
   */
  onChange?: (value: number) => void;
  /**
   * The current value of the range control.
   */
  value?: number;
  /**
   * The step value for the range control. This determines the increments by which the value can change.
   */
  step?: number;
  /**
   * A reference to the underlying HTML input element. This can be used to directly interact with the DOM element.
   */
  ref?: RefObject<HTMLInputElement>;
} & TestableComponent;
