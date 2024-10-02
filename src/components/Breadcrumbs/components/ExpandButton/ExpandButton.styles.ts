import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { FontSize, LineHeight, Font, BorderRadius, StrokeWidth, Spacing } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { BreadcrumbsSelector } from '../../constants';

export const Root = styled.button.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BreadcrumbsSelector.EXPAND_BUTTON, testId),
}))<TestableComponent>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  font-size: ${FontSize.XS};
  line-height: ${LineHeight.DEFAULT};
  font-family: ${Font.Base};
  text-decoration: none;
  outline: none;
  border-radius: ${BorderRadius.SMALL};
  padding: 0;
  box-sizing: border-box;

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
