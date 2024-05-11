export type SideNavItem = {
  title: string;
  path?: string;
  fn?: () => void;
  isFn?: boolean;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuOpen?: boolean;
  subMenuItems?: SideNavItem[];
};
