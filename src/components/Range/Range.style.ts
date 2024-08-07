import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { BorderRadius } from '../../themes';
import { Colors } from '../../themes/standard/colors';
import { TestableComponent } from '../../types/controls';
import { composeTestingPath } from '../../utils';

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
    ${Colors.colorRangeSliderDefault} var(${SLIDER_WIDTH_VAR}),
    transparent var(${SLIDER_WIDTH_VAR})
  );

  cursor: pointer;

  &::-webkit-slider-runnable-track {
    background-color: ${Colors.colorRangeTrackDefault};
    height: ${TRACK_HEIGHT}px;
    border-radius: ${BorderRadius.SMALL};

    transition: background 100ms;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: ${THUMB_WIDTH}px;
    height: ${THUMB_HEIGHT}px;
    background-color: ${Colors.colorRangeThumbDefault};
    border-radius: ${BorderRadius.CIRCULAR};
    margin-top: ${TRACK_HEIGHT / 2 - THUMB_HEIGHT / 2}px;

    transition: background 100ms;
  }

  &:hover {
    &::-webkit-slider-runnable-track {
      background-color: ${Colors.colorRangeTrackHover};
    }
  }

  &:focus {
    &::-webkit-slider-runnable-track {
      background-color: ${Colors.colorRangeTrackDefault};
    }
  }

  &:focus-visible {
    &::-webkit-slider-thumb {
      outline: 2px solid ${Colors.colorRangeThumbFocusRing};
      outline-offset: 2px;
    }
  }

  &:active {
    &::-webkit-slider-runnable-track {
      background-color: ${Colors.colorRangeTrackPress};
    }

    &::-webkit-slider-thumb {
      background-color: ${Colors.colorRangeThumbPress};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;

    &::-webkit-slider-runnable-track {
      background-color: ${Colors.colorRangeTrackDisabled};
    }

    &::-webkit-slider-thumb {
      background-color: ${Colors.colorRangeThumbDisabled};
    }
  }
`;
