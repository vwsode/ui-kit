import { ChangeEvent, FocusEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type CheckboxProps = {
  /**
   * Specifies whether the checkbox is checked by default when initially rendered.
   * This is used for uncontrolled components.
   */
  defaultChecked?: boolean;

  /**
   * Specifies the current checked state of the checkbox.
   * This is used for controlled components.
   */
  isChecked?: boolean;

  /**
   * Disables the checkbox when set to true, making it non-interactive.
   */
  isDisabled?: boolean;

  /**
   * Specifies whether the checkbox is in an indeterminate state,
   * typically used to show a partially checked status.
   */
  isIndeterminate?: boolean;

  /**
   * Marks the checkbox as invalid. Typically used to indicate a validation error.
   */
  isInvalid?: boolean;

  /**
   * Marks the checkbox as required, indicating that it must be checked before form submission.
   */
  isRequired?: boolean;

  /**
   * Label text displayed alongside the checkbox.
   */
  label?: string;

  /**
   * Name of the checkbox, used in form submission and for associating the checkbox with form data.
   */
  name?: string;

  /**
   * Event handler triggered when the checkbox's value changes.
   * It provides access to the event, including the new checked state.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Event handler triggered when the checkbox loses focus (on blur).
   * It provides access to the event.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * The value associated with the checkbox, typically used in form submission.
   * It can be a string or number.
   */
  value?: string | number;
} & TestableComponent;

export type StyledCheckboxProps = Pick<CheckboxProps, 'isDisabled' | 'isInvalid' | 'isIndeterminate'> &
  TestableComponent;

export type StyledTextProps = Pick<CheckboxProps, 'isDisabled'> & TestableComponent;
