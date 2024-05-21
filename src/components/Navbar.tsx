import MobileMenu from "./MobileMenu";
import { Logo } from "./Elements/Logo";
import TabNavbar from "./Layouts/Tab/TabNavbar";

const Navbar: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed flex items-center justify-between w-full h-20 px-2 py-2 lg:hidden bg-backgroundSecondary">
        <Logo />
        <MobileMenu />
      </div>
      <TabNavbar />
    </div>
  );
};
export default Navbar;
