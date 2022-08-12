import React from "react";
import { createBrowserHistory } from "history";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <div>
      <button onClick={() => history.back()}>
        KPITENG (Header Application)
      </button>
    </div>
  );
}

export default App;
