import { StatusLabel } from './components/StatusLabel/StatusLabel';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <StatusLabel title="Critical" type="critical" />
      <StatusLabel title="Error" type="error" />
      <StatusLabel title="Warning" type="warning" />
      <StatusLabel title="Success" type="success" />
      <StatusLabel title="Info" type="info" />
    </ThemeProvider>
  );
}

export default App;
