import MobileMenu from "./mobile-menu";
import { Logo } from "./elements/logo";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed flex items-center justify-between w-full h-16 px-2 py-2 lg:hidden bg-backgroundSecondary">
      <Logo />
      <MobileMenu />
    </nav>
  );
};
export default Navbar;
