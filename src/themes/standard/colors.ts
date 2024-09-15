import { hexToRGB } from '../../utils/hexToRgb';

export const UIColors = {
  colorBrandUI1: '#3D3E78',
  colorBrandUI2: '#444791',
  colorBrandUI3: '#5B5FC7',
  colorBrandUI4: '#9299F7',
  colorBrandUI5: '#E8EBFA',

  colorNeutralUI1: '#242424',
  colorNeutralUI2: '#424242',
  colorNeutralUI3: '#616161',
  colorNeutralUI4: '#C7C7C7',
  colorNeutralUI5: '#D1D1D1',
  colorNeutralUI6: '#F5F5F5',
  colorNeutralUI7: '#FFFFFF',

  colorSecondaryUI1: '#C4314B',
  colorSecondaryUI2: '#835C00',
  colorSecondaryUI3: '#237B4B',
  colorSecondaryUI4: '#E7F2DA',
  colorSecondaryUI5: '#FBF6D9',
  colorSecondaryUI6: '#FCF4F6',
} as const;

export const Colors = {
  ...UIColors,

  colorTextPrimary: '#242424',
  colorTextSecondary: '#424242',
  colorTextTeritary: '#616161',

  colorLinkRest: '#5B5FC7',
  colorLinkHover: '#5B5FC7',
  colorLinkDisabled: '#C7C7C7',

  colorTooltipBackground: '#424242',

  colorStatusLabelCriticalBg: '#C4314B',
  colorStatusLabelCriticalText: '#FFFFFF',
  colorStatusLabelError: '#C4314B',
  colorStatusLabelWarning: '#A16114',
  colorStatusLabelSuccess: '#237B4B',
  colorStatusLabelInfo: '#252525',

  /**
   * Badge colors.
   */
  colorBadgeDefaultBg: hexToRGB('#091E42', 0.6),
  colorBadgeDefaultText: '#172B4D',
  colorBadgePrimaryBg: '#0C66E4',
  colorBadgePrimaryText: '#FFFFFF',
  colorBadgePrimaryInvertBg: '#FFFFFF',
  colorBadgePrimaryInvertText: '#0C66E4',
  colorBadgeImportantBg: '#C9372C',
  colorBadgeImportantText: '#FFFFFF',
  colorBadgeAddedBg: '#DCFFF1',
  colorBadgeAddedText: '#216E4E',
  colorBadgeRemovedBg: '#FFECEB',
  colorBadgeRemovedText: '#AE2E24',

  /**
   * Lozenge colors.
   */
  colorLozengeDefault: hexToRGB('#091E42', 0.06),
  colorLozengeDefaultText: '#44546F',
  colorLozengeInprogress: '#E9F2FF',
  colorLozengeInprogressText: '#0055CC',
  colorLozengeMoved: '#FFF7D6',
  colorLozengeMovedText: '#A54800',
  colorLozengeNew: '#F3F0FF',
  colorLozengeNewText: '#5E4DB2',
  colorLozengeRemoved: '#FFECEB ',
  colorLozengeRemovedText: '#AE2E24',
  colorLozengeSuccess: '#DCFFF1',
  colorLozengeSuccessText: '#216E4E',
  colorLozengeBoldDefault: '#44546F',
  colorLozengeBoldDefaultText: '#FFFFFF',
  colorLozengeBoldInprogress: '#0C66E4',
  colorLozengeBoldInprogressText: '#FFFFFF',
  colorLozengeBoldMoved: '#F5CD47',
  colorLozengeBoldMovedText: '#172B4D',
  colorLozengeBoldNew: '#6E5DC6',
  colorLozengeBoldNewText: '#FFFFFF',
  colorLozengeBoldRemoved: '#C9372C ',
  colorLozengeBoldRemovedText: '#FFFFFF',
  colorLozengeBoldSuccess: '#1F845A',
  colorLozengeBoldSuccessText: '#FFFFFF',

  /**
   * Spinner colors.
   */
  colorSpinner: '#626F86',

  /**
   * Banner colors.
   */
  colorBannerWarning: '#F5CD47',
  colorBannerWarningText: '#172B4D',

  colorBannerError: '#C9372C',
  colorBannerErrorText: '#FFFFFF',

  colorBannerAnnouncement: '#44546F',
  colorBannerAnnouncementText: '#FFFFFF',

  /**
   * Tabs colors.
   */
  colorTabSelected: '#0C66E4',
  colorTabText: '#44546F',
  colorTabTextPress: '#172B4D',
  colorTabHover: hexToRGB('#091E42', 0.086),

  colorTabsBorder: hexToRGB('#091E42', 0.086),

  /**
   * ProgressBar colors.
   */
  colorProgressBarDefaultBg: hexToRGB('#091E42', 0.06),
  colorProgressBarDefaultProgress: '#44546F',

  colorProgressBarInverseBg: hexToRGB('#000000', 0.16),
  colorProgressBarInverseProgress: '#FFFFFF',

  colorProgressBarSuccessBg: '#1F845A',
  colorProgressBarSuccessProgress: '#1F845A',

  /**
   * Range colors.
   */
  colorRangeTrackDefault: hexToRGB('#091E42', 0.06),
  colorRangeTrackHover: hexToRGB('#091E42', 0.16),
  colorRangeTrackPress: hexToRGB('#091E42', 0.29),
  colorRangeTrackDisabled: hexToRGB('#091E42', 0.06),

  colorRangeSliderDefault: '#44546F',
  colorRangeSliderHover: '#2C3E5D',
  colorRangeSliderPress: '#172B4D',

  colorRangeThumbDefault: '#44546F',
  colorRangeThumbHover: '#2C3E5D',
  colorRangeThumbPress: '#172B4D',
  colorRangeThumbDisabled: '#44546F',
  colorRangeThumbFocusRing: '#388BFF',

  /**
   * =============================================
   * =============================================
   * =============================================
   */

  /**
   * Text colors.
   */
  colorTextDefault: '#172B4D',
  colorTextInverse: '#FFFFFF',
  colorTextWarningInverse: '#172B4D',
  colorTextSelected: '#0C66E4',
  colorTextDisabled: hexToRGB('#091E42', 0.31),
  colorTextSubtle: '#44546F',

  /**
   * Link colors.
   */
  colorLinkDefault: '#0C66E4',
  colorLinkPress: '#0055CC',

  /**
   * Border colors.
   */
  colorBorderInput: hexToRGB('#091E42', 0.14),
  colorBorderFocused: '#388BFF',
  colorBorderDisabled: hexToRGB('#091E42', 0.06),
  colorBorderDanger: '#E2483D',

  /**
   * Icon colors.
   */
  colorIconDisabled: hexToRGB('#091E42', 0.31),
  colorIconInverse: '#FFFFFF',
  colorIconWarningInverse: '#172B4D',

  /**
   * Background colors.
   */
  colorBackgroundWarningBoldDefault: '#F5CD47',
  colorBackgroundWarningBoldHover: '#E2B203',
  colorBackgroundWarningBoldPress: '#CF9F02',

  colorBackgroundNeutralDefault: hexToRGB('#091E42', 0.06),
  colorBackgroundNeutralHover: hexToRGB('#091E42', 0.14),
  colorBackgroundNeutralPress: hexToRGB('#091E42', 0.31),

  colorBackgroundNeutralBoldDefault: '#44546F',
  colorBackgroundNeutralBoldHover: '#2C3E5D',
  colorBackgroundNeutralBoldPress: '#172B4D',

  colorBackgroundNeutralSubtleHover: hexToRGB('#091E42', 0.06),
  colorBackgroundNeutralSubtlePress: hexToRGB('#091E42', 0.14),

  colorBackgroundDisabled: hexToRGB('#091E42', 0.03),

  colorBackgroundSelectedDefault: '#E9F2FF',
  colorBackgroundSelectedBold: '#0C66E4',

  colorBackgroundInputDefault: '#FFFFFF',
  colorBackgroundInputHover: '#F7F8F9',
  colorBackgroundInputPress: '#FFFFFF',

  colorBackgroundSuccessBoldDefault: '#1F845A',
  colorBackgroundSuccessBoldHover: '#216E4E',

  colorBackgroundBrandBoldDefault: '#0C66E4',
  colorBackgroundBrandBoldHover: '#0055CC',
  colorBackgroundBrandBoldPress: '#09326C',

  colorBackgroundDangerBoldDefault: '#C9372C',
  colorBackgroundDangerBoldHover: '#AE2E24',
  colorBackgroundDangerBoldPress: '#5D1F1A',
};
