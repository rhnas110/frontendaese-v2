import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Hero from "../Home/Hero";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import { Kbd } from "../../_ui/Kbd";
import { Image } from "../../Elements/Image";
import { Motion } from "../../Elements/Motion";
import { CodeBlock } from "../../Elements/CodeBlock";
import { NotFound as NotFoundLayouts } from "../../../pages/404";

import { ILoveTypeScript } from "../../../types";
import { useTabContext } from "../../../context/TabContext";
import VSCode from "../../../assets/VSCode.png";

const App = () => {
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
    <div className="px-2 py-16">
      <CodeBlock
        language="typescript"
        showLineNumbers
        style={anOldHope}
        customStyle={{ background: "transparent" }}
      >
        {codeString}
      </CodeBlock>
    </div>
  );
};
const IndexCSS = () => {
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
    <div className="px-2 py-16">
      <CodeBlock
        language="css"
        showLineNumbers
        style={anOldHope}
        customStyle={{ background: "transparent" }}
      >
        {codeString}
      </CodeBlock>
    </div>
  );
};
const Welcome = () => {
  const { addTab } = useTabContext();
  return (
    <Motion
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

      <div className="w-full max-w-xs text-gray-400">
        <div className="flex items-center justify-between text-base">
          <p>Open Settings</p>
          <Kbd>Ctrl/⌘ + .</Kbd>
        </div>
      </div>
    </Motion>
  );
};
const README = () => {
  const { addTab } = useTabContext();
  return (
    <div className="py-32">
      <h1 className="text-4xl font-bold text-center text-gray-300">readme</h1>
      <div className="text-center text-brown_vs">
        <span>cd </span>
        <code
          className="italic underline cursor-pointer underline-offset-2"
          onClick={() => addTab({ id: "home", title: "Home.ts" })}
        >
          ./src/pages/Home
        </code>
      </div>
    </div>
  );
};
const NotFound = () => (
  <div className="[height:calc(100vh-1rem)] overflow-hidden">
    <NotFoundLayouts />
  </div>
);

const tabComponents: ILoveTypeScript = {
  home: () => (
    <>
      <Hero />
      <About />
      <Resume />
      <Contact />
    </>
  ),
  app: App,
  welcome: Welcome,
  index: IndexCSS,
  about: About,
  resume: Resume,
  contact: Contact,
  readme: README,
};
const TabContent: React.FC = () => {
  const { activeTab } = useTabContext();

  const Component =
    tabComponents[activeTab?.toLowerCase() as keyof typeof tabComponents] ||
    NotFound;

  return <Component />;
};

export default TabContent;
