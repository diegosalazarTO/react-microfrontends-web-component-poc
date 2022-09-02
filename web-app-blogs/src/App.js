import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import LocalStorage from "./LocalStorage";
import AppConfig from "./AppConfig";
import Home from "./Home";
import Cookies from "./Cookies";
import Events from "./Events";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/relay" component={Home} />
        <Route path="/relay/blogs" component={Blogs} />
        <Route path="/relay/appconfig" component={AppConfig} />
        <Route path="/relay/cookies" component={Cookies} />
        <Route path="/relay/localstorage" component={LocalStorage} />
        <Route path="/relay/blogdetail/:blogid" component={BlogDetail} />
        <Route path="/relay/events" component={Events} />
      </Switch>
    </Router>
  );
}

export default App;
