import React from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { Range } from './components/Range';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  const [value, setValue] = React.useState<number>(0);

  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1920px',
            width: '956px',
          }}
        >
          <Range onChange={(value) => setValue(value)} value={value} max={1000} step={1} />
          <Range value={500} max={1000} isDisabled step={1} />
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
