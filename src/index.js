import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore } from "redux";
const store = createStore(reducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
