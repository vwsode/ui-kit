import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Icon } from '@/icons/Icon.tsx';
import { BorderRadius, Duration, StrokeWidth } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { ToggleSelector } from './constants';

import type { StyledToggleProps, ToggleSize } from './types.ts';

type ToggleSizeMapType = {
  TOGGLE: {
    width: number;
    height: number;
  };
  DOT: {
    width: number;
    height: number;
  };
  ICON: {
    width: number;
    height: number;
  };
};

const TOGGLE_SIZE_MAP: Record<ToggleSize, ToggleSizeMapType> = {
  regular: {
    TOGGLE: {
      height: 16,
      width: 32,
    },
    DOT: {
      height: 12,
      width: 12,
    },
    ICON: {
      height: 16,
      width: 16,
    },
  },
  large: {
    TOGGLE: {
      height: 20,
      width: 40,
    },
    DOT: {
      height: 16,
      width: 16,
    },
    ICON: {
      height: 20,
      width: 20,
    },
  },
};

export const Root = styled.span.attrs<StyledToggleProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(ToggleSelector.TOGGLE, testId),
}))<StyledToggleProps>`
  width: ${({ size }) => TOGGLE_SIZE_MAP[size].TOGGLE.width}px;
  height: ${({ size }) => TOGGLE_SIZE_MAP[size].TOGGLE.height}px;
  cursor: pointer;
  display: inline-flex;

  position: relative;

  background: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.background.success.bold.default : theme.colors.background.neutral.bold.default};
  border-radius: ${BorderRadius.CIRCULAR};

  &:hover {
    background: ${({ theme, isChecked }) =>
      isChecked ? theme.colors.background.success.bold.hovered : theme.colors.background.neutral.bold.hovered};
  }
  color: ${({ theme }) => theme.colors.icon.inverse};

  &::before {
    content: '';

    position: absolute;
    top: 2px;
    left: ${({ isChecked, size }) =>
      isChecked ? TOGGLE_SIZE_MAP[size].TOGGLE.width - TOGGLE_SIZE_MAP[size].DOT.width - 2 : 2}px;

    width: ${({ size }) => TOGGLE_SIZE_MAP[size].DOT.width}px;
    height: ${({ size }) => TOGGLE_SIZE_MAP[size].DOT.height}px;

    background-color: ${({ theme }) => theme.colors.icon.inverse};
    border-radius: ${BorderRadius.CIRCULAR};

    transition: left ${Duration.Quick}ms;
  }

  &:focus-visible {
    outline: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.border.focused};
    outline-offset: 2px;
  }

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      background-color: ${theme.colors.background.disabled};
      color: ${theme.colors.icon.disabled};

      &::before {
        background-color: ${theme.colors.icon.inverse};
      }

      &:hover {
        background-color: ${theme.colors.background.disabled};
        color: ${theme.colors.icon.disabled};

        &::before {
          background-color: ${theme.colors.icon.inverse};
        }
      }

      &:focus {
        outline: none;
      }
    `}
`;

export const ToggleIcon = styled(Icon)`
  width: ${({ size }) => TOGGLE_SIZE_MAP[size === 16 ? 'regular' : 'large'].ICON.width}px;
  height: ${({ size }) => TOGGLE_SIZE_MAP[size === 16 ? 'regular' : 'large'].ICON.height}px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(ToggleSelector.INPUT, testId),
}))<TestableComponent>`
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;
`;
