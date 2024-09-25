import styled from 'styled-components';

const BOTTOM_INDENT = 48;
const LEFT_INDENT = 80;
const FLAG_WIDTH = 400;

export const Root = styled.div`
  position: fixed;
  inset-block-end: ${BOTTOM_INDENT}px;
  inset-inline-start: ${LEFT_INDENT}px;
`;

export const FlagWrapper = styled.div`
  position: absolute;
  width: ${FLAG_WIDTH}px;
  transform: translate(0, 0);
  inset-block-end: 0px;

  &:first-child {
    z-index: 4;
  }

  &:nth-of-type(n + 3) {
    visibility: hidden;
  }

  &:nth-of-type(n + 2) {
    transform: translateX(0px) translateY(100%) translateY(16px);
  }
`;
