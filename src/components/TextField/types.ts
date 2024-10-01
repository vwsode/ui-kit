import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, ClipboardEvent } from 'react';

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
   * Mark the text field as invalid
   */
  isInvalid?: boolean;

  /**
   * Take up the full width of the container
   */
  fullWidth?: boolean;

  /**
   * Specify the ID of the text field
   */
  id?: string;

  /**
   * Specify the name of the text field
   */
  name?: string;

  /**
   * Specify the placeholder text
   */
  placeholder?: string;

  /**
   * Handle change events
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Handle blur events
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Handle focus events
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Handle mouse enter events
   */
  onMouseEnter?: (event: MouseEvent<HTMLInputElement>) => void;

  /**
   * Handle mouse leave events
   */
  onMouseLeave?: (event: MouseEvent<HTMLInputElement>) => void;

  /**
   * Handle key down events
   */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;

  /**
   * Handle key up events
   */
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;

  /**
   * Handle paste events
   */
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void;
} & TestableComponent;

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
