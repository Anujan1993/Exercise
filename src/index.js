import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import Intro from "./pages/Intro";
import Nav from "./pages/Nav";
import Guide from "./pages/Guide";
import Reference from "./pages/Reference";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/guide" component={Guide} />
        <Route exact path="/reference" component={Reference} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
