import { ChangeEvent, HTMLAttributes, ReactNode, Ref } from 'react';

import { TestableComponent } from '../../types/controls.ts';

export type RadioProps = {
  /**
   * Radio input name.
   */
  name?: string;
  /**
   * The value associated with the radio button.
   * This is used to identify the selected option.
   */
  value: string;
  /**
   * The `aria-label` text that will be used to improve
   * accessibility (a11y) when there is no visible label.
   */
  ariaLabel?: string;
  /**
   * The label displayed next to the radio button.
   * It can be a string or a ReactNode for more complex labels.
   */
  label: string | ReactNode;
  /**
   * If true, the radio button will be disabled and not interactable.
   */
  isDisabled?: boolean;
  /**
   * If true, the radio button will be marked as invalid, typically by changing its border color.
   */
  isInvalid?: boolean;
  /**
   * If true, the radio button will be checked (selected).
   */
  isChecked?: boolean;
  /**
   * If true, the radio button will be required in the form.
   */
  isRequired?: boolean;
  /**
   * A reference to the underlying input element.
   * This can be used to directly interact with the DOM element.
   */
  ref?: Ref<HTMLInputElement>;
  /**
   * Callback function that is triggered when the radio button state changes.
   * @param event - The change event for the input element.
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & TestableComponent &
  HTMLAttributes<HTMLInputElement>;

export type RadioInputProps = {
  isInvalid: boolean;
} & TestableComponent;
