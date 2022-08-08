/* @refresh reload */
import { render } from "solid-js/web";
import "./fonts/Roboto/Roboto.scss";
import "./index.scss";

import App from "./components/App";
import { SettingsProvider } from "./contexts/settings";

render(() => <SettingsProvider><App /></SettingsProvider>, document.getElementById("root") as HTMLElement);
