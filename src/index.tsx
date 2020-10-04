import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "core/redux";
import theme from "core/theme";

/** Setea los design tokens como custom properties para la compatibilidad con CSS. */
(function setCustomProperties() {
  Object.keys(theme).forEach((token: string) => {
    if ((theme as any)[token]) {
      return Object.keys((theme as any)[token]).forEach((property: string) => {
        document.documentElement.style.setProperty(
          `--${token}-${property}`,
          (theme as any)[token][property]
        );
      });
    }
  });
})();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
