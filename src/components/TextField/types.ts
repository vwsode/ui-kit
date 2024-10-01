import { TestableComponent } from '@/types/controls';

export type TextFieldAppearance = 'standard' | 'subtle' | 'none';

export type TextFieldProps = {
  /**
   *
   */
  appearance?: TextFieldAppearance;

  /**
   *
   */
  isMonospaced?: boolean;

  /**
   *
   */
  isCompact?: boolean;

  /**
   *
   */
  isDisabled?: boolean;

  /**
   *
   */
  placeholder?: string;

  /**
   *
   */
  isInvalid?: boolean;
} & TestableComponent;

export type FieldStyledProps = {
  isInvalid: boolean;
  isDisabled: boolean;
  isCompact: boolean;
  appearance: TextFieldAppearance;
} & TestableComponent;

export type InputStyledProps = {
  isMonospaced: boolean;
  isCompact: boolean;
} & TestableComponent;
