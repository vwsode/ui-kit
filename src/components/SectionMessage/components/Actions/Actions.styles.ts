import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Font, FontSize, LineHeight } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { SectionMessageSelector } from '../SectionMessage/constants';

const DOT_WIDTH = 16;

export const Root = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(SectionMessageSelector.ACTIONS, testId),
}))<TestableComponent>`
  display: flex;
  align-items: center;
`;

export const Dot = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(SectionMessageSelector.ACTIONS_DOT, testId),
}))<TestableComponent>`
  color: ${({ theme }) => theme.colors.text.subtle};
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XS};
  font-family: ${Font.Base};
  width: ${DOT_WIDTH}px;
  height: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
