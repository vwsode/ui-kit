import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { TabsSelector } from '../../constants';

export const StyledTabPanel = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TabsSelector.TAB_PANEL, testId),
}))<TestableComponent>``;
