import { hexToRGB } from '../../utils/hexToRgb';

const tokens = {
  blue: {
    700: '#0C66E4',
    800: '#0055CC',
    900: '#09326C',
  },
};

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

  colorStatusLabelCriticalBg: '#C4314B',
  colorStatusLabelCriticalText: '#FFFFFF',
  colorStatusLabelError: '#C4314B',
  colorStatusLabelWarning: '#A16114',
  colorStatusLabelSuccess: '#237B4B',
  colorStatusLabelInfo: '#252525',

  // Refactored below
  link: {
    default: '#0C66E4',
    pressed: '#0055CC',
  },
  text: {
    default: '#172B4D',
    subtle: '#44546F',
    subtlest: '#626F86',
    inverse: '#FFFFFF',
    disabled: hexToRGB('#091E42', 0.31),
    selected: '#0C66E4',
    brand: '#0C66E4',
    danger: '#AE2E24',
    warning: {
      default: '#A54800',
      inverse: '#172B4D',
    },
    success: '#216E4E',
    discovery: '#5E4DB2',
    information: '#0055CC',
    accent: {
      red: {
        default: '#AE2E24',
        bolder: '#5D1F1A',
      },
      orange: {
        default: '#A54800',
        bolder: '#702E00',
      },
      yellow: {
        default: '#7F5F01',
        bolder: '#533F04',
      },
      lime: {
        default: '#4C6B1F',
        bolder: '#37471F',
      },
      green: {
        default: '#216E4E',
        bolder: '#164B35',
      },
      teal: {
        default: '#206A83',
        bolder: '#164555',
      },
      blue: {
        default: '#0055CC',
        bolder: '#09326C',
      },
      purple: {
        default: '#5E4DB2',
        bolder: '#352C63',
      },
      magenta: {
        default: '#943D73',
        bolder: '#50253F',
      },
      gray: {
        default: '#44546F',
        bolder: '#091E42',
      },
    },
    link: {
      default: '#0C66E4',
      pressed: '#0055CC',
      visited: '#5E4DB2',
    },
  },
  icon: {
    default: '#44546F',
    subtle: '#626F86',
    inverse: '#FFFFFF',
    disabled: hexToRGB('#091E42', 0.31),
    selected: '#0C66E4',
    brand: '#0C66E4',
    danger: '#C9372C',
    warning: {
      default: '#E56910',
      inverse: '#172B4D',
    },
    success: '#22A06B',
    discovery: '#8270DB',
    information: '#1D7AFC',
    accent: {
      red: '#C9372C',
      orange: '#E56910',
      yellow: '#B38600',
      lime: '#6A9A23',
      green: '#22A06B',
      teal: '#2898BD',
      blue: '#1D7AFC',
      purple: '#8270DB',
      magenta: '#CD519D',
      gray: '#758195',
    },
  },
  border: {
    default: hexToRGB('#091E42', 0.14),
    bold: '#758195',
    inverse: '#FFFFFF',
    disabled: hexToRGB('#091E42', 0.06),
    focused: '#388BFF',
    selected: '#0C66E4',
    input: hexToRGB('#091E42', 0.14),
    brand: '#0C66E4',
    danger: '#E2483D',
    warning: '#E56910',
    success: '#22A06B',
    discovery: '#8270DB',
    information: '#1D7AFC',
    accent: {
      red: '#E2483D',
      orange: '#E56910',
      yellow: '#B38600',
      lime: '#6A9A23',
      green: '#22A06B',
      teal: '#2898BD',
      blue: '#1D7AFC',
      purple: '#8270DB',
      magenta: '#CD519D',
      gray: '#758195',
    },
  },

  background: {
    selected: {
      default: '#E9F2FF',
      bold: {
        default: tokens.blue[700],
        hovered: tokens.blue[800],
        pressed: tokens.blue[900],
      },
    },
    neutral: {
      default: hexToRGB('#091E42', 0.06),
      hovered: hexToRGB('#091E42', 0.14),
      pressed: hexToRGB('#091E42', 0.31),
      bold: {
        default: '#44546F',
        hovered: '#2C3E5D',
        pressed: '#172B4D',
      },
      subtle: {
        hovered: hexToRGB('#091E42', 0.06),
        pressed: hexToRGB('#091E42', 0.14),
      },
    },
    brand: {
      bold: {
        default: '#0C66E4',
        hovered: '#0055CC',
        pressed: '#09326C',
      },
    },
    information: {
      default: '#E9F2FF',
      bold: {
        default: '#0C66E4',
      },
    },
    success: {
      default: '#DCFFF1',
      bold: {
        default: '#1F845A',
        hovered: '#216E4E',
      },
    },
    warning: {
      default: '#FFF7D6',
      bold: {
        default: '#F5CD47',
        hovered: '#E2B203',
        pressed: '#CF9F02',
      },
    },
    danger: {
      default: '#FFECEB',
      bold: {
        default: '#C9372C',
        hovered: '#AE2E24',
        pressed: '#5D1F1A',
      },
    },
    discovery: {
      default: '#F3F0FF',
      bold: {
        default: '#6E5DC6',
      },
    },
    inverse: {
      subtle: {
        default: hexToRGB('#000000', 0.16),
        hovered: hexToRGB('#000000', 0.24),
        focused: '',
        pressed: hexToRGB('#000000', 0.32),
      },
    },
    disabled: hexToRGB('#091E42', 0.03),
    input: {
      default: '#FFFFFF',
      hovered: '#F7F8F9',
      pressed: '#FFFFFF',
    },
  },
  elevation: {
    surface: {
      default: '#FFFFFF',
      overlay: {
        default: '#FFFFFF',
      },
    },
  },
};
