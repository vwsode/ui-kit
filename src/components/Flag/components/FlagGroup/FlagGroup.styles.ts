import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  inset-inline-end: 48px;
  inset-inline-start: 80px;
`;

export const FlagWrapper = styled.div`
  position: absolute;
  width: 400px;
  transform: translate(0, 0);

  &:nth-of-type(n + 3) {
    visibility: hidden;
  }

  &:nth-of-type(n + 2) {
    transform: translateX(0px) translateY(100%) translateY(16px);
  }
`;
