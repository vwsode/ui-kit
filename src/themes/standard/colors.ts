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
};
