import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, Duration, StrokeWidth } from '@/themes';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { RangeSelector } from './constants';

const TRACK_HEIGHT = 4;
const THUMB_WIDTH = 16;
const THUMB_HEIGHT = 16;

export const SLIDER_WIDTH_VAR = '--slider-width';

export const Root = styled.input.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(RangeSelector.RANGE, testId),
}))<TestableComponent>`
  width: 100%;

  appearance: none;
  outline: none;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background.neutral.bold.default} var(${SLIDER_WIDTH_VAR}),
    transparent var(${SLIDER_WIDTH_VAR})
  );

  cursor: pointer;

  &::-webkit-slider-runnable-track {
    background-color: ${({ theme }) => theme.colors.background.neutral.default};
    height: ${TRACK_HEIGHT}px;
    border-radius: ${BorderRadius.SMALL};

    transition: background-color ${Duration.Quick};
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: ${THUMB_WIDTH}px;
    height: ${THUMB_HEIGHT}px;
    background-color: ${({ theme }) => theme.colors.background.neutral.bold.default};
    border-radius: ${BorderRadius.CIRCULAR};
    margin-top: ${TRACK_HEIGHT / 2 - THUMB_HEIGHT / 2}px;

    transition: background-color ${Duration.Quick};
  }

  &:hover {
    &::-webkit-slider-runnable-track {
      background-color: ${({ theme }) => theme.colors.background.neutral.default};
    }
  }

  &:focus {
    &::-webkit-slider-runnable-track {
      background-color: ${({ theme }) => theme.colors.background.neutral.default};
    }
  }

  &:focus-visible {
    &::-webkit-slider-thumb {
      outline: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.border.focused};
      outline-offset: 2px;
    }
  }

  &:active {
    &::-webkit-slider-runnable-track {
      background-color: ${({ theme }) => theme.colors.background.neutral.pressed};
    }

    &::-webkit-slider-thumb {
      background-color: ${({ theme }) => theme.colors.background.neutral.bold.pressed};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;

    &::-webkit-slider-runnable-track {
      background-color: ${({ theme }) => theme.colors.background.neutral.default};
    }

    &::-webkit-slider-thumb {
      background-color: ${({ theme }) => theme.colors.background.neutral.bold.default};
    }
  }
`;
