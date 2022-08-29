import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import LocalStorage from "./LocalStorage";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/relay" component={Blogs} />
        <Route exact path="/relay/localstorage" component={LocalStorage} />
        <Route path="/relay/blogdetail/:blogid" component={BlogDetail} />
      </Switch>
    </Router>
  );
}

export default App;
