import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import { MOBILE_MENU_ITEMS } from "../constants/mobile-menu-items";
import { MobileMenuItem } from "../types/menu";
import { ILoveTypeScript } from "../types";

import { motion, useCycle } from "../utils/motion";
import { getFileIcon } from "../utils/file-icon";
import { Image } from "./Elements/Image";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = () => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full lg:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-background/50 backdrop-blur"
        variants={sidebar}
      />
      <motion.div className="absolute w-full px-4 py-16" variants={variants}>
        {MOBILE_MENU_ITEMS.map((item, idx) => {
          return <Menu key={idx} item={item} />;
        })}
      </motion.div>
      <MenuToggle toggle={toggleOpen} />
    </motion.div>
  );
};

export default MobileMenu;

const Menu: React.FC<{ item: MobileMenuItem }> = ({ item }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(item?.subMenuOpen || false);
  const icon = getFileIcon(item.title);

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubMenuOpen(!subMenuOpen);
  };

  useEffect(() => {
    setSubMenuOpen(item?.subMenuOpen || false);
  }, [item?.subMenuOpen]);
  return (
    <motion.div variants={MenuItemVariants}>
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
                <Menu key={idx} item={subItem} />
              ))}
            </div>
          )}
        </>
      ) : item.url ? (
        <Link
          to={item.url}
          className="flex flex-row items-center py-1 w-full hover:bg-opacity-80 hover:bg-[#2b2b2b] px-2 cursor-pointer gap-1"
        >
          <div>
            <Image
              src={icon}
              alt={`${item.title} icon`}
              className="bg-transparent w-7 h-7"
              lazy
            />
          </div>
          <span className="flex text-xl font-semibold">{item.title}</span>
        </Link>
      ) : (
        <div className="flex flex-row items-center py-1 w-full hover:bg-opacity-80 hover:bg-[#2b2b2b] px-2 cursor-pointer gap-1">
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
    </motion.div>
  );
};

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className="fixed z-30 pointer-events-auto right-4 top-6"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: ILoveTypeScript) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="rgba(134,93,255,1)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: ILoveTypeScript) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
