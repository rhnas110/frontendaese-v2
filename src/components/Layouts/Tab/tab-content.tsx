import Hero from "../Home/hero";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import { App, IndexCSS, Welcome } from "../Content/main";
import { README } from "../Content/readme";
import { UpdateLog } from "../Content/update-log";
import { MOKOMDO } from "../Projects/Web/mokomdo";

import { NotFound as NotFoundLayouts } from "../../../pages/404";

import { ILoveTypeScript } from "../../../types";
import { useTabContext } from "../../../context/tab-context";

const NotFound = () => (
  <section className="[height:calc(100vh-1rem)] overflow-hidden">
    <NotFoundLayouts />
  </section>
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
  ["update log"]: UpdateLog,
  ["mokomdo"]: MOKOMDO,
};
const TabContent: React.FC = () => {
  const { activeTab } = useTabContext();

  const Component =
    tabComponents[activeTab?.toLowerCase() as keyof typeof tabComponents] ||
    NotFound;

  return <Component />;
};

export default TabContent;
