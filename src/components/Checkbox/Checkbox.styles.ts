import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Duration, Spacing, StrokeWidth } from '@/themes';
import { textBody } from '@/themes/typography';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { CheckboxSelector } from './constants';

import type { StyledCheckboxProps, StyledTextProps } from './types';

const CHECKBOX_WIDTH = 24;
const CHECKBOX_HEIGHT = 24;

const ARROW_WIDTH = 6;
const ARROW_HEIGHT = 8;

export const Label = styled.label.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.LABEL, testId),
}))<TestableComponent>`
  display: inline-flex;
  align-items: center;
  gap: ${Spacing.XS};
  gap: ${Spacing.XS};
`;

export const InputBox = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.INPUT_BOX, testId),
}))<TestableComponent>`
  width: ${CHECKBOX_WIDTH}px;
  height: ${CHECKBOX_HEIGHT}px;
  padding: 4px;
`;

export const RequiredSymbol = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.REQUIRED_SYMBOL, testId),
}))<TestableComponent>`
  color: ${({ theme }) => theme.colors.text.danger};
`;

export const Text = styled.span.attrs<StyledTextProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.TEXT, testId),
}))<StyledTextProps>`
  ${textBody}
  color: ${({ theme, isDisabled }) => (isDisabled ? theme.colors.text.disabled : theme.colors.text.default)};
`;

export const Input = styled.input.attrs<StyledCheckboxProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.CHECKBOX, testId),
}))<StyledCheckboxProps>`
  cursor: pointer;
  appearance: none;

  position: relative;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: ${BorderRadius.SMALL};

  background-color: ${({ theme }) => theme.colors.background.input.default};
  border: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.border.input};

  transition-property: border-color, background-color;
  transition-duration: ${Duration.Quick}ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.input.hovered};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.input.pressed};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border.focused};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.background.selected.bold.default};
    border-color: ${({ theme }) => theme.colors.background.selected.bold.default};

    &::before {
      content: '';
    }
  }

  &:checked:active {
    background-color: ${({ theme }) => theme.colors.background.selected.bold.hovered};
  }

  &::before {
    position: absolute;
    left: 50%;
    top: 38%;

    width: ${ARROW_WIDTH}px;
    height: ${ARROW_HEIGHT}px;

    border: solid ${({ theme }) => theme.colors.icon.inverse};
    border-width: 0 ${StrokeWidth.THICK} ${StrokeWidth.THICK} 0;
    opacity: 1;

    transform: translate(-50%, -50%) rotate(45deg);
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border-color: ${({ theme }) => theme.colors.border.danger};

      &:checked,
      &:hover,
      &:active,
      &:focus-visible {
        border-color: ${({ theme }) => theme.colors.border.danger};
      }
    `}

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.background.disabled};

    &::before {
      border-color: ${({ theme }) => theme.colors.icon.disabled};
    }
  }

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0;
        height: 8px;
        border: solid ${({ theme }) => theme.colors.icon.inverse};
        border-width: 0 ${StrokeWidth.THICK} 0 0;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    `}
`;
