import { MobileMenuItem } from "../types/menu";

export const MOBILE_MENU_ITEMS: MobileMenuItem[] = [
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
            url: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Dummy.js",
  },
];
