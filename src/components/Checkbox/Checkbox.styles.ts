import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { BorderRadius, Spacing, StrokeWidth } from '../../themes';
import { TestableComponent } from '../../types/controls';
import { composeTestingPath } from '../../utils';

import { CheckboxSelector } from './constants';

import type { CheckboxSize, StyledCheckboxProps } from './types';

type CheckboxSizeMapType = Record<
  CheckboxSize,
  {
    width: number;
    height: number;
  }
>;

const checkboxSizeMap: CheckboxSizeMapType = {
  medium: {
    width: 24,
    height: 24,
  },
  small: {
    width: 16,
    height: 16,
  },
  large: {
    width: 32,
    height: 32,
  },
  'x-large': {
    width: 48,
    height: 48,
  },
};

export const Input = styled.input.attrs<StyledCheckboxProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.CHECKBOX, testId),
}))<StyledCheckboxProps>`
  appearance: none;
  width: ${({ size }) => checkboxSizeMap[size].width}px;
  height: ${({ size }) => checkboxSizeMap[size].height}px;
  border: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.colorBorderInput};
  border-radius: ${BorderRadius.X_SMALL};
  cursor: pointer;

  transition-property: background-color, border-color;
  transition-duration: 100ms;

  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorBackgroundInputHover};
  }

  &:focus-visible {
  }
`;

export const Field = styled.label.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.LABEL, testId),
}))<TestableComponent>`
  display: inline-flex;
  gap: ${Spacing.XS};
  align-items: center;
`;

export const Label = styled.span.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(CheckboxSelector.TEXT, testId),
}))<TestableComponent>``;
