import { MouseEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type PageProps = {
  /**
   * Indicates whether the page is currently selected.
   * If `true`, the page will be styled as selected.
   * Defaults to `false` if not provided.
   */
  isSelected?: boolean;

  /**
   * The page number or label to display.
   * Can be a number (for pagination) or a string (for custom labels).
   */
  page: number | string;

  /**
   * Callback function triggered when the page is clicked.
   * Receives the mouse click event and the page number or label as parameters.
   *
   * @param {MouseEvent} event - The mouse event triggered by the click.
   * @param {number | string} page - The page number or label that was clicked.
   */
  onClick?: (event: MouseEvent, page: number | string) => void;

  /**
   * Determines whether the page button is disabled.
   * If `true`, the page will be unclickable and styled accordingly.
   * Defaults to `false` if not provided.
   */
  isDisabled?: boolean;
} & TestableComponent;
