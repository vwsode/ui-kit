import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing } from '@/themes';
import { textBody } from '@/themes/typography';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { FlagSelector } from '../Flag/constants';

export const Content = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(FlagSelector.CONTENT, testId),
}))<TestableComponent>`
  ${textBody};
  padding-bottom: ${Spacing.S};
  color: inherit;
`;
