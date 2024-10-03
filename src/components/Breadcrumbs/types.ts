import { MouseEvent, PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '@/icons';

import type { TestableComponent } from '@/types/controls';

export type BreadcrumbsProps = {
  /**
   * Override collapsing of the nav when there are more than the maximum number of items.
   */
  isExpanded?: boolean;

  /**
   * A function to be called when you are in the collapsed view and click the ellipsis.
   */
  onExpand?: (event: MouseEvent<Element>) => void;

  /**
   * Set the maximum number of breadcrumbs to display.
   * When there are more than the maximum number, only the first and last will be shown, with a ellipsis in between.
   *
   * !!! Doesn't work yet.
   */
  maxItems?: number;

  /**
   * 	If max items is exceeded, the number of items to show after the ellipsis.
   */
  visibleAfterCollapse?: number;

  /**
   * 	If max items is exceeded, the number of items to show before the ellipsis.
   */
  visibleBeforeCollapse?: number;
} & PropsWithChildren &
  TestableComponent;

export type BreadcrumbsItemProps<C extends React.ElementType> = {
  /**
   * The text to appear within the breadcrumb as a link.
   */
  text: string;

  /**
   * The maximum width in pixels that an item can have before it is truncated.
   * If this is not set, truncation will only occur when it cannot fit alone on a line.
   * If there is no truncationWidth, tooltips are not provided on truncation.
   */
  truncationWidth?: number;

  /**
   * An icon to display before the breadcrumb.
   */
  iconBefore?: ReactNode | IconVariant;

  /**
   * An icon to display after the breadcrumb.
   */
  iconAfter?: ReactNode | IconVariant;

  /**
   *
   */
  href?: string;

  /**
   * Provide a custom component to use instead of the default button.
   * The custom component should accept a className prop so it can be styled and possibly all action handlers.
   */
  component?: C;
} & TestableComponent;

export type ExpandButtonProps = {
  /**
   *
   * @param {MouseEvent<Element>} event - The mouse event triggered by the click.
   * @returns void
   */
  onClick?: (event: MouseEvent<Element>) => void;
} & TestableComponent;
