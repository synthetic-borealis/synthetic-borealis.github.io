import { createContext, JSXElement, createSignal, useContext, Accessor } from "solid-js";
import Theme from "../enums/theme";

import ISettings from "../interfaces/settings";

interface ISettingsProviderProps {
  children?: JSXElement;
}

const SettingsContext = createContext<
  [
    Accessor<ISettings>,
    {
      setDarkTheme(): void;
      setLightTheme(): void;
    },
  ]
>();

export const SettingsProvider = (props: ISettingsProviderProps) => {
  const [state, setState] = createSignal<ISettings>({ theme: Theme.Dark }),
    settings: [
      Accessor<ISettings>,
      {
        setDarkTheme(): void;
        setLightTheme(): void;
      },
    ] = [
      state,
      {
        setDarkTheme() {
          setState({ theme: Theme.Dark });
        },
        setLightTheme() {
          setState({ theme: Theme.Light });
        },
      },
    ];

  return (
    <SettingsContext.Provider value={settings}>{props.children}</SettingsContext.Provider>
  );
};

export function useSettings() {
  return useContext(SettingsContext);
}

// export default SettingsProvider;
