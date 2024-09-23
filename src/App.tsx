import React from 'react';

import { Checkbox } from '@/components/Checkbox';

import { Flag } from './components/Flag/components/Flag';
import { FlagAction } from './components/Flag/components/FlagAction';
import { FlagActions } from './components/Flag/components/FlagActions';
import { FlagContent } from './components/Flag/components/FlagContent';
import { GlobalStyles } from './components/GlobalStyles';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { Button } from './components/Button';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1920px',
            width: '956px',
            flexDirection: 'column',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          {/* <Checkbox label="Controlled" onChange={handleChange} isChecked={value} value="email" name="email" /> */}
          <Checkbox label="Uncontrolled" />
          <Flag title="Welcome to the room">
            <FlagContent>Check your internet connection and try again</FlagContent>
            <FlagActions>
              <FlagAction>No thanks</FlagAction>
              <FlagAction component="button">Yes please</FlagAction>
            </FlagActions>
          </Flag>
          <Flag appearance="error" title="Welcome to the room">
            <FlagContent>Check your internet connection and try again</FlagContent>
            <FlagActions>
              <FlagAction>No thanks</FlagAction>
              <FlagAction component="button">Yes please</FlagAction>
            </FlagActions>
          </Flag>
          <Flag appearance="info" title="Welcome to the room">
            <FlagContent>Check your internet connection and try again</FlagContent>
            <FlagActions>
              <FlagAction>No thanks</FlagAction>
              <FlagAction component="button">Yes please</FlagAction>
            </FlagActions>
          </Flag>
          <Flag fullWidth appearance="warning" title="Welcome to the room">
            <FlagContent>Check your internet connection and try again</FlagContent>
            <FlagActions>
              <FlagAction>No thanks</FlagAction>
              <FlagAction component="button">Yes please</FlagAction>
            </FlagActions>
          </Flag>

          <Flag appearance="normal" title="Welcome to the room">
            <FlagContent>Check your internet connection and try again</FlagContent>
            <FlagActions>
              <Button appearance="link" spacing="compact">
                Understood
              </Button>
              <Button appearance="link" spacing="compact">
                No thanks
              </Button>
            </FlagActions>
          </Flag>
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
