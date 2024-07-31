import { GlobalStyles } from './components/GlobalStyles';
import { Spinner } from './components/Spinner';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div>
          <Spinner size="xsmall" />
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
          <Spinner size="xlarge" />
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
