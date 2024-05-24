import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

import { TabProvider } from "./context/TabContext";
import { SidebarProvider } from "./context/SidebarContext.tsx";
import { KeyShortcutProvider } from "./context/KeyShortcutContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <TabProvider>
          <SidebarProvider>
            <KeyShortcutProvider>
              <App />
            </KeyShortcutProvider>
          </SidebarProvider>
        </TabProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
