import { render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from '@/components/Button';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Icon } from '@/icons';

import { SectionMessage, SectionMessageProps } from '../components/SectionMessage';
import { SectionMessageSelector } from '../components/SectionMessage/constants';

describe('SectionMessage: ', () => {
  const defaultProps: SectionMessageProps = {
    title: 'Test Title',
    appearance: 'information',
  };

  const getSectionMessage = (): HTMLElement => screen.getByTestId(SectionMessageSelector.ROOT);
  const getSectionMessageTitle = (): HTMLElement => screen.getByTestId(SectionMessageSelector.TITLE);
  const getSectionMessageContent = (): HTMLElement => screen.getByTestId(SectionMessageSelector.CONTENT);
  const getSectionMessageActionsDots = (): HTMLElement[] => screen.getAllByTestId(SectionMessageSelector.ACTIONS_DOT);
  const getSectionMessageActions = (): HTMLElement => screen.getByTestId(SectionMessageSelector.ACTIONS);
  const getSectionMessageIcon = (testId?: string): HTMLElement =>
    screen.getByTestId(testId ?? SectionMessageSelector.ICON);

  it('should renders the title', () => {
    render(
      <ThemeProvider themeName="standard">
        <SectionMessage {...defaultProps}>Some content</SectionMessage>
      </ThemeProvider>,
    );

    expect(getSectionMessage()).toBeInTheDocument();
    expect(getSectionMessageTitle()).toHaveTextContent('Test Title');
  });

  it('should renders the default icon when none is provided', () => {
    render(
      <ThemeProvider themeName="standard">
        <SectionMessage {...defaultProps}>Some content</SectionMessage>
      </ThemeProvider>,
    );

    expect(getSectionMessageIcon()).toBeInTheDocument();
  });

  it('should renders the provided icon when one is passed', () => {
    render(
      <ThemeProvider themeName="standard">
        <SectionMessage {...defaultProps} icon={<Icon type="more" testId="custom-icon" size={24} />}>
          Some content
        </SectionMessage>
      </ThemeProvider>,
    );

    expect(getSectionMessageIcon('custom-icon')).toBeInTheDocument();
  });

  it('should renders the actions correct', () => {
    render(
      <ThemeProvider themeName="standard">
        <SectionMessage {...defaultProps}>
          Some content
          <SectionMessage.Actions>
            <Button>Action</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </SectionMessage.Actions>
        </SectionMessage>
      </ThemeProvider>,
    );

    expect(getSectionMessageActions()).toBeInTheDocument();
    expect(getSectionMessageActionsDots().length).toBe(2);
  });

  it('should renders children content', () => {
    render(
      <ThemeProvider themeName="standard">
        <SectionMessage {...defaultProps}>Hello World</SectionMessage>
      </ThemeProvider>,
    );

    expect(getSectionMessageContent()).toBeInTheDocument();
    expect(getSectionMessageContent()).toHaveTextContent('Hello World');
  });
});
