import styled, { css } from 'styled-components';

import { Button } from '@/components/Button';

import type { StyledNavigatorProps } from './types';

export const NavigatorButton = styled(Button)<StyledNavigatorProps>`
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
