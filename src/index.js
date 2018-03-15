/**
 * Import react
 */
import React from "react";
import { Provider } from "react-redux";

/**
 * import render to make sure attach react to root app
 */
import { render } from "react-dom";

/**
 * Import the main entry point for this application
 */
import App from "./App/App";

/**
 * get the inital state
 */
import store, { history } from "./store";

/**
 * Import browser router for our main app
 */
import { ConnectedRouter } from "react-router-redux";

/**
 * Render it to the dom element
 */
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app-root")
);
