import { hexToRGB } from '../../utils/hexToRgb';
import { token } from '../tokens/colors';

export const Colors = {
  // Refactored below
  link: {
    default: token.blue[700],
    pressed: token.blue[800],
  },
  text: {
    default: token.neutral[1000],
    subtle: token.neutral[800],
    subtlest: token.neutral[700],
    inverse: token.neutral[0],
    disabled: token.neutral['400A'],
    selected: token.blue[700],
    brand: token.blue[700],
    danger: token.red[800],
    warning: {
      default: token.orange[800],
      inverse: token.neutral[1000],
    },
    success: token.green[800],
    discovery: token.purple[800],
    information: token.blue[800],
    accent: {
      red: {
        default: token.red[800],
        bolder: token.red[900],
      },
      orange: {
        default: token.orange[800],
        bolder: token.orange[900],
      },
      yellow: {
        default: token.yellow[800],
        bolder: token.yellow[900],
      },
      lime: {
        default: token.lime[800],
        bolder: token.lime[900],
      },
      green: {
        default: token.green[800],
        bolder: token.green[900],
      },
      teal: {
        default: token.teal[800],
        bolder: token.teal[900],
      },
      blue: {
        default: token.blue[800],
        bolder: token.blue[900],
      },
      purple: {
        default: token.purple[800],
        bolder: token.purple[900],
      },
      magenta: {
        default: token.magenta[800],
        bolder: token.magenta[900],
      },
      gray: {
        default: token.neutral[800],
        bolder: '#091E42',
      },
    },
    link: {
      default: token.blue[700],
      pressed: token.blue[800],
      visited: token.purple[800],
    },
  },
  icon: {
    default: token.neutral[800],
    subtle: token.neutral[700],
    inverse: token.neutral[0],
    disabled: token.neutral['400A'],
    selected: token.blue[700],
    brand: token.blue[700],
    danger: token.red[600],
    warning: {
      default: token.orange[600],
      inverse: token.neutral[1000],
    },
    success: token.green[600],
    discovery: token.purple[600],
    information: token.blue[600],
    accent: {
      red: token.red[600],
      orange: token.orange[600],
      yellow: token.yellow[600],
      lime: token.lime[600],
      green: token.green[600],
      teal: token.teal[600],
      blue: token.blue[600],
      purple: token.purple[600],
      magenta: token.magenta[600],
      gray: token.neutral[600],
    },
  },
  border: {
    default: token.neutral['300A'],
    bold: token.neutral[600],
    inverse: token.neutral[0],
    disabled: token.neutral['200A'],
    focused: token.blue[500],
    selected: token.blue[700],
    input: token.neutral['300A'],
    brand: token.blue[700],
    danger: token.red[600],
    warning: token.orange[600],
    success: token.green[600],
    discovery: token.purple[600],
    information: token.blue[600],
    accent: {
      red: token.red[600],
      orange: token.orange[600],
      yellow: token.yellow[600],
      lime: token.lime[600],
      green: token.green[600],
      teal: token.teal[600],
      blue: token.blue[600],
      purple: token.purple[600],
      magenta: token.magenta[600],
      gray: token.neutral[600],
    },
  },

  background: {
    selected: {
      default: token.blue[100],
      bold: {
        default: token.blue[700],
        hovered: token.blue[800],
        pressed: token.blue[900],
      },
    },
    neutral: {
      default: token.neutral['200A'],
      hovered: token.neutral['300A'],
      pressed: token.neutral['400A'],
      bold: {
        default: token.neutral[800],
        hovered: token.neutral[900],
        pressed: token.neutral[1000],
      },
      subtle: {
        hovered: token.neutral['200A'],
        pressed: token.neutral['300A'],
      },
    },
    brand: {
      bold: {
        default: token.blue[700],
        hovered: token.blue[800],
        pressed: token.blue[900],
      },
    },
    information: {
      default: token.blue[100],
      bold: {
        default: token.blue[700],
      },
    },
    success: {
      default: token.green[100],
      bold: {
        default: token.green[700],
        hovered: token.green[800],
      },
    },
    warning: {
      default: token.yellow[100],
      bold: {
        default: token.yellow[300],
        hovered: token.yellow[500],
        pressed: token.yellow[600],
      },
    },
    danger: {
      default: token.red[100],
      bold: {
        default: token.red[600],
        hovered: token.red[800],
        pressed: token.red[900],
      },
    },
    discovery: {
      default: token.purple[100],
      bold: {
        default: token.purple[700],
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
    disabled: token.neutral['100A'],
    input: {
      default: token.neutral[0],
      hovered: token.neutral[100],
      pressed: token.neutral[0],
    },
  },
  elevation: {
    surface: {
      default: token.neutral[0],
      overlay: {
        default: token.neutral[0],
      },
    },
  },
};
