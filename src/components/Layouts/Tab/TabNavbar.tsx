import { useEffect, useRef } from "react";

import { useTabContext } from "../../../context/TabContext";
import { ILoveTypeScript } from "../../../types";
import TabItem from "./TabItem";

const TabNavbar: React.FC = () => {
  const { tabs, activeTab } = useTabContext();

  const navbarRef = useRef<HTMLDivElement>(null);

  // Scroll to the active tab whenever it changes
  useEffect(() => {
    if (navbarRef.current) {
      const activeTabElement = navbarRef.current.querySelector(
        `[data-tab-id="${activeTab}"]`
      );
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [activeTab]);
  return (
    <div className="bg-[#424242] h-16 w-full fixed hidden lg:block z-10">
      <div
        className="flex w-[81.5%] h-full overflow-x-auto tab-navbar-scrollbar"
        ref={navbarRef}
      >
        {tabs?.map((tab: ILoveTypeScript) => (
          <TabItem key={tab.id} tab={tab} />
        ))}
      </div>
    </div>
  );
};
export default TabNavbar;
