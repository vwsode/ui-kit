import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

import { Text } from './components/Text';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider themeName="standard">
      <button onClick={() => i18n.changeLanguage('ru')}>Change Lang</button>
      <div>{t('uiComponents__TestText')}</div>
      <Text type="subject" accent="secondary">
        Helo
      </Text>
      <Text type="button" accent="secondary">
        Helo
      </Text>
      <Text type="email-header" accent="secondary">
        Helo
      </Text>
      <Text type="greeting" accent="primary">
        Helo
      </Text>
      <Text type="page" accent="primary">
        Helo
      </Text>
      <Text type="page-header" accent="tertiary">
        Helo
      </Text>
      <Text type="caption" accent="tertiary">
        Helo
      </Text>
    </ThemeProvider>
  );
}

export default App;
