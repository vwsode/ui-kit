import { GlobalStyles } from './components/GlobalStyles';
import { ProgressBar } from './components/ProgressBar';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <ProgressBar value={10} />
          <ProgressBar value={50} appearance="inverse" />
          <ProgressBar value={100} appearance="success" />
          <ProgressBar isIndeterminate />
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
