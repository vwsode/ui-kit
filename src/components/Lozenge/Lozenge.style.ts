import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Spacing, ThemeType } from '@/themes';
import { textLozenge } from '@/themes/typography';
import { composeTestingPath } from '@/utils';

import { LozengeSelector } from './constants';
import { LozengeAppearance, StyledLozengeProps, StyledLozengeTextProps } from './types';

type ColorMap = Record<
  LozengeAppearance,
  {
    backgroundColor: string;
    color: string;
  }
>;

const getLozengeStyles = (appearance: LozengeAppearance, isBold: boolean = false, theme: ThemeType) => {
  const { colors } = theme;

  const colorMapDefault: ColorMap = {
    default: {
      backgroundColor: colors.background.neutral.default,
      color: colors.text.subtle,
    },
    inprogress: {
      backgroundColor: colors.background.information.default,
      color: colors.text.information,
    },
    moved: {
      backgroundColor: colors.background.warning.default,
      color: colors.text.warning.default,
    },
    new: {
      backgroundColor: colors.background.discovery.default,
      color: colors.text.discovery,
    },
    removed: {
      backgroundColor: colors.background.danger.default,
      color: colors.text.danger,
    },
    success: {
      backgroundColor: colors.background.success.default,
      color: colors.text.success,
    },
  };

  const colorMapBold: ColorMap = {
    default: {
      backgroundColor: colors.background.neutral.bold.default,
      color: colors.text.inverse,
    },
    inprogress: {
      backgroundColor: colors.background.information.bold.default,
      color: colors.text.inverse,
    },
    moved: {
      backgroundColor: colors.background.warning.bold.default,
      color: colors.text.warning.inverse,
    },
    new: {
      backgroundColor: colors.background.discovery.bold.default,
      color: colors.text.inverse,
    },
    removed: {
      backgroundColor: colors.background.danger.bold.default,
      color: colors.text.inverse,
    },
    success: {
      backgroundColor: colors.background.success.bold.default,
      color: colors.text.inverse,
    },
  };

  const colorMap = isBold ? colorMapBold : colorMapDefault;

  return css`
    background-color: ${colorMap[appearance].backgroundColor};
    color: ${colorMap[appearance].color};
  `;
};

export const StyledLozenge = styled.span.attrs<StyledLozengeProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(LozengeSelector.LOZENGE, testId),
}))<StyledLozengeProps>`
  ${({ appearance, isBold, maxWidth, theme }) => css`
    ${getLozengeStyles(appearance, isBold, theme)}
    max-width: ${maxWidth}px;
    text-transform: uppercase;
    padding: 0 ${Spacing.XS};
    border-radius: ${BorderRadius.SMALL};

    display: inline-flex;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
  `}
`;

export const StyledLozengeText = styled.span.attrs<StyledLozengeTextProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(LozengeSelector.LOZENGE_TEXT, testId),
}))<StyledLozengeTextProps>`
  ${textLozenge}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;

  ${({ maxWidth }) => css`
    max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};
  `}
`;
