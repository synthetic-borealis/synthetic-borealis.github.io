import { Component } from 'solid-js';
import { useSettings } from '../contexts/settings';
import ThemeIcon from './icons/ThemeIcon';

import './ChangeThemeButton.scss';
import Theme from '../enums/theme';

const ChangeThemeButton: Component = () => {
  const [settings, { setDarkTheme, setLightTheme }] = useSettings();

  function changeTheme() {
    const currentTheme: Theme = settings().theme;

    if (Theme[currentTheme] === Theme[Theme.Light]) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }

  return (
    <button class="ChangeThemeButton" onClick={changeTheme}>
      <ThemeIcon/>
    </button>
  );
};

export default ChangeThemeButton;
