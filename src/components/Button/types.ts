import { MouseEvent, PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '../../icons';
import { TestableComponent } from '../../types/controls.ts';

export type ButtonAppearance = 'default' | 'primary' | 'subtle' | 'link' | 'subtle-link' | 'warning' | 'danger';

export type ButtonSpacing = 'default' | 'compact' | 'none';

export type BaseButtonProps = {
  /**
   * Defines the spacing (padding) around the button content.
   * Defaults to 'default' but can be set to 'compact' or 'none' for tighter or icon-only layouts.
   */
  spacing?: ButtonSpacing;

  /**
   * Controls the appearance of the button.
   * Choose from 'default', 'primary', 'subtle', 'link', 'subtle-link', 'warning', or 'danger'
   * to convey different levels of importance or actions.
   */
  appearance?: ButtonAppearance;

  /**
   * If true, the button will stretch to fill the available width of its container.
   */
  fullWidth?: boolean;

  /**
   * If true, the button is only an icon with no text label.
   * Typically used with icon-based buttons.
   */
  iconOnly?: boolean;

  /**
   * If true, the button is disabled and cannot be interacted with.
   * The button will also appear visually inactive.
   */
  isDisabled?: boolean;

  /**
   * If true, the button will display a loading spinner instead of its usual content.
   * Useful for indicating that an action is in progress.
   */
  isLoading?: boolean;

  /**
   * If true, the button will appear in a selected state.
   * Often used in toggle buttons or selection states.
   */
  isSelected?: boolean;

  /**
   * The icon to be displayed within the button.
   * Can either be an icon variant (from a predefined set) or a custom ReactNode.
   */
  icon?: IconVariant | ReactNode;

  /**
   * Event handler called when the button is clicked
   */
  onClick?: (event: MouseEvent<Element>) => void;

  /**
   * Event handler called when the mouse button is pressed down on the button
   */
  onMouseDown?: (event: MouseEvent<Element>) => void;
} & PropsWithChildren &
  TestableComponent;

export type ButtonProps = {
  appearance: ButtonAppearance;

  fullWidth: boolean;

  iconOnly: boolean;

  isDisabled: boolean;

  isLoading: boolean;

  isSelected: boolean;

  spacing: ButtonSpacing;
} & TestableComponent;
