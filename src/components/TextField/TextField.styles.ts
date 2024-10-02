import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Duration, Font, FontSize, LineHeight, Spacing, StrokeWidth } from '@/themes';
import { composeTestingPath } from '@/utils';

import { TextFieldSelector } from './constants';
import { FieldStyledProps, InputStyledProps } from './types';

export const Field = styled.div.attrs<FieldStyledProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TextFieldSelector.FIELD, testId),
}))<FieldStyledProps>`
  border-radius: ${BorderRadius.SMALL};
  border-width: ${StrokeWidth.THICK};
  border-style: solid;
  border-color: ${({ theme, appearance }) => (appearance === 'standard' ? theme.colors.border.input : 'transparent')};

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ isCompact }) => (!isCompact ? `0 ${Spacing.S}` : `0 ${Spacing.S_NUDGE}`)};
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background.input.default};

  transition: background-color ${Duration.Quick}ms, border-color ${Duration.Quick}ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.input};
    background-color: ${({ theme }) => theme.colors.background.input.hovered};
  }

  &:active,
  &:hover:active {
    background-color: ${({ theme }) => theme.colors.background.input.pressed};
    border-color: ${({ theme }) => theme.colors.border.focused};
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.background.input.pressed};
    border-color: ${({ theme }) => theme.colors.border.focused};
  }

  ${({ isInvalid, theme }) =>
    isInvalid &&
    css`
      border-color: ${theme.colors.border.danger};

      &:hover,
      &:active,
      &:focus-within {
        border-color: ${theme.colors.border.danger};
      }
    `}

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      border-color: ${theme.colors.border.disabled};
      background-color: ${theme.colors.background.disabled};

      &:hover,
      &:active,
      &:focus-within {
        border-color: ${theme.colors.border.disabled};
        background-color: ${theme.colors.background.disabled};
      }
    `}

    ${({ appearance }) =>
    appearance === 'none' &&
    css`
      border-color: transparent;
      background-color: transparent;

      &:hover,
      &:active,
      &:focus-within {
        border-color: transparent;
        background-color: transparent;
      }
    `}
`;

export const Input = styled.input.attrs<InputStyledProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(TextFieldSelector.INPUT, testId),
}))<InputStyledProps>`
  appearance: none;
  border: none;
  outline: none;

  width: 100%;
  padding: ${({ isCompact }) => (!isCompact ? `${Spacing.S} 0` : `${Spacing.XS} 0`)};

  font-family: ${({ isMonospaced }) => (isMonospaced ? Font.Monospace : Font.Base)};
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XS};

  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.subtlest};
  }

  &:disabled,
  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;
