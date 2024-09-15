import React from 'react';

import { GlobalStyles } from './components/GlobalStyles';
import { Toggle } from './components/Toggle';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { Button } from './components/Button';
import { Icon } from './icons';

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
            flexDirection: 'column',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Toggle testId="Form" isChecked={value} onChange={handleChange} />
          <Toggle testId="Form" isDisabled />
          <Toggle testId="Form" isDisabled size="large" />
          <Toggle testId="Form" isChecked={value} onChange={handleChange} size="large" />

          <Button>Button</Button>
          <Button spacing="compact">
            <Icon type="editor-close" size={24} />
            Button
          </Button>
          <Button isSelected={true}>Button</Button>
          <Button isDisabled={true}>Button</Button>

          <Button spacing="compact">Button</Button>
          <Button spacing="compact" isLoading={true}>
            Button
          </Button>
          <Button spacing="compact" isSelected={true}>
            Button
          </Button>
          <Button spacing="compact" isDisabled={true}>
            Button
          </Button>
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
