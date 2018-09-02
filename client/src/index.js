import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    rootEl
  );
};

// Hot Module Reload 😱
if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
