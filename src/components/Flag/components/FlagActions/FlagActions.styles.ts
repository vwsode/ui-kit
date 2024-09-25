import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Font, FontSize, LineHeight, Spacing } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { FlagSelector } from '../Flag/constants';

const DOT_WIDTH = 16;

export const Actions = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(FlagSelector.ACTIONS, testId),
}))<TestableComponent>`
  display: flex;
  align-items: center;
  gap: ${Spacing.S};
`;

export const Dot = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(FlagSelector.ACTIONS_DOT, testId),
}))<TestableComponent>`
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XS};
  font-family: ${Font.Base};
  width: ${DOT_WIDTH}px;
  height: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: inherit;
`;
