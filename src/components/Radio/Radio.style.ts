import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils.ts';
import { BorderRadius, FontSize, LineHeight, Spacing } from '@/themes/theme.ts';
import { defaultText } from '@/themes/typography.ts';
import { TestableComponent } from '@/types/controls.ts';
import { composeTestingPath } from '@/utils/comopseTestingPath.ts';

import { RadioSelector } from './constants.ts';

import type { RadioInputProps } from './types.ts';

const RADIO_WIDTH = 14;
const RADIO_HEIGHT = 14;

const WRAPPER_WIDTH = 24;
const WRAPPER_HEIGHT = 24;

export const Label = styled.label.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(RadioSelector.LABEL, testId),
}))<TestableComponent>`
  display: inline-flex;
  gap: ${Spacing.XS};
  align-items: center;
`;

export const Wrapper = styled.span`
  width: ${WRAPPER_WIDTH}px;
  height: ${WRAPPER_HEIGHT}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(RadioSelector.TEXT, testId),
}))<TestableComponent>`
  ${defaultText}
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XS};
`;

export const Input = styled.input.attrs<RadioInputProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(RadioSelector.RADIO, testId),
}))<RadioInputProps>`
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;

  width: ${RADIO_WIDTH}px;
  height: ${RADIO_HEIGHT}px;
  border-radius: ${BorderRadius.CIRCULAR};
  background-color: ${({ theme }) => theme.colors.background.input.default};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, isInvalid }) => (isInvalid ? theme.colors.border.danger : theme.colors.border.input)};

  transition: background 100ms, border-color 100ms;

  &::after {
    content: '';

    transition: background 100ms;

    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: ${BorderRadius.CIRCULAR};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.input.hovered};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.input.pressed};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focused};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.background.selected.bold.default};
    border-color: ${({ theme, isInvalid }) => (isInvalid ? theme.colors.border.danger : theme.colors.border.input)};

    &::after {
      content: '';
      background-color: ${({ theme }) => theme.colors.icon.inverse};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.border.focused};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.background.disabled};
    border-color: ${({ theme }) => theme.colors.border.disabled};

    &:checked::after {
      content: '';
      background-color: ${({ theme }) => theme.colors.icon.disabled};
    }
  }
`;
