export type SideNavItem = {
  title: string;
  url?: string;
  icon?: JSX.Element;
  imageUrl?: { closed: string | undefined; open: string | undefined };
  submenu?: boolean;
  subMenuOpen?: boolean;
  subMenuItems?: SideNavItem[];
};
