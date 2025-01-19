import { useTranslation } from 'react-i18next';
import './App.scss';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('app.placeholderWelcome')}</h1>
      <p>בדיקה</p>
    </>
  );
}

export default App;
