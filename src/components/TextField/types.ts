import { ChangeEvent, InputHTMLAttributes, ReactNode, RefObject } from 'react';

import { TestableComponent } from '@/types/controls';

export type TextFieldAppearance = 'standard' | 'subtle' | 'none';

export type TextFieldProps = {
  /**
   * Customize the appearance of the text field
   */
  appearance?: TextFieldAppearance;

  /**
   * Use a monospaced font
   */
  isMonospaced?: boolean;

  /**
   * Make the text field compact
   */
  isCompact?: boolean;

  /**
   * Disable the text field
   */
  isDisabled?: boolean;

  /**
   * Set required for form that the field is part of.
   */
  isRequired?: boolean;

  /**
   * Mark the text field as invalid
   */
  isInvalid?: boolean;

  /**
   * Take up the full width of the container
   */
  fullWidth?: boolean;

  /**
   * Specify the name of the text field
   */
  name?: string;

  /**
   * Specify the placeholder text
   */
  placeholder?: string;

  /**
   * Element before input in text field.
   */
  elemBefore?: ReactNode;

  /**
   * Element after input in text field.
   */
  elemAfter?: ReactNode;

  /**
   * Handle change events
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   *
   */
  inputRef?: RefObject<HTMLInputElement>;
} & TestableComponent &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'>;

export type FieldStyledProps = {
  isInvalid: boolean;
  isDisabled: boolean;
  isCompact: boolean;
  appearance: TextFieldAppearance;
  fullWidth: boolean;
} & TestableComponent;

export type InputStyledProps = {
  isMonospaced: boolean;
  isCompact: boolean;
} & TestableComponent;
