import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { composeTestingPath } from '@/utils';

import { CodeSelector } from './constants';

import type { TestableComponent } from '@/types/controls';
import { BorderRadius, Font, FontSize, FontWeight, LineHeight, Spacing } from '@/themes';
import { WithTheme } from '@/types/styles';

export const Root = styled.span.attrs<WithTheme<TestableComponent>>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CodeSelector.CODE, testId),
}))<WithTheme<TestableComponent>>`
  font-family: ${Font.Monospace};
  font-size: ${FontSize.XS};
  font-weight: ${FontWeight.Normal};
  line-height: ${LineHeight.XS};

  white-space: nowrap;
  padding: 0 ${Spacing.XS};
  border-radius: ${BorderRadius.SMALL};

  background-color: ${({ theme }) => theme.colors.background.neutral.default};
  color: ${({ theme }) => theme.colors.text.default};
`;
