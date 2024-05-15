import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import { TabProvider } from "./context/TabContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <TabProvider>
        <App />
      </TabProvider>
    </Router>
  </React.StrictMode>
);
