import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing } from '@/themes';
import { textBody } from '@/themes/typography';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { PaginationSelector } from '../Pagination';

export const Root = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(PaginationSelector.ELLIPSIS, testId),
}))<TestableComponent>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${textBody};
  color: ${({ theme }) => theme.colors.colorTextDefault};

  padding: ${Spacing.S_NUDGE} ${Spacing.S};
  flex-shrink: 0;
`;
