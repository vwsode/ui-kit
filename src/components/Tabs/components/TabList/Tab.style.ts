import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { TabsSelector } from '../../constants';

export const StyledTabList = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TabsSelector.TAB_LIST, testId),
}))<TestableComponent>`
  display: flex;
  align-items: center;
  border-bottom: ${Spacing.XXS} solid ${({ theme }) => theme.colors.border.default};
`;
