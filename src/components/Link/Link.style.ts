import styled, { css } from 'styled-components';

import { StyledLinkProps } from './types';
import { Colors } from '../../themes/standard/colors';
import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { LinkSelector } from './constants';

export const StyledLink = styled.a.attrs<StyledLinkProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: `${LinkSelector.LINK}${testId ? '.' + testId : ''}`,
}))<StyledLinkProps>`
  outline: none;
  text-decoration: none;
  cursor: pointer;

  ${(props) => css`
    color: ${Colors.colorLinkRest};

    &:hover,
    &:visited,
    &:focus {
      color: ${Colors.colorLinkHover};
      text-decoration: underline;
    }

    ${props.disabled &&
    css`
      color: ${Colors.colorLinkDisabled};
      text-decoration: none;
      cursor: default;

      &:hover,
      &:visited,
      &:focus {
        color: ${Colors.colorLinkDisabled};
        text-decoration: none;
        cursor: default;
      }
    `}
  `}
`;
