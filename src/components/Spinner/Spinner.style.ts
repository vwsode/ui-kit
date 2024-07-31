import styled, { keyframes } from 'styled-components';

import { Icon } from '../../icons';

export const loadingFrames = keyframes`
  0%{
    transform: rotate(0deg);
  }

  50%{
    transform: rotate(90deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Icon)`
  animation: ${loadingFrames} 0.8s linear infinite;
`;
