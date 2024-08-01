import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '../../constants/TestUtils';
import { Spacing } from '../../themes';
import { Colors } from '../../themes/standard/colors';
import { textBanner } from '../../themes/typography';
import { composeTestingPath } from '../../utils';

import { BannerSelector } from './constants';
import { BannerAppearance, StyledBannerProps } from './types';
import { TestableComponent } from '../../types/controls';

const colorMap: Record<
  BannerAppearance,
  {
    backgroundColor: string;
    color: string;
  }
> = {
  announcement: {
    backgroundColor: Colors.colorBannerAnnouncement,
    color: Colors.colorBannerAnnouncementText,
  },
  error: {
    backgroundColor: Colors.colorBannerError,
    color: Colors.colorBannerErrorText,
  },
  warning: {
    backgroundColor: Colors.colorBannerWarning,
    color: Colors.colorBannerWarningText,
  },
};

export const Root = styled.div.attrs<StyledBannerProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BannerSelector.BANNER, testId),
}))<StyledBannerProps>`
  padding: ${Spacing.M};
  width: 100%;

  ${({ appearance }) => css`
    background-color: ${colorMap[appearance].backgroundColor};
    color: ${colorMap[appearance].color};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: ${Spacing.XS};
`;

export const Content = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BannerSelector.BANNER_CONTENT, testId),
}))<TestableComponent>`
  ${textBanner}
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
