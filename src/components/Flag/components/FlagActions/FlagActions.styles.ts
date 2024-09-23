import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { FlagSelector } from '../Flag/constants';

export const Actions = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(FlagSelector.ACTIONS, testId),
}))<TestableComponent>`
  display: flex;
  gap: ${Spacing.S};
`;
