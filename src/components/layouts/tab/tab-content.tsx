import Hero from "../home/hero";
import About from "../about";
import Resume from "../resume";
import Contact from "../contact";
import { App, IndexCSS, Welcome } from "../content/main";
import { README } from "../content/readme";
import { UpdateLog } from "../content/update-log";
import { MOKOMDO } from "../projects/web/mokomdo";
import { Impact } from "../projects/web/impact";

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
  ["impact"]: Impact,
};
const TabContent: React.FC = () => {
  const { activeTab } = useTabContext();

  const Component =
    tabComponents[activeTab?.toLowerCase() as keyof typeof tabComponents] ||
    NotFound;

  return <Component />;
};

export default TabContent;
