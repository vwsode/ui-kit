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
};
