import { useState } from "react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";

import JSIcon from "../assets/icons/JSIcon.png";
import TSIcon from "../assets/icons/TSIcon.png";
import { cn } from "../utils";
import { Image } from "./Elements/Image";

const MobileMenu = () => {
  const projects = [
    {
      name: "First Project",
      href: "#",
      icon: (
        <Image
          src={JSIcon}
          alt="JS Icon"
          className="ml-5 mr-1 bg-transparent w-7"
          lazy
        />
      ),
      current: true,
    },
    {
      name: "Second Project",
      href: "#",
      icon: (
        <Image
          src={TSIcon}
          alt="TS Icon"
          className="ml-5 mr-1 bg-transparent w-7"
          lazy
        />
      ),
      current: false,
    },
    {
      name: "Third Project",
      href: "#",
      icon: (
        <Image
          src={JSIcon}
          alt="JS Icon"
          className="ml-5 mr-1 bg-transparent w-7"
          lazy
        />
      ),
      current: false,
    },
    {
      name: "Fourth Project",
      href: "#",
      icon: (
        <Image
          src={JSIcon}
          alt="JS Icon"
          className="ml-5 mr-1 bg-transparent w-7"
          lazy
        />
      ),
      current: false,
    },
  ];

  const [showProjectsList, SetShowProjectsList] = useState(false);

  return (
    <div className="w-full p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {open ? (
                <XIcon className="block w-10" aria-hidden="true" />
              ) : (
                <MenuIcon className="block w-10" aria-hidden="true" />
              )}{" "}
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <code className="px-2 pt-2 pb-3 space-y-1 text-gray-400">
                  <div
                    className="flex mb-2 ml-4 text-xl font-bold"
                    onClick={() => SetShowProjectsList(!showProjectsList)}
                  >
                    {showProjectsList ? (
                      <ChevronDownIcon className="mr-4 w-7" />
                    ) : (
                      <ChevronRightIcon className="mr-4 w-7" />
                    )}
                    Projects
                  </div>
                  {showProjectsList
                    ? projects.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={cn(
                            item.current
                              ? "bg-[#2b2b2b] text-gray-400"
                              : "text-gray-300 hover:bg-[#2b2b2b] hover:text-gray-400",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <div className="flex ml-6">
                            {item.icon}
                            {item.name}
                          </div>
                        </Disclosure.Button>
                      ))
                    : null}
                </code>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MobileMenu;
