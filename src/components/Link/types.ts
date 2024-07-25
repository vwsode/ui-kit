import React, { HTMLAttributes } from 'react';

import { PropsWithClassName, TestableComponent } from '../../types/controls';

export type LinkBaseProps = {
  /**
   * The URL to navigate
   */
  to: string;
  /**
   * Specifies where to open the linked document
   */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /**
   * The content to be displayed as the link's children
   */
  children?: React.ReactNode;
  /**
   * Indicates if the link is disabled
   */
  disabled?: boolean;
} & TestableComponent &
  HTMLAttributes<HTMLAnchorElement>;

export type LinkProps = PropsWithClassName & LinkBaseProps;

export type StyledLinkProps = LinkBaseProps;
