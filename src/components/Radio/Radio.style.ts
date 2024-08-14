import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils.ts';
import { BorderRadius, FontSize, LineHeight, Spacing } from '../../themes/theme.ts';
import { defaultText } from '../../themes/typography.ts';
import { TestableComponent } from '../../types/controls.ts';
import { composeTestingPath } from '../../utils';

import { RadioSelector } from './constants.ts';
import { RadioInputProps } from './types.ts';

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
  color: ${(props) => props.theme.colors.colorTextDefault};
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
  background-color: ${(props) => props.theme.colors.colorBackgroundInputDefault};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.isInvalid ? props.theme.colors.colorBorderDanger : props.theme.colors.colorBorderInput};

  transition:
    background 100ms,
    border-color 100ms;

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
    background-color: ${(props) => props.theme.colors.colorBackgroundInputHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.colorBackgroundInputPress};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.colorBorderFocused};
  }

  &:checked {
    background-color: ${(props) => props.theme.colors.colorBackgroundSelectedBold};
    border-color: ${(props) =>
      props.isInvalid ? props.theme.colors.colorBorderDanger : props.theme.colors.colorBorderInput};

    &::after {
      content: '';
      background-color: ${(props) => props.theme.colors.colorIconInverse};
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.colorBorderFocused};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.colorBackgroundDisabled};
    border-color: ${(props) => props.theme.colors.colorBorderDisabled};

    &:checked::after {
      content: '';
      background-color: ${(props) => props.theme.colors.colorIconDisabled};
    }
  }
`;
