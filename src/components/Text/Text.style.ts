import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Accent, StyledTextProps, TextType } from './types';
import { fontSmoothing } from '../../themes/styles';
import { Colors } from '../../themes/standard/colors';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';

import {
  textTitle1,
  textTitle2,
  textTitle3,
  textHeadline,
  textSubheadline,
  textBody,
  textCaption,
} from '../../themes/typography';
import { TextSelector } from './constants';

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
  [TESTING_DATA_ATTRIBUTE]: `${TextSelector.TEXT}${testId ? '.' + testId : ''}`,
}))<StyledTextProps>`
  ${fontSmoothing};

  ${(props) => css`
    ${getTextStyles(props.type)};

    ${props.accent &&
    css`
      color: ${props.theme.colors[accnetColorsMap[props.accent]]};
    `};

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
