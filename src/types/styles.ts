import { ThemeType } from '../themes/types';

export type WithTheme<Props = unknown> = Props & {
  /**
   * Theme property to style a component.
   */
  theme: ThemeType;
};
