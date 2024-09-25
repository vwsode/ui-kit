export enum Spacing {
  NONE = '0px',
  XXS = '2px',
  XS = '4px',
  S_NUDGE = '6px',
  S = '8px',
  M_NUDGE = '10px',
  M = '12px',
  L = '16px',
  XL = '20px',
  XXL = '24px',
  XXXL = '32px',
}

export enum BorderRadius {
  NONE = '0px',
  X_SMALL = '2px',
  SMALL = '3px',
  MEDIUM = '4px',
  LARGE = '6px',
  X_LARGE = '8px',
  CIRCULAR = '10000px',
}

export enum StrokeWidth {
  THIN = '1px',
  THICK = '2px',
  THICKER = '3px',
  THICKEST = '4px',
}

export enum Font {
  Base = 'SF Pro Text, Inter, Segoe UI, sans-serif',
  Monospace = 'JetBrains Mono, Consolas, Courier',
  Numeric = 'Bahnschrift',
}

export enum FontSize {
  XXXS = '10px',
  XXS = '12px',
  XS = '14px',
  S = '16px',
  M = '20px',
  L = '24px',
  XL = '28px',
  XXL = '32px',
  XXXL = '40px',
  XXXXL = '68px',
}

export enum FontWeight {
  Normal = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

export enum LineHeight {
  XXXXS = '12px',
  XXXS = '14px',
  XXS = '16px',
  XS = '20px',
  S = '22px',
  DEFAULT = '24px',
  M = '26px',
  L = '32px',
  XL = '36px',
  XXL = '40px',
  XXXL = '52px',
  XXXXL = '92px',
}

export enum Layer {
  Static = 0,
  Foreground = 100,
  EditBlockOverlay = 200,
  Toast = 500,
  Popup = 1000,
  Notification = 1500,
  Dropdown = 2000,
  SelectMenu = 3000,
  Preview = 5000,
  Tooltip = 100000,
}

export enum Duration {
  Quick = 100,
  Default = 250,
}

export enum Shadow {
  XS = '0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.15)',
  S = '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)',
  M = '0px 4px 8px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)',
  L = '0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)',
  XL = '0px 14px 28.8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.2)',
  XXL = '0px 32px 64px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.2)',
}
