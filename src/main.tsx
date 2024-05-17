import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";
import { TabProvider } from "./context/TabContext";
import { SidebarProvider } from "./context/SidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <TabProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </TabProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
