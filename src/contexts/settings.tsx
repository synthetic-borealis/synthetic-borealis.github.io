import { createContext } from "solid-js";

import ISettings from "../interfaces/settings";

const SettingsContext = createContext<ISettings>();

export default SettingsContext;
