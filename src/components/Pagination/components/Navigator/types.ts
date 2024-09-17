import { MouseEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type NavigatorDirection = 'prev' | 'next';

export type NavigatorProps = {
  /**
   * Determines whether the navigation button is disabled.
   * If `true`, the button will be unclickable and styled accordingly.
   * Defaults to `false` if not provided.
   */
  isDisabled?: boolean;

  /**
   * The direction of the navigation.
   * This specifies whether the navigator moves in a specific direction
   * (e.g., 'next' or 'prev'), typically used in pagination or carousel components.
   */
  direction: NavigatorDirection;

  /**
   * Callback function triggered when the navigator button is clicked.
   * Receives the mouse event and the direction as parameters.
   *
   * @param {MouseEvent<HTMLButtonElement>} event - The mouse event triggered by the click.
   * @param {NavigatorDirection} direction - The direction in which to navigate (e.g., 'next' or 'prev').
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>, direction: NavigatorDirection) => void;
} & TestableComponent;

export type StyledNavigatorProps = Pick<NavigatorProps, 'isDisabled'>;
