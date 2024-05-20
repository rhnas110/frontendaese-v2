import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RefreshIcon,
  MinusIcon,
} from "@heroicons/react/solid";

import { SideNavItem } from "../types/sidebarType";

import { Tooltip } from "./_ui/Tooltip";
import { Image } from "./Elements/Image";
import { Social } from "./Social";

import { cn } from "../utils";
import { getFileIcon } from "../utils/fileIcon";
import { useTabContext } from "../context/TabContext";
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const { sidebarItems, collapseAllFolders } = useSidebarContext();

  return (
    <nav className="flex h-full text-lg text-gray-400 bg-backgroundSecondary w-72">
      <div className="relative w-full h-full">
        <div className="flex items-center justify-between px-2 bg-[#424242]">
          <h1 className="text-xl font-bold">frontendaese</h1>
          <div className="flex items-center justify-center gap-2">
            <Tooltip content="Refresh">
              <i
                className="cursor-pointer"
                onClick={() => window.location.reload()}
              >
                <RefreshIcon width={20} />
              </i>
            </Tooltip>
            <Tooltip content="Collapse Folders">
              <i className="cursor-pointer" onClick={collapseAllFolders}>
                <MinusIcon width={20} />
              </i>
            </Tooltip>
          </div>
        </div>
        <div className="overflow-y-auto h-5/6 scroll-smooth sidebar-scrollbar">
          {sidebarItems.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        <div className="absolute w-full bottom-6">
          <Social />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

const MenuItem: React.FC<{ item: SideNavItem }> = ({ item }) => {
  const { addTab, activeTab } = useTabContext();
  const { setSidebarItems } = useSidebarContext();
  const [subMenuOpen, setSubMenuOpen] = useState(item?.subMenuOpen || false);

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubMenuOpen(!subMenuOpen);
    setSidebarItems((prevItems) => {
      const updateItems = (items: SideNavItem[]): SideNavItem[] => {
        return items.map((i) => {
          if (i.title === item.title) {
            return { ...i, subMenuOpen: !subMenuOpen };
          } else if (i.subMenuItems) {
            return { ...i, subMenuItems: updateItems(i.subMenuItems) };
          }
          return i;
        });
      };

      return updateItems(prevItems);
    });
  };

  useEffect(() => {
    setSubMenuOpen(item?.subMenuOpen || false);
  }, [item?.subMenuOpen]);

  const icon = getFileIcon(item.title);
  const id = item.title.toLowerCase()?.split(".")[0];
  const isActive = activeTab === item.title.toLowerCase().split(".")[0];

  const handleItemClick = () => {
    if (!item.submenu && !item.url) {
      addTab({ id, title: item.title });
    }
  };

  return (
    <div onClick={handleItemClick}>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className="py-1 flex flex-row items-center justify-between w-full hover:bg-opacity-80 hover:bg-[#2b2b2b]"
          >
            <div className="flex flex-row items-center">
              <>
                {subMenuOpen ? (
                  <ChevronDownIcon className="w-7" />
                ) : (
                  <ChevronRightIcon className="w-7" />
                )}
              </>
              <div className="flex flex-row items-center justify-center gap-1">
                {item?.icon ? (
                  <div className={`${subMenuOpen ? "rotate-12" : "rotate-0"}`}>
                    {item.icon}
                  </div>
                ) : (
                  <Image
                    src={
                      subMenuOpen
                        ? item?.imageUrl?.open
                        : item?.imageUrl?.closed
                    }
                    alt={item.title}
                    lazy
                    className="w-5 h-5 bg-transparent"
                  />
                )}
                <p className="text-xl font-semibold">{item.title}</p>
              </div>
            </div>
          </button>

          {subMenuOpen && (
            <div className="flex flex-col w-full pl-2.5">
              {item.subMenuItems?.map((subItem, idx) => (
                <MenuItem key={idx} item={subItem} />
              ))}
            </div>
          )}
        </>
      ) : item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center py-1 w-full hover:bg-opacity-80 hover:bg-[#2b2b2b] px-2 cursor-pointer gap-1"
        >
          <div>
            <Image
              src={item.image}
              alt={`${item.title} icon`}
              className="bg-transparent w-7 h-7"
              lazy
            />
          </div>
          <span className="flex text-xl font-semibold">{item.title}</span>
        </a>
      ) : (
        <div
          className={cn(
            "flex flex-row items-center py-1 w-full hover:bg-opacity-80 hover:bg-[#2b2b2b] px-2 cursor-pointer gap-1",
            {
              "bg-opacity-75 bg-[#2b2b2b]": isActive,
            }
          )}
        >
          <div>
            {icon && (
              <Image
                src={icon}
                alt={`${item.title} icon`}
                className="bg-transparent w-7 h-7"
                lazy
              />
            )}
          </div>
          <span className="flex text-xl font-semibold">{item.title}</span>
        </div>
      )}
    </div>
  );
};
