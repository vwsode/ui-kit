import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Font, FontSize, LineHeight, Spacing, StrokeWidth } from '@/themes';
import { composeTestingPath } from '@/utils';

import { BreadcrumbsSelector } from '../../constants';

import type { BreadcrumbsItemsStyledProps } from './types';

export const Root = styled.a.attrs<BreadcrumbsItemsStyledProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BreadcrumbsSelector.BREADCRUMBS_ITEM, testId),
}))<BreadcrumbsItemsStyledProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  font-size: ${FontSize.XS};
  line-height: ${LineHeight.DEFAULT};
  font-family: ${Font.Base};
  text-decoration: none;
  outline: none;
  border-radius: ${BorderRadius.SMALL};

  color: ${({ theme }) => theme.colors.text.subtle};

  &:hover {
    color: ${({ theme }) => theme.colors.text.subtle};
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.text.default};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.border.focused} solid ${StrokeWidth.THICK};
    outline-offset: ${Spacing.XXS};
  }
`;
