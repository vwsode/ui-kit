import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils.ts';
import { composeTestingPath } from '@/utils';

import { PaginationSelector } from './constants.ts';
import { StyledPaginationProps } from './types.ts';

export const Root = styled.div.attrs<StyledPaginationProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(PaginationSelector.PAGINATION, testId),
}))<StyledPaginationProps>`
  display: flex;
`;
