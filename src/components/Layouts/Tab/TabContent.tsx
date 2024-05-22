import Hero from "../Home/Hero";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import { App, IndexCSS, Welcome } from "../Content/Main";
import { README } from "../Content/README";
import { NotFound as NotFoundLayouts } from "../../../pages/404";

import { ILoveTypeScript } from "../../../types";
import { useTabContext } from "../../../context/TabContext";

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
