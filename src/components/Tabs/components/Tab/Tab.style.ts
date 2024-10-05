import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Spacing } from '@/themes';
import { textTab } from '@/themes/typography';
import { composeTestingPath } from '@/utils';

import { TabsSelector } from '../../constants';

import type { StyledTabProps } from './types';

export const StyledTab = styled.div.attrs<StyledTabProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TabsSelector.TAB_ITEM, testId),
}))<StyledTabProps>`
  ${({ isSelected }) => css`
    ${textTab}
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.subtle};
    padding: ${Spacing.XS} ${Spacing.S};
    position: relative;
    margin-bottom: -${Spacing.XXS};
    outline: none;

    &:active {
      color: ${({ theme }) => theme.colors.text.default};
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
        background-color: ${({ theme }) => theme.colors.border.default};
      }
    }

    ${isSelected &&
    css`
      color: ${({ theme }) => theme.colors.text.selected};

      &::before {
        background-color: ${({ theme }) => theme.colors.border.selected};
      }

      &:hover::before {
        background-color: ${({ theme }) => theme.colors.border.selected};
      }

      &:active {
        color: ${({ theme }) => theme.colors.text.selected};
      }
    `}
  `}
`;
