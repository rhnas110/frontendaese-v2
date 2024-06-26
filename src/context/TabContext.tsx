import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Desktop } from "../utils/screen";

// Define the type of a tab
export type Tab = {
  id: string;
  title: string;
};

// Define the type of the context
type TabContextType = {
  tabs: Tab[];
  setTabs: (tabs: Tab[]) => void;
  activeTab: string | null;
  setActiveTab: (tabId: string) => void;
  addTab: (tab: Tab) => void;
  removeTab: (tabId: string) => void;
};

// Create context
const TabContext = createContext<TabContextType | undefined>(undefined);

// Tab first render
const first = firstRender();
// Define the provider component
export const TabProvider = ({ children }: { children: ReactNode }) => {
  const updateLogShown = localStorage.getItem("updateLogShown");
  const defaultTabs = [
    { id: first.id, title: `${first.title}.ts` },
    { id: "readme", title: "README.md" },
    ...(updateLogShown ? [] : [{ id: "update log", title: "Update Log" }]),
  ];
  const [tabs, setTabs] = useState<Tab[]>(defaultTabs);
  const [activeTab, setActiveTab] = useState<string | null>(defaultTabs[0].id);
  const [tabHistory, setTabHistory] = useState<string[]>([defaultTabs[0].id]);

  function handleSetActiveTabState(tabId: string) {
    setActiveTab(tabId);
    setTabHistory((prevHistory) => [
      ...prevHistory.filter((id) => id !== tabId),
      tabId,
    ]);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const addTab = (tab: Tab) => {
    setTabs((prevTabs) => {
      if (prevTabs === null || prevTabs === undefined) {
        throw new Error(
          "Attempted to add a tab to a null or undefined tabs state."
        );
      }
      if (!prevTabs.find((t) => t.id === tab.id)) {
        return [...prevTabs, tab];
      }
      return prevTabs;
    });
    handleSetActiveTabState(tab.id);
  };

  const removeTab = (tabId: string) => {
    setTabs((prevTabs) => {
      if (prevTabs === null || prevTabs === undefined) {
        throw new Error(
          "Attempted to remove a tab from a null or undefined tabs state."
        );
      }
      return prevTabs.filter((tab) => tab.id !== tabId);
    });
    setTabHistory((prevHistory) => prevHistory.filter((id) => id !== tabId));

    if (activeTab === tabId) {
      const newActiveTab =
        tabHistory.length > 1 ? tabHistory[tabHistory.length - 2] : "welcome";
      handleSetActiveTabState(newActiveTab);
    }
    if (tabId === "update log") {
      localStorage.setItem("updateLogShown", "true");
    }
  };

  useEffect(() => {
    if (tabs.length === 0) {
      setActiveTab("welcome");
      setTabHistory([]);
    }
  }, [tabs]);

  return (
    <TabContext.Provider
      value={{
        tabs,
        setTabs,
        activeTab,
        setActiveTab: handleSetActiveTabState,
        addTab,
        removeTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

// Custom hook to consume the tab context
export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

// generate random component for first render, can be home or welcome tab
function firstRender() {
  if (Desktop) {
    const component = ["home", "welcome"];
    const res = component[Math.floor(Math.random() * component.length)];
    return {
      id: res,
      title: res.charAt(0).toUpperCase() + res.slice(1),
    };
  }
  return { id: "home", title: "Home.ts" };
}
