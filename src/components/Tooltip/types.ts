import { ReactElement, ReactNode } from 'react';

import { TestableComponent } from '@/types/controls';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export type TooltipProps = {
  /**
   * The content that will be displayed inside the tooltip.
   * Can be either a ReactNode (for complex content) or a string (for plain text).
   */
  content: ReactNode | string;

  /**
   * Defines the placement of the tooltip relative to the reference element.
   * Example placements: 'top', 'bottom', 'left', 'right'.
   * Defaults to 'bottom' if not provided.
   */
  placement?: TooltipPlacement;

  /**
   * The child element that will trigger the tooltip on hover or focus.
   * This is typically a button, icon, or any clickable element.
   */
  children: ReactElement;

  /**
   *
   */
  initialOpen?: boolean;

  /**
   * Controls whether the tooltip is visible.
   * If true, the tooltip is shown; if false, it is hidden.
   */
  isOpen?: boolean;

  /**
   * A callback function that is triggered when the tooltip is closed.
   * This is typically used to manage tooltip state externally.
   */
  onClose?: () => void;

  /**
   * If true, the text inside the tooltip will be truncated and ellipsized.
   * This is useful when displaying long text that doesn't fit within the container.
   */
  truncate?: boolean;

  /**
   * A callback function that is triggered when the tooltip is opened.
   * This is typically used to manage tooltip state externally.
   */
  onOpen?: () => void;
} & TestableComponent;

export type StyledTooltipProps = {
  truncate: boolean;
} & TestableComponent;
