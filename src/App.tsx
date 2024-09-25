import React, { useCallback, useState } from 'react';

import { Button } from './components/Button';
import { Flag, FlagGroup } from './components/Flag';
import { GlobalStyles } from './components/GlobalStyles';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

type FlagType = {
  id: string;
  type: 'error' | 'info' | 'success' | 'warning' | 'normal';
  title: string;
  description: string;
};

const defaultDescription =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quam reiciendis praesentium perspiciatis incidunt corrupti dignissimos modi iure aliquam ratione?';

const initialFlags: FlagType[] = [
  {
    id: '1',
    type: 'info',
    title: 'Flag: 1',
    description: defaultDescription,
  },
  {
    id: '2',
    type: 'error',
    title: 'Flag: 2',
    description: defaultDescription,
  },
  {
    id: '3',
    type: 'normal',
    title: 'Flag: 3',
    description: defaultDescription,
  },
];

const generateFlagData = (index: number): FlagType => {
  return {
    description: defaultDescription,
    id: `${index + 1}`,
    title: `Flag: ${index + 1}`,
    type: 'normal',
  };
};

export default function App() {
  const [flags, setFlags] = useState<FlagType[]>(initialFlags);

  const addFlag = () => {
    setFlags((prev) => [generateFlagData(flags.length), ...prev]);
  };

  const dismissFlag = useCallback(
    (id: string) => {
      setFlags((current) => current.filter((flag) => flag.id !== id));
    },
    [setFlags],
  );

  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <Button onClick={addFlag} appearance="primary">
          Create new Flag
        </Button>
        <FlagGroup>
          {flags.map((flag) => (
            <Flag onDismissed={dismissFlag} key={flag.id} title={flag.title} id={flag.id} appearance={flag.type}>
              <Flag.Content>{flag.description}</Flag.Content>
              <Flag.Actions>
                <Flag.Action>Create one</Flag.Action>
                <Flag.Action>Delete</Flag.Action>
              </Flag.Actions>
            </Flag>
          ))}
        </FlagGroup>
      </GlobalStyles>
    </ThemeProvider>
  );
}
