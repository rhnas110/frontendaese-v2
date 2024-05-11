import { SideNavItem } from "../types/sidebarType";

import { FolderIcon } from "@heroicons/react/solid";
// import TSIcon from "../assets/icons/TSIcon.png";
// import JSIcon from "../assets/icons/JSIcon.png";
// import { Image } from "../components/Elements/Image";

// const WEB: {
//   title: string;
//   path?: string;
//   icon?: JSX.Element;
// }[] = [
//   {
//     title: "Dummy",
//     icon: (
//       <Image src={JSIcon} alt="JS Icon" className="bg-transparent w-7" lazy />
//     ),
//   },
//   {
//     title: "Dummy",
//     icon: (
//       <Image src={JSIcon} alt="JS Icon" className="bg-transparent w-7" lazy />
//     ),
//   },
//   {
//     title: "Dummy",
//     icon: (
//       <Image src={TSIcon} alt="TS Icon" className="bg-transparent w-7" lazy />
//     ),
//   },
// ];

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "src",
    submenu: true,
    icon: <FolderIcon className="w-5 text-yellow_vs" />,
    subMenuItems: [
      {
        title: "Coming Soon...",
      },
      // {
      //   title: "Projects",
      //   icon: <CodeIcon className="w-5 text-blue_vs" />,
      //   submenu: true,
      //   subMenuItems: [
      //     {
      //       title: "Web",
      //       icon: <GlobeAltIcon className="w-5 text-blue_vs" />,
      //       submenu: true,
      //       subMenuItems: [...WEB],
      //     },
      //   ],
      // },
      // {
      //   title: "Home.ts",
      //   icon: (
      //     <Image
      //       src={TSIcon}
      //       alt="TS Icon"
      //       className="bg-transparent w-7"
      //       lazy
      //     />
      //   ),
      // },
      // {
      //   title: "About.ts",
      //   icon: (
      //     <Image
      //       src={TSIcon}
      //       alt="TS Icon"
      //       className="bg-transparent w-7"
      //       lazy
      //     />
      //   ),
      // },
      // {
      //   title: "Resume.ts",
      //   icon: (
      //     <Image
      //       src={TSIcon}
      //       alt="TS Icon"
      //       className="bg-transparent w-7"
      //       lazy
      //     />
      //   ),
      // },
      // {
      //   title: "Contact.ts",
      //   icon: (
      //     <Image
      //       src={TSIcon}
      //       alt="TS Icon"
      //       className="bg-transparent w-7"
      //       lazy
      //     />
      //   ),
      // },
    ],
  },
];
