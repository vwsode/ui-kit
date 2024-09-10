import { InputHTMLAttributes, Ref } from 'react';

import { TestableComponent } from '../../types/controls';

export type CheckboxSize = 'small' | 'medium' | 'large' | 'x-large';

export type CheckboxProps = TestableComponent &
  InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Determines if the checkbox is in an indeterminate state.
     * This is typically used for a parent checkbox to indicate
     * that only some of the child checkboxes are checked.
     */
    isIndeterminate?: boolean;
    /**
     * Indicates whether the checkbox is currently checked.
     */
    isChecked?: boolean;
    /**
     * Disables the checkbox, preventing user interaction.
     */
    isDisabled?: boolean;
    /**
     * Indicates whether the checkbox has an invalid state.
     * This can be used to style the checkbox to indicate errors
     * or validation issues.
     */
    isInvalid?: boolean;
    /**
     * Marks the checkbox as required, which may trigger
     * validation messages if the checkbox is not checked.
     */
    isRequired?: boolean;
    /**
     * The value of the checkbox, which can be used to identify
     * the checkbox in a form submission or other interactions.
     */
    value?: string | number;
    /**
     * Optional label text to display alongside the checkbox.
     */
    label?: string;
    /**
     * Defines the size of the checkbox, which can be used to
     * adjust its appearance. Options include 'small', 'medium',
     * 'large', or 'x-large'.
     */
    size: CheckboxSize;
    /**
     * A reference to the underlying input element.
     * This can be used to directly interact with the DOM element.
     */
    ref?: Ref<HTMLInputElement>;
  };

export type StyledCheckboxProps = Pick<CheckboxProps, 'isInvalid' | 'size' | 'isIndeterminate' | 'testId'>;
