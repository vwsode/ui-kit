import { ThemeNamesType, ThemeType } from './types';
import { theme as standardTheme } from './standard';

const themeMap: Record<'standard', ThemeType> = {
  standard: standardTheme,
};

export const getTheme = (themeName: ThemeNamesType) => {
  const theme = themeMap[themeName];

  if (!theme) {
    throw new Error(`Theme of "${themeName}" not found`);
  }

  return theme;
};
