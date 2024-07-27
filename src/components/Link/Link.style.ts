import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { Colors } from '../../themes/standard/colors';
import { composeTestingPath } from '../../utils';

import { LinkSelector } from './constants';
import { StyledLinkProps } from './types';

export const StyledLink = styled.a.attrs<StyledLinkProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(LinkSelector.LINK, testId),
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
