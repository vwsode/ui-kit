import React from 'react';

import { Checkbox } from './components/Checkbox';
import { GlobalStyles } from './components/GlobalStyles';
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
          <Checkbox onChange={() => {}} />
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
