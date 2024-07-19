import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { Test } from './components/Test/Test';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider themeName="standard">
      <Test text="Text" />
      <button onClick={() => i18n.changeLanguage('ru')}>Change Lang</button>
      <div>{t('uiComponents__TestText')}</div>
    </ThemeProvider>
  );
}

export default App;
