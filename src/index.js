import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "./assets/css/gobal.css";
import "./assets/css/style.css";

import App from "./App";

axios.defaults.headers.common["Accept"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
