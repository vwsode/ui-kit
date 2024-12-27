import { ReactNode } from 'react';

export type PropsWithClassName = {
  /**
   * ClassName
   */
  className?: string;
};

export type PropsWithChildren = {
  children?: ReactNode | string;
};

export type TestableComponent = {
  /**
   *  A unique identifier used for testing component or element.
   */
  testId?: string;
};

export type PropWithAriaLabel = {
  /**
   * Refers to an aria-label attribute. Sets an accessible name for the button group wrapper to announce it to users of assistive technology.
   * Usage of either this, or the titleId attribute is strongly recommended.
   */
  label?: string;
};
