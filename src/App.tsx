import React from 'react';

import { Checkbox } from './components/Checkbox';

import { Checkbox } from './components/Checkbox';
import { GlobalStyles } from './components/GlobalStyles';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

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
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
