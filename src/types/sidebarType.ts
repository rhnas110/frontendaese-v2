export type SideNavItem = {
  title: string;
  url?: string;
  icon?: JSX.Element;
  image?: string; // this just for single image
  imageUrl?: { closed: string | undefined; open: string | undefined };
  submenu?: boolean;
  subMenuOpen?: boolean;
  subMenuItems?: SideNavItem[];
};
