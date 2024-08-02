import { useState } from 'react';

import { GlobalStyles } from './components/GlobalStyles';
import { Tabs, TabList, Tab, TabPanel } from './components/Tabs';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

const Panel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ padding: '20px', textAlign: 'center' }}>{children}</div>;
};

function App() {
  const [selected, setSelected] = useState<number>(0);
  const options = [
    {
      content: 'Content 1',
      label: 'Tab 1',
    },
    {
      content: 'Content 2',
      label: 'Tab 2',
    },
    {
      content: 'Content 3',
      label: 'Tab 3',
    },
  ];

  const handleChange = (index: number) => {
    setSelected(index);
  };

  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div>
          <Tabs id="tabs" selected={selected} onChange={handleChange}>
            <TabList>
              {options.map(({ label }, index) => (
                <Tab index={index} key={index}>
                  {label}
                </Tab>
              ))}
            </TabList>
            {options.map(({ content }, index) => (
              <TabPanel index={index} key={index}>
                <Panel>{content}</Panel>
              </TabPanel>
            ))}
          </Tabs>
          <button onClick={() => handleChange(2)}>select last</button>
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
