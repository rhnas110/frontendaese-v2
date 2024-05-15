import { SideNavItem } from "../types/sidebarType";

import { GlobeAltIcon } from "@heroicons/react/solid";

const WEB: {
  title: string;
  url?: string;
}[] = [
  {
    title: "Project 1.js",
    url: "#",
  },
  {
    title: "Project 2.js",
    url: "#",
  },
  {
    title: "Project 3.ts",
    url: "#",
  },
];

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "src",
    submenu: true,
    imageUrl: {
      open: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/folder_type_src_opened.svg",
      closed:
        "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/folder_type_src.svg",
    },
    subMenuItems: [
      {
        title: "projects",
        imageUrl: {
          open: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/folder_type_view_opened.svg",
          closed:
            "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/folder_type_view.svg",
        },
        submenu: true,
        subMenuItems: [
          {
            title: "Web",
            icon: <GlobeAltIcon className="w-5 text-blue_vs" />,
            submenu: true,
            subMenuItems: [...WEB],
          },
        ],
      },
      {
        title: "pages",
        imageUrl: {
          open: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/folder_type_view_opened.svg",
          closed:
            "https://raw.githubusercontent.com/vscode-icons/vscode-icons/79c370141fe104b4bdc85a5c3d0e21f2a98b12d5/icons/folder_type_view.svg",
        },
        submenu: true,
        subMenuItems: [
          {
            title: "Home.ts",
          },
          {
            title: "About.ts",
          },
          {
            title: "Resume.ts",
          },
          {
            title: "Contact.ts",
          },
        ],
      },
      {
        title: "App.ts",
      },
      {
        title: "Welcome.ts",
      },
      {
        title: "index.css",
      },
      {
        title: "utils.js",
      },
      {
        title: "data.json",
      },
      {
        title: "README.md",
      },
    ],
  },
];
