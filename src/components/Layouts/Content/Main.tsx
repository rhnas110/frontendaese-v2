import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Kbd } from "../../_ui/Kbd";
import { Image } from "../../Elements/Image";
import { Motion } from "../../Elements/Motion";
import { Highlighter } from "../../Elements/Highlighter";

import { useTabContext } from "../../../context/TabContext";
import VSCode from "../../../assets/VSCode.png";

export const App = () => {
  const { addTab } = useTabContext();

  const codeString = `import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
`;
  return (
    <section className="px-2 py-16">
      <Highlighter
        language="typescript"
        showLineNumbers
        style={anOldHope}
        customStyle={{ background: "transparent" }}
        lineProps={(lineNumber: number) =>
          lineNumber === 5
            ? {
                style: { cursor: "pointer" },
                onClick: () => addTab({ id: "index", title: "index.css" }),
              }
            : {}
        }
        wrapLines
      >
        {codeString}
      </Highlighter>
    </section>
  );
};
export const IndexCSS = () => {
  const codeString = `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    background-color: theme(colors.background);
    color: theme(colors.foreground);
    overflow-x: hidden;
}
`;
  return (
    <section className="px-2 py-16">
      <Highlighter
        language="css"
        showLineNumbers
        style={anOldHope}
        customStyle={{ background: "transparent" }}
      >
        {codeString}
      </Highlighter>
    </section>
  );
};
export const Welcome = () => {
  const { addTab } = useTabContext();
  return (
    <Motion
      section
      className="flex flex-col items-center px-2 py-32 gap-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center">
        <Image
          src={VSCode}
          alt="VSCode"
          lazy
          className="bg-transparent w-80 saturate-0"
        />
        <h1 className="text-4xl font-bold text-gray-300">Welcome!</h1>
        <p className="text-lg text-gray-400">
          Select a file from the sidebar to get started.
        </p>
        <div className="text-brown_vs">
          <span>cd </span>
          <code
            className="italic underline cursor-pointer underline-offset-2"
            onClick={() => addTab({ id: "readme", title: "README.md" })}
          >
            ../README.md
          </code>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-xs text-gray-400 gap-y-1">
        <div className="flex items-center justify-between text-base">
          <p>Open Settings</p>
          <Kbd>Ctrl/⌘ + .</Kbd>
        </div>
        <div className="flex items-center justify-between text-base">
          <p>Open Terminal</p>
          <Kbd>Ctrl/⌘ + `</Kbd>
        </div>
      </div>
    </Motion>
  );
};
