import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { Colors } from '../../themes/standard/colors';
import { fontSmoothing } from '../../themes/styles';
import {
  textTitle1,
  textTitle2,
  textTitle3,
  textHeadline,
  textSubheadline,
  textBody,
  textCaption,
} from '../../themes/typography';
import { composeTestingPath } from '../../utils';

import { TextSelector } from './constants';
import { Accent, StyledTextProps, TextType } from './types';

const typeTextMap: Record<TextType, FlattenSimpleInterpolation> = {
  caption: textCaption,
  button: textBody,
  subject: textSubheadline,
  'page-header': textHeadline,
  'email-header': textTitle3,
  page: textTitle2,
  greeting: textTitle1,
  link: textBody,
};

const accnetColorsMap: Record<Accent, keyof typeof Colors> = {
  primary: 'colorTextPrimary',
  secondary: 'colorTextSecondary',
  tertiary: 'colorTextTeritary',
};

const getTextStyles = (type: TextType) => {
  return css`
    ${typeTextMap[type]}
  `;
};

export const StyledText = styled.div.attrs<StyledTextProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TextSelector.TEXT, testId),
}))<StyledTextProps>`
  ${fontSmoothing};

  ${(props) => css`
    ${getTextStyles(props.type)};

    ${props.accent &&
    css`
      color: ${props.theme.colors[accnetColorsMap[props.accent]]};
    `};

    ${props.color === 'inherit' &&
    css`
      color: inherit;
    `}

    ${props.type === 'link' &&
    css`
      color: inherit;
    `}

    ${props.whiteSpace &&
    css`
      white-space: ${props.whiteSpace};
    `}

    ${props.wordBreak &&
    css`
      word-break: ${props.wordBreak};
    `}
  `}
`;
