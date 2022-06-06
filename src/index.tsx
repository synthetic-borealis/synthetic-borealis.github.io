/* @refresh reload */
import { render } from "solid-js/web";
import "./fonts/Roboto/Roboto.scss";
import "./index.scss";

import App from "./components/App";

render(() => <App />, document.getElementById("root") as HTMLElement);
