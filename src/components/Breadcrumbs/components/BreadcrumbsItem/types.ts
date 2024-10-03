import { TestableComponent } from '@/types/controls';

export type BreadcrumbsItemsStyledProps = {
  /**
   * The maximum width in pixels that an item can have before it is truncated.
   * If this is not set, truncation will only occur when it cannot fit alone on a line.
   * If there is no truncationWidth, tooltips are not provided on truncation.
   */
  truncationWidth?: number;
} & TestableComponent;
