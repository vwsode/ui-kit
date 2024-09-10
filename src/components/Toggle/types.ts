import { ChangeEvent, FocusEvent, RefObject } from 'react';

import { TestableComponent } from '../../types/controls';

/**
 *  Defines the available sizes for the Toggle component
 */
export type ToggleSize = 'regular' | 'large';

export type ToggleProps = {
  /**
   * If true, the toggle is disabled and not interactive.
   */
  isDisabled?: boolean;

  /**
   * Determines the size of the toggle, either 'regular' or 'large'.
   */
  size?: ToggleSize;

  /**
   * Determines if the toggle is currently checked or not.
   * Can be controlled by a parent component.
   */
  isChecked?: boolean;

  /**
   * The default checked state of the toggle.
   * This is only used for uncontrolled components.
   */
  defaultValue?: boolean;

  /**
   * The current value of the toggle input.
   */
  value?: string;

  /**
   * The unique identifier for the toggle input.
   */
  id?: string;

  /**
   * An accessible label for screen readers.
   */
  ariaLabel?: string;

  /**
   * The name attribute of the input, used when submitting forms.
   */
  name?: string;

  /**
   * A reference to the toggle input element, useful for accessing the DOM element.
   */
  ref?: RefObject<HTMLInputElement>;

  /**
   * Callback function triggered when the toggle state changes (checked/unchecked).
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback function triggered when the toggle loses focus.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Callback function triggered when the toggle gains focus.
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
} & TestableComponent;

export type StyledToggleProps = {
  /**
   * Determines the size of the toggle component.
   */
  size: ToggleSize;

  /**
   * Determines if the toggle is checked or not.
   */
  isChecked: boolean;

  /**
   * Determines if the toggle is disabled or not.
   */
  isDisabled: boolean;
} & TestableComponent;
