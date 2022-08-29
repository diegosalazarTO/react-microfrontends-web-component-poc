import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import "./index.css";

import App from "./App";

const BlogsApp = reactToWebComponent(App, React, ReactDOM, { shadow: "open" });

customElements.define("blogs-app", BlogsApp);
