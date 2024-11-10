import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

import { TabProvider } from "./context/tab-context.tsx";
import { SidebarProvider } from "./context/sidebar-context.tsx";
import { KeyShortcutProvider } from "./context/key-shortcut-context.tsx";

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
