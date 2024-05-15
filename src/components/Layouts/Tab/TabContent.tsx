import Hero from "../Home/Hero";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import { Image } from "../../Elements/Image";

import { ILoveTypeScript } from "../../../types";
import { useTabContext } from "../../../context/TabContext";
import VSCode from "../../../assets/VSCode.png";
import NotFoundImage from "../../../assets/NotFound.png";

const Welcome = () => {
  const { addTab } = useTabContext();
  return (
    <div className="flex flex-col items-center py-32">
      <Image
        src={VSCode}
        alt="VSCode"
        lazy
        className="bg-transparent w-80 saturate-0"
      />
      <h1 className="text-4xl font-bold text-center text-gray-300">Welcome!</h1>
      <p className="text-lg text-center text-gray-400">
        Select a file from the sidebar to get started.
      </p>
      <div className="text-center text-brown_vs">
        <span>cd </span>
        <code
          className="italic underline cursor-pointer underline-offset-2"
          onClick={() => addTab({ id: "readme", title: "README.md" })}
        >
          ./README.md
        </code>
      </div>
    </div>
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
  <div className="flex flex-col items-center py-32 opacity-75">
    <Image
      src={NotFoundImage}
      alt="Not Found"
      lazy
      className="bg-transparent w-80 saturate-0"
    />
    <div className="text-center text-brown_vs">
      <h1 className="text-4xl font-bold text-gray-300">
        Oh no! i thinks its bugs
      </h1>
      <p className="text-lg">You need to turn off lights, it attracts bugs.</p>
    </div>
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
  welcome: Welcome,
  about: About,
  resume: Resume,
  contact: Contact,
  readme: README,
};
interface TabContentProps {
  activeTab: string;
}
const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  // Get the component corresponding to the active tab
  const Component = tabComponents[activeTab?.toLowerCase()] || NotFound;

  return <Component />;
};

export default TabContent;
