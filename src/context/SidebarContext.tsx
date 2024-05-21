import { createContext, FC, ReactNode, useContext, useState } from "react";
import { SideNavItem } from "../types/menuType";
import { SIDENAV_ITEMS } from "../constants/sidebarItems";

interface SidebarContextProps {
  sidebarItems: SideNavItem[];
  collapseAllFolders: () => void;
  setSidebarItems: React.Dispatch<React.SetStateAction<SideNavItem[]>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarItems, setSidebarItems] =
    useState<SideNavItem[]>(SIDENAV_ITEMS);

  const collapseAllFolders = () => {
    console.log("collapseAllFolders");
    const collapseItems = (items: SideNavItem[]): SideNavItem[] => {
      return items.map((item) => ({
        ...item,
        subMenuOpen: false,
        subMenuItems: item.subMenuItems ? collapseItems(item.subMenuItems) : [],
      }));
    };

    setSidebarItems(collapseItems([...sidebarItems]));
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarItems, collapseAllFolders, setSidebarItems }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};
