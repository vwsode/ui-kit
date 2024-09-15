import styled, { css } from 'styled-components';

import { Root as StyledButton } from '@/components/Button/Button.style';
import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing } from '@/themes';
import { composeTestingPath } from '@/utils';

import { ButtonGroupSelector } from './constants';

import type { StyledButtonGroupProps } from './types';

export const Root = styled.div.attrs<StyledButtonGroupProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(ButtonGroupSelector.GROUP, testId),
}))<StyledButtonGroupProps>`
  display: flex;
  gap: ${Spacing.XS};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};

  ${StyledButton} {
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
      `}
  }
`;
