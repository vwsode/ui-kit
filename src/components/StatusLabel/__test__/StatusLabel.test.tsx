import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '../../../contexts/ThemeContext';
import { Icon } from '../../../icons';
import { TextSelector } from '../../Text/constants';
import { StatusLabelSelector } from '../constants';
import { StatusLabel } from '../StatusLabel';

import { MOCK_TEXT, MOCK_TYPE } from './mocks';

describe('StatusLabel component: ', () => {
  const getStatusLabel = () => screen.getByTestId(StatusLabelSelector.STATUS_LABEL);
  const getStatusLabelText = () => screen.getByTestId(`${TextSelector.TEXT}.${StatusLabelSelector.STATUS_LABEL}`);
  const getStatusLabelIcon = (iconName: string) =>
    screen.getByTestId(`${StatusLabelSelector.STATUS_LABEL_ICON}.${iconName}`);

  it('should render componenet with text correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <StatusLabel title={MOCK_TEXT} type={MOCK_TYPE} />
      </ThemeProvider>,
    );

    const statusLabel = getStatusLabel();
    const statusLabelText = getStatusLabelText();
    expect(statusLabel).toBeInTheDocument();
    expect(statusLabelText).toHaveTextContent(MOCK_TEXT);
  });

  it('should render the correct icon based on the type prop', () => {
    render(
      <ThemeProvider themeName="standard">
        <StatusLabel title={MOCK_TEXT} type={MOCK_TYPE} />
      </ThemeProvider>,
    );

    const statusLabel = getStatusLabel();
    const statusLabelIcon = getStatusLabelIcon(MOCK_TYPE);

    expect(statusLabel).toBeInTheDocument();
    expect(statusLabelIcon).toBeInTheDocument();
  });

  it('should render custom icon if icon props is provided', () => {
    render(
      <ThemeProvider themeName="standard">
        <StatusLabel
          title={MOCK_TEXT}
          type={MOCK_TYPE}
          icon={<Icon testId={`${StatusLabelSelector.STATUS_LABEL_ICON}.custom`} size={20} type="checkrmark-circle" />}
        />
      </ThemeProvider>,
    );

    const statusLabel = getStatusLabel();
    const statusLabelIcon = getStatusLabelIcon('custom');

    expect(statusLabel).toBeInTheDocument();
    expect(statusLabelIcon).toBeInTheDocument();
  });
});
