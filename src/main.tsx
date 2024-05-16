import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import { TabProvider } from "./context/TabContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <TabProvider>
          <App />
        </TabProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
