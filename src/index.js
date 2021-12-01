import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./theme.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import "./common/i18n";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <footer>
        {process.env.REACT_APP_NAME} @ {process.env.REACT_APP_VERSION}
      </footer>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
