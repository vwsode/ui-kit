import React from 'react';

import { GlobalStyles } from './components/GlobalStyles';
import { Range } from './components/Range';
import { Toggle } from './components/Toggle';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  const [value, setValue] = React.useState<boolean>(false);

  const handleChange = () => {
    setValue((prev) => !prev);
  };

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
          <Toggle testId="Form" isChecked={value} onChange={handleChange} />
          <Toggle testId="Form" isDisabled />
          <Toggle testId="Form" isDisabled size="large" />
          <Toggle testId="Form" isChecked={value} onChange={handleChange} size="large" />
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
