import { css } from 'styled-components';

import interMediumWoff from './fonts/Inter-Medium.woff';
import interMediumWoff2 from './fonts/Inter-Medium.woff2';
import interRegularWoff from './fonts/inter-regular.woff';
import interRegularWoff2 from './fonts/inter-regular.woff2';

export const fonts = css`
  /* Inter */

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src:
      local('Inter'),
      local('Inter-Regular'),
      url(${interRegularWoff2}) format('woff2'),
      url(${interRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src:
      local('Inter'),
      local('Inter-Medium'),
      url(${interMediumWoff2}) format('woff2'),
      url(${interMediumWoff}) format('woff');
  }

  /* JetBrains Mono */

  /* cyrillic-ext */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OTk6OThhvAWV8.woff)
      format('woff');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

  /* cyrillic */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTPlOTk6OThhvAWV8.woff)
      format('woff');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  /* greek */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOVOTk6OThhvAWV8.woff)
      format('woff');
    unicode-range: U+0370-03FF;
  }

  /* vietnamese */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNVOTk6OThhvAWV8.woff)
      format('woff');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }

  /* latin-ext */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNFOTk6OThhvAWV8.woff)
      format('woff');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOTk6OThhvA.woff)
      format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export const fontSmoothing = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const textEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
