import React from "react";
import { createBrowserHistory } from "history";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <div>
      <a href="/">KPITENG (Header Application)</a>
    </div>
  );
}

export default App;
