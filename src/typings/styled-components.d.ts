import { ThemeType } from '@/themes';

type ThemeInterface = typeof ThemeType;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
