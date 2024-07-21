import { Font, FontSize, FontWeight, LineHeight } from './theme';
import { css } from 'styled-components';

const defaultStyleText = {
  fontFamily: Font.Base,
  letterSpacing: 0,
};

export const captionStyle1 = {
  ...defaultStyleText,
  fontWeight: FontWeight.Normal,
  fontSize: FontSize.XXS,
  lineHeight: LineHeight.XXS,
};

export const captionStyle1Storng = {
  ...defaultStyleText,
  fontWeight: FontWeight.Medium,
  fontSize: FontSize.XXS,
  lineHeight: LineHeight.XXS,
};

export const captionStyle1Stornger = {
  ...defaultStyleText,
  fontWeight: FontWeight.Bold,
  fontSize: FontSize.XXS,
  lineHeight: LineHeight.XXS,
};

export const captionStyle2 = {
  ...defaultStyleText,
  fontWeight: FontWeight.Normal,
  fontSize: FontSize.XXXS,
  lineHeight: LineHeight.XXXS,
};

export const captionStyle2Storng = {
  ...defaultStyleText,
  fontWeight: FontWeight.Medium,
  fontSize: FontSize.XXXS,
  lineHeight: LineHeight.XXXS,
};

export const bodyStyle1 = {
  ...defaultStyleText,
  fontWeight: FontWeight.Normal,
  lineHeight: LineHeight.XS,
  fontSize: FontSize.XS,
};

export const bodyStyle1Strong = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  lineHeight: LineHeight.XS,
  fontSize: FontSize.XS,
};

export const bodyStyle1Stronger = {
  ...defaultStyleText,
  fontWeight: FontWeight.Bold,
  lineHeight: LineHeight.XS,
  fontSize: FontSize.XS,
};

export const bodyStyle2 = {
  ...defaultStyleText,
  fontWeight: FontWeight.Normal,
  lineHeight: LineHeight.S,
  fontSize: FontSize.S,
};

export const bodyStyle2Strong = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  lineHeight: LineHeight.S,
  fontSize: FontSize.S,
};

export const bodyStyle2Stronger = {
  ...defaultStyleText,
  fontWeight: FontWeight.Bold,
  lineHeight: LineHeight.S,
  fontSize: FontSize.S,
};

export const subtitleStyle1 = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.M,
  lineHeight: LineHeight.M,
};

export const subtitleStyle2 = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.S,
  lineHeight: LineHeight.S,
};

export const subtitleStyle2Stronger = {
  ...defaultStyleText,
  fontWeight: FontWeight.Bold,
  fontSize: FontSize.S,
  lineHeight: LineHeight.S,
};

export const titleStyle3 = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.M,
  lineHeight: LineHeight.M,
};

export const titleStyle2 = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.L,
  lineHeight: LineHeight.L,
};

export const titleStyle1 = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.XL,
  lineHeight: LineHeight.XL,
};

export const largeTitleStyle = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.XXXL,
  lineHeight: LineHeight.XXXL,
};

export const displayStyle = {
  ...defaultStyleText,
  fontWeight: FontWeight.SemiBold,
  fontSize: FontSize.XXXXL,
  lineHeight: LineHeight.XXXXL,
};

export const defaultText = css`
  font-family: ${Font.Base};
  letter-spacing: 0;
`;

export const textTitle1 = css`
  ${defaultText}
  font-size: ${FontSize.XXL};
  line-height: ${LineHeight.XXL};
`;

export const textTitle2 = css`
  ${defaultText}
  font-size: ${FontSize.XL};
  line-height: ${LineHeight.XL};
`;

export const textTitle3 = css`
  ${defaultText}
  font-size: ${FontSize.L};
  line-height: ${LineHeight.L};
`;

export const textHeadline = css`
  ${defaultText}
  font-size: ${FontSize.M};
  line-height: ${LineHeight.M};
`;

export const textSubheadline = css`
  ${defaultText}
  font-size: ${FontSize.S};
  line-height: ${LineHeight.S};
`;

export const textBody = css`
  ${defaultText}
  font-size: ${FontSize.XS};
  line-height: ${LineHeight.XS};
`;

export const textCaption = css`
  ${defaultText}
  font-size: ${FontSize.XXS};
  line-height: ${LineHeight.XXS};
`;
