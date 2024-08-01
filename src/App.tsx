import { Banner } from './components/Banner';
import { GlobalStyles } from './components/GlobalStyles';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { Icon } from './icons';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div>
          <Banner appearance="announcement">Lorem</Banner>

          <Banner appearance="warning" icon={<Icon type="warning" size={20} />}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos minima fugit asperiores sapiente
            dolor nihil qui totam harum sed?
          </Banner>

          <Banner appearance="error" icon={<Icon type="warning" size={20} />}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos minima fugit asperiores sapiente
            dolor nihil qui totam harum sed?
          </Banner>
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
