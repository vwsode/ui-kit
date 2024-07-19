import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <button onClick={() => i18n.changeLanguage('ru')}>Change Lang</button>
      <div>{t('uiComponents__TestText')}</div>
    </>
  );
}

export default App;
