import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Switch>
        <Route path="*/blogdetail/:blogid" component={BlogDetail} />
        <Route path="*" component={Blogs} />
      </Switch>
    </Router>
  );
}

export default App;
