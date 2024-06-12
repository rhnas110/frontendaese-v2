import { useLayoutEffect, useRef } from "react";
import { cn } from "../../../utils";
import { AnimatePresence, Reorder } from "../../../utils/motion";

import useShortcutKey from "../../../hooks/useShortcutKey";
import { useTabContext } from "../../../context/TabContext";
import { useKeyShortcut } from "../../../context/KeyShortcutContext";
import { ILoveTypeScript } from "../../../types";
import TabItem from "./TabItem";

const TabNavbar: React.FC = () => {
  const { tabs, activeTab, removeTab, setTabs } = useTabContext();
  const { showSidebar } = useKeyShortcut();

  const navbarRef = useRef<HTMLDivElement>(null);

  // Scroll to the active tab whenever it changes
  useLayoutEffect(() => {
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
  // Close tab shortcut
  useShortcutKey({
    modifierKeys: ["Alt"],
    keys: ["w"],
    action: () => {
      const lastTab = tabs.length === 1 || activeTab === "welcome";
      const tabIdToRemove = lastTab ? tabs[0].id : activeTab;
      if (tabs.length > 0) {
        removeTab(tabIdToRemove!);
      }
    },
  });
  if (tabs?.length === 0) return null;
  return (
    <div className="bg-[#424242] h-16 w-full fixed hidden lg:block z-10">
      <Reorder.Group
        values={tabs}
        onReorder={setTabs}
        className={cn(
          "flex h-full overflow-x-auto tab-navbar-scrollbar overflow-y-hidden",
          {
            "w-[calc(100%_-_3rem)]": !showSidebar,
            "[width:calc(100%_-_288px_-_3rem)]": showSidebar,
          }
        )}
        ref={navbarRef}
        axis="x"
      >
        <AnimatePresence initial={false}>
          {tabs?.map((tab: ILoveTypeScript) => (
            <Reorder.Item
              key={tab.id}
              value={tab}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
              exit={{ opacity: 0, y: 35, transition: { duration: 0.3 } }}
              whileDrag={{ backgroundColor: "#262626" }}
              layout
            >
              <TabItem tab={tab} />
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};
export default TabNavbar;
