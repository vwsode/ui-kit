import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Duration, Font, FontSize, LineHeight, Spacing, StrokeWidth, ThemeType } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { TagSelector } from './constants';
import { StyledTagProps, TagColor } from './types';

const getTagStyles = (color: TagColor, isLink: boolean, theme: ThemeType) => {
  const { colors } = theme;

  const TagColorMap: Record<
    TagColor,
    {
      backgroundColor: string;
      color: string;
      backgroundColorHovered: string;
      colorHovered: string;
      backgroundColorPressed: string;
      colorPressed: string;
    }
  > = {
    standard: {
      backgroundColor: colors.background.neutral.default,
      color: colors.text.default,
      backgroundColorHovered: colors.background.neutral.hovered,
      colorHovered: colors.link.default,
      backgroundColorPressed: colors.background.neutral.pressed,
      colorPressed: colors.link.pressed,
    },
    blue: {
      backgroundColor: colors.background.accent.blue.subtle.default,
      color: colors.text.accent.blue.bolder,
      backgroundColorHovered: colors.background.accent.blue.subtle.hovered,
      colorHovered: colors.text.accent.blue.bolder,
      backgroundColorPressed: colors.background.accent.blue.subtle.pressed,
      colorPressed: colors.text.accent.blue.default,
    },
    green: {
      backgroundColor: colors.background.accent.green.subtle.default,
      color: colors.text.accent.green.bolder,
      backgroundColorHovered: colors.background.accent.green.subtle.hovered,
      colorHovered: colors.text.accent.green.bolder,
      backgroundColorPressed: colors.background.accent.green.subtle.pressed,
      colorPressed: colors.text.accent.green.default,
    },
    teal: {
      backgroundColor: colors.background.accent.teal.subtle.default,
      color: colors.text.accent.teal.bolder,
      backgroundColorHovered: colors.background.accent.teal.subtle.hovered,
      colorHovered: colors.text.accent.teal.bolder,
      backgroundColorPressed: colors.background.accent.teal.subtle.pressed,
      colorPressed: colors.text.accent.teal.default,
    },
    purple: {
      backgroundColor: colors.background.accent.purple.subtle.default,
      color: colors.text.accent.purple.bolder,
      backgroundColorHovered: colors.background.accent.purple.subtle.hovered,
      colorHovered: colors.text.accent.purple.bolder,
      backgroundColorPressed: colors.background.accent.purple.subtle.pressed,
      colorPressed: colors.text.accent.purple.default,
    },
    red: {
      backgroundColor: colors.background.accent.red.subtle.default,
      color: colors.text.accent.red.bolder,
      backgroundColorHovered: colors.background.accent.red.subtle.hovered,
      colorHovered: colors.text.accent.red.bolder,
      backgroundColorPressed: colors.background.accent.red.subtle.pressed,
      colorPressed: colors.text.accent.red.default,
    },
    yellow: {
      backgroundColor: colors.background.accent.yellow.subtle.default,
      color: colors.text.accent.yellow.bolder,
      backgroundColorHovered: colors.background.accent.yellow.subtle.hovered,
      colorHovered: colors.text.accent.yellow.bolder,
      backgroundColorPressed: colors.background.accent.yellow.subtle.pressed,
      colorPressed: colors.text.accent.yellow.default,
    },
    orange: {
      backgroundColor: colors.background.accent.orange.subtle.default,
      color: colors.text.accent.orange.bolder,
      backgroundColorHovered: colors.background.accent.orange.subtle.hovered,
      colorHovered: colors.text.accent.orange.bolder,
      backgroundColorPressed: colors.background.accent.orange.subtle.pressed,
      colorPressed: colors.text.accent.orange.default,
    },
    magenta: {
      backgroundColor: colors.background.accent.magenta.subtle.default,
      color: colors.text.accent.magenta.bolder,
      backgroundColorHovered: colors.background.accent.magenta.subtle.hovered,
      colorHovered: colors.text.accent.magenta.bolder,
      backgroundColorPressed: colors.background.accent.magenta.subtle.pressed,
      colorPressed: colors.text.accent.magenta.default,
    },
    lime: {
      backgroundColor: colors.background.accent.lime.subtle.default,
      color: colors.text.accent.lime.bolder,
      backgroundColorHovered: colors.background.accent.lime.subtle.hovered,
      colorHovered: colors.text.accent.lime.bolder,
      backgroundColorPressed: colors.background.accent.lime.subtle.pressed,
      colorPressed: colors.text.accent.lime.default,
    },
    gray: {
      backgroundColor: colors.background.accent.gray.subtle.default,
      color: colors.text.accent.gray.bolder,
      backgroundColorHovered: colors.background.accent.gray.subtle.hovered,
      colorHovered: colors.text.accent.gray.bolder,
      backgroundColorPressed: colors.background.accent.gray.subtle.pressed,
      colorPressed: colors.text.accent.gray.default,
    },
    'green-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'teal-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'blue-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'purple-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'red-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'yellow-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'orange-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'magenta-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'lime-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
    'gray-light': {
      backgroundColor: '',
      color: '',
      backgroundColorHovered: '',
      colorHovered: '',
      backgroundColorPressed: '',
      colorPressed: '',
    },
  };

  return css`
    background-color: ${TagColorMap[color].backgroundColor};
    color: ${TagColorMap[color].color};

    ${isLink &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${TagColorMap[color].backgroundColorHovered};
        text-decoration: underline;
        color: ${TagColorMap[color].colorHovered};
      }

      &:active {
        background-color: ${TagColorMap[color].backgroundColorPressed};
        text-decoration: underline;
        color: ${TagColorMap[color].colorPressed};
      }

      &:focus-visible {
        outline: ${({ theme }) => theme.colors.border.focused} solid ${StrokeWidth.THICK};
        outline-offset: ${Spacing.XXS};
      }
    `}
  `;
};

export const ButtonClose = styled.button.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TagSelector.CLOSE_BUTTON, testId),
}))<TestableComponent>`
  cursor: pointer;
  box-sizing: border-box;
  background-color: transparent;
  color: currentColor;
  padding: 0;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -${Spacing.XS};

  &:focus-visible {
    outline: none;
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.border.focused};
  }
`;

export const Root = styled.span.attrs<StyledTagProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TagSelector.TAG, testId),
}))<StyledTagProps>`
  display: inline-flex;
  align-items: flex-start;
  border-radius: ${({ appearance }) => (appearance === 'rounded' ? BorderRadius.CIRCULAR : BorderRadius.SMALL)};
  min-height: 20px;
  padding: ${Spacing.XXS} ${Spacing.XS};
  text-decoration: none;

  transition: background-color ${Duration.Quick}, color ${Duration.Quick};

  ${({ color, isLink, theme }) => getTagStyles(color, isLink, theme)}

  ${ButtonClose} {
    border-radius: ${({ appearance }) => (appearance === 'rounded' ? BorderRadius.CIRCULAR : BorderRadius.SMALL)};
  }
`;

export const Text = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TagSelector.TEXT, testId),
}))<TestableComponent>`
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XXXS};
  font-family: ${Font.Base};
`;

export const IconWrapper = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TagSelector.ICON, testId),
}))<TestableComponent>`
  margin-left: -${Spacing.XXS};
  display: inline-flex;
  justify-content: center;
  align-content: center;
`;
