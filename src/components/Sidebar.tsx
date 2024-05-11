import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RefreshIcon,
  MinusIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import LinkedinLogo from "../assets/logos/LinkedinLogo.png";
import MailLogo from "../assets/logos/MailLogo.png";

import { SideNavItem } from "../types/sidebarType";
import { SIDENAV_ITEMS } from "../constants/sidebarItems";
import { Image } from "./Elements/Image";

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState(SIDENAV_ITEMS);

  const collapseAllFolders = () => {
    console.log("Collapse all folders called");
    const updatedItems = sidebarItems.map((item) => {
      if (item.submenu) {
        return {
          ...item,
          subMenuOpen: false,
        };
      }
      return item;
    });
    setSidebarItems([...updatedItems]);
  };

  return (
    <div className="flex h-full text-lg text-gray-400 bg-backgroundSecondary w-72">
      <div className="relative w-full h-full">
        <div className="flex items-center justify-between px-2 bg-[#424242]">
          <h1 className="text-xl font-bold">frontendaese</h1>
          <div className="flex items-center justify-center gap-2">
            <i
              className="cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <RefreshIcon width={20} />
            </i>
            <i className="cursor-pointer" onClick={collapseAllFolders}>
              <MinusIcon width={20} />
            </i>
          </div>
        </div>
        <>
          {sidebarItems.map((item, idx) => {
            return (
              <MenuItem
                key={idx}
                item={item}
                collapseAllFolders={collapseAllFolders}
              />
            );
          })}
        </>
        <div className="absolute w-full bottom-6">
          <div className="flex items-center justify-between px-4">
            <Link to="https://github.com/rhnas110" target="_blank">
              <Image
                src="https://media.tenor.com/PvXJ4vZ0m-0AAAAi/hyolan-wolf.gif"
                alt="Github Logo"
                className="w-10 h-10 transition duration-500 bg-transparent text-yellow_vs hover:scale-125"
                lazy
              />
            </Link>
            <Link to="https://www.linkedin.com/in/raihanas/" target="_blank">
              <Image
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="w-10 h-10 transition duration-500 bg-transparent text-yellow_vs hover:scale-125"
                lazy
              />
            </Link>
            <Link to="mailto:raihanas110@gmail.com" target="_blank">
              <Image
                src={MailLogo}
                alt="Mail Logo"
                className="w-10 h-10 transition duration-500 bg-transparent text-yellow_vs hover:scale-125"
                lazy
              />
            </Link>
            <div>
              <Image
                src="https://media.tenor.com/zkaB7Dlry8YAAAAi/hug.gif"
                alt="Cat"
                className="w-10 h-10 transition duration-500 bg-transparent text-yellow_vs hover:scale-125"
                lazy
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const MenuItem = ({
  item,
  collapseAllFolders,
}: {
  item: SideNavItem;
  collapseAllFolders: () => void;
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState(item?.subMenuOpen || false);
  const toggleSubMenu = () => {
    setSubMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setSubMenuOpen(item?.subMenuOpen || false);
  }, [item?.subMenuOpen]);

  return (
    <>
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
                <div>{item.icon}</div>
                <p className="text-xl font-semibold">{item.title}</p>
              </div>
            </div>
          </button>

          {subMenuOpen && (
            <div className="flex flex-col w-full pl-2.5">
              {item.subMenuItems?.map((subItem, idx) => (
                <MenuItem
                  key={idx}
                  item={subItem}
                  collapseAllFolders={collapseAllFolders}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <a
          {...(item.isFn ? { onClick: item.fn } : { href: item.path })}
          className="flex flex-row items-center py-1 w-full hover:bg-opacity-80 hover:bg-[#2b2b2b] px-2 cursor-pointer gap-1"
        >
          <div>{item.icon}</div>
          <span className="flex text-xl font-semibold">{item.title}</span>
        </a>
      )}
    </>
  );
};
