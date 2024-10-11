import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Font, FontSize, LineHeight, Spacing } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { KeyboardCommandSelector } from './constants';

export const Root = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(KeyboardCommandSelector.KEYBOARD_COMMAND, testId),
}))<TestableComponent>`
  font-family: ${Font.Monospace};
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XS};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${Spacing.XXS} ${Spacing.S_NUDGE};
  border-radius: ${BorderRadius.SMALL};
  background-color: ${({ theme }) => theme.colors.background.neutral.default};
  box-shadow: inset 0px -2px 0px ${({ theme }) => theme.colors.border.input},
    inset 0px 0px 0px 1px ${({ theme }) => theme.colors.border.default};
`;
