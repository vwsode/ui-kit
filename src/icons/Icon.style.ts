import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../constants/TestUtils';

import { IconProps } from './types';

export const IconWrapper = styled.i.attrs<IconProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: testId,
}))<IconProps>`
  ${({ size }) => css`
    display: inline-block;
    line-height: 0;
    width: ${size}px;
    height: ${size}px;
  `}
`;
