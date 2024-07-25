import { Link } from './components/Link';
import { Tooltip } from './components/Tooltip';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <Tooltip
        placement="bottom"
        title="
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum sit asperiores modi dignissimos esse error doloremque praesentium molestias commodi!"
      >
        <Link to="">Hello</Link>
      </Tooltip>
    </ThemeProvider>
  );
}

export default App;
