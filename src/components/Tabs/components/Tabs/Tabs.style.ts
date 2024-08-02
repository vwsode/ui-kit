import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../../../constants/TestUtils';
import { composeTestingPath } from '../../../../utils';
import { TabsSelector } from '../../constants';

import { StyledTabProps } from './types';

export const Root = styled.div.attrs<StyledTabProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TabsSelector.TABS, testId),
}))<StyledTabProps>``;
