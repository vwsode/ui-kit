import styled from 'styled-components';

import { Font, FontSize, FontWeight, LineHeight, Spacing } from '@/themes';

export const Root = styled.div`
  display: flex;
`;

export const StyledTooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.background.neutral.bold.default};
  color: ${({ theme }) => theme.colors.text.inverse};

  padding: ${Spacing.XXS} ${Spacing.S_NUDGE};
  border-radius: 4px;
  max-width: 200px;

  text-align: center;
  z-index: 1000;
  pointer-events: none;

  font-size: ${FontSize.XXS};
  line-height: ${LineHeight.XXS};
  font-family: ${Font.Base};
  font-weight: ${FontWeight.Normal};

  &[data-popper-placement^='top'] {
    margin-bottom: 8px;
  }

  &[data-popper-placement^='bottom'] {
    margin-top: 8px;
  }

  &[data-popper-placement^='left'] {
    margin-right: 8px;
  }

  &[data-popper-placement^='right'] {
    margin-left: 8px;
  }

  transition: opacity 0.2s ease-in-out;
`;
