import styled, { css } from 'styled-components';

import { Button } from '@/components/Button';

export const PageButton = styled(Button)`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: transparent;

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
      }
    `}
`;
