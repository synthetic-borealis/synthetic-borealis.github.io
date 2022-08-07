import { Component, useContext } from "solid-js";
// import SettingsContext from "../contexts/settings";
import { useSettings } from "../contexts/settings";
import ThemeIcon from "./icons/ThemeIcon";

import "./ChangeThemeButton.scss";
import Theme from "../enums/theme";

const ChangeThemeButton: Component = () => {
  const [settings, { setDarkTheme, setLightTheme }] = useSettings();

  const themeSetter = settings().theme === Theme.Dark ? setLightTheme : setDarkTheme;
  return (
    <button class="ChangeThemeButton">
      <ThemeIcon />
    </button>
  );
};

export default ChangeThemeButton;
