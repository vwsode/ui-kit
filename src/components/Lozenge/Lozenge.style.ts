import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { BorderRadius, Spacing } from '../../themes';
import { Colors } from '../../themes/standard/colors';
import { textLozenge } from '../../themes/typography';
import { composeTestingPath } from '../../utils';

import { LozengeSelector } from './constants';
import { LozengeAppearance, StyledLozengeProps, StyledLozengeTextProps } from './types';

type ColorMap = Record<
  LozengeAppearance,
  {
    backgroundColor: string;
    color: string;
  }
>;

const colorMapDefault: ColorMap = {
  default: {
    backgroundColor: Colors.colorLozengeDefault,
    color: Colors.colorLozengeDefaultText,
  },
  inprogress: {
    backgroundColor: Colors.colorLozengeInprogress,
    color: Colors.colorLozengeInprogressText,
  },
  moved: {
    backgroundColor: Colors.colorLozengeMoved,
    color: Colors.colorLozengeMovedText,
  },
  new: {
    backgroundColor: Colors.colorLozengeNew,
    color: Colors.colorLozengeNewText,
  },
  removed: {
    backgroundColor: Colors.colorLozengeRemoved,
    color: Colors.colorLozengeRemovedText,
  },
  success: {
    backgroundColor: Colors.colorLozengeSuccess,
    color: Colors.colorLozengeSuccessText,
  },
};

const colorMapBold: ColorMap = {
  default: {
    backgroundColor: Colors.colorLozengeBoldDefault,
    color: Colors.colorLozengeBoldDefaultText,
  },
  inprogress: {
    backgroundColor: Colors.colorLozengeBoldInprogress,
    color: Colors.colorLozengeBoldInprogressText,
  },
  moved: {
    backgroundColor: Colors.colorLozengeBoldMoved,
    color: Colors.colorLozengeBoldMovedText,
  },
  new: {
    backgroundColor: Colors.colorLozengeBoldNew,
    color: Colors.colorLozengeBoldNewText,
  },
  removed: {
    backgroundColor: Colors.colorLozengeBoldRemoved,
    color: Colors.colorLozengeBoldRemovedText,
  },
  success: {
    backgroundColor: Colors.colorLozengeBoldSuccess,
    color: Colors.colorLozengeBoldSuccessText,
  },
};

const getLozengeStyles = (appearance: LozengeAppearance, isBold: boolean = false) => {
  const colorMap = isBold ? colorMapBold : colorMapDefault;

  return css`
    background-color: ${colorMap[appearance].backgroundColor};
    color: ${colorMap[appearance].color};
  `;
};

export const StyledLozenge = styled.span.attrs<StyledLozengeProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(LozengeSelector.LOZENGE, testId),
}))<StyledLozengeProps>`
  ${({ appearance, isBold, maxWidth }) => css`
    ${getLozengeStyles(appearance, isBold)}
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
