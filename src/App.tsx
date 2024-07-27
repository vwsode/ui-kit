import { StatusLabel } from './components/StatusLabel/StatusLabel';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <StatusLabel title="Lorem ipsum dolor sit amet." type="critical" />
      <StatusLabel title="Lorem ipsum dolor sit amet." type="error" />
      <StatusLabel title="Lorem ipsum dolor sit amet." type="warning" />
    </ThemeProvider>
  );
}

export default App;
