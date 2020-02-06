import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
