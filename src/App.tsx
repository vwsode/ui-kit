import { Badge } from './components/Badge';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <Badge value={100} appearance="default" />
      <Badge value={25} max={24} appearance="primary" />
      <Badge value={100} max={false} appearance="primary-inverted" />
      <Badge value={25} appearance="important" />
      <Badge value={25} appearance="added" />
      <Badge value={25} appearance="removed" />
    </ThemeProvider>
  );
}

export default App;
