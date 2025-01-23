import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';

import { useAppSelector, useAppDispatch } from './app/hooks.ts';
import { setLanguage } from './features/language/languageSlice.ts';

function App() {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.value);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(language);
    };
    changeLanguage().catch(() => {});
  }, [language, i18n]);

  return (
    <>
      <h1>{t('app.placeholderWelcome')}</h1>
      <button onClick={() => dispatch(setLanguage(language === 'en' ? 'he' : 'en'))}>{t('app.changeLanguage')}</button>
    </>
  );
}

export default App;
