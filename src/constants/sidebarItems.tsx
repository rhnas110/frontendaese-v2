import { SideNavItem } from "../types/menuType";

import { GlobeAltIcon } from "@heroicons/react/solid";

const WEB: {
  title: string;
  url?: string;
  image?: string;
}[] = [
  {
    title: "impact.",
    url: "https://im-pact.netlify.app/",
    image: "https://im-pact.netlify.app/favicon.ico",
  },
  {
    title: "DNA News",
    url: "https://github.com/rhnas110/dna-news",
    image: "https://abangkuh.de/assets/dnanews.png",
  },
  {
    title: "XPValor",
    url: "https://github.com/rhnas110/xpvalor",
    image: "https://abangkuh.de/assets/xpvalor.png",
  },
  {
    title: "motionime",
    url: "https://motionime.online/",
    image: "https://motionime.online/favicon.ico",
  },
  {
    title: "aese",
    url: "https://github.com/rhnas110/aese",
    image: "https://frontendaese.netlify.app/aese32.png",
  },
  {
    title: "MOKOMDO",
    url: "https://jcwd220405.purwadhikabootcamp.com/",
    image: "https://jcwd220405.purwadhikabootcamp.com/mokomdo-logo.png",
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
        title: "index.css",
      },
      {
        title: "Welcome.ts",
      },
    ],
  },
  {
    title: "README.md",
  },
];
