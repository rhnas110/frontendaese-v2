import { Link } from "react-router-dom";
import { Image } from "../image";

import logo from "../../../assets/aese.png";

export const Logo = () => {
  return (
    <Link to="/">
      <Image src={logo} alt="Logo" className="w-24 bg-transparent xs:w-36" />
    </Link>
  );
};
