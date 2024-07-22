import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { Link } from './components/Link';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <>
        <Link to="">Hello</Link>
        <Link to="" disabled>
          Hello
        </Link>
      </>
    </ThemeProvider>
  );
}

export default App;
