import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

createBrowserHistory();

const { REACT_APP_HEADER_HOST: headerHost } = process.env;

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Home() {
  return (
    <div className="container">
      <Header />
      <blogs-app />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/relay" />} />
          <Route path="/relay" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
