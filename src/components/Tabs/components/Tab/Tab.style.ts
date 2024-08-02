import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../../../constants/TestUtils';
import { BorderRadius, Spacing } from '../../../../themes';
import { Colors } from '../../../../themes/standard/colors';
import { textTab } from '../../../../themes/typography';
import { composeTestingPath } from '../../../../utils';
import { TabsSelector } from '../../constants';

import type { StyledTabProps } from './types';

export const StyledTab = styled.div.attrs<StyledTabProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TabsSelector.TAB_ITEM, testId),
}))<StyledTabProps>`
  ${({ isSelected }) => css`
    ${textTab}
    cursor: pointer;
    color: ${Colors.colorTabText};
    padding: ${Spacing.XS} ${Spacing.S};
    position: relative;
    margin-bottom: -${Spacing.XXS};
    outline: none;

    &:active {
      color: ${Colors.colorTabTextPress};
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      padding: 0 ${Spacing.S};
      height: ${Spacing.XXS};
      width: calc(100% - ${Spacing.S} * 2);
      border-radius: ${BorderRadius.X_SMALL};
    }

    &:hover {
      &::before {
        background-color: ${Colors.colorTabHover};
      }
    }

    ${isSelected &&
    css`
      color: ${Colors.colorTabSelected};
      &::before {
        background-color: ${Colors.colorTabSelected};
      }

      &:hover::before {
        background-color: ${Colors.colorTabSelected};
      }

      &:active {
        color: ${Colors.colorTabSelected};
      }
    `}
  `}
`;
