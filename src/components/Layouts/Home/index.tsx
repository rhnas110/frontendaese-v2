import Navbar from "../../Navbar";

import TabContent from "../Tab/TabContent";
import { useTabContext } from "../../../context/TabContext";

export const Home = () => {
  const { activeTab, tabs } = useTabContext();

  const renderNavbar = () => {
    if (tabs?.length === 0) return null;
    else return <Navbar />;
  };
  return (
    <>
      {renderNavbar()}
      <TabContent activeTab={activeTab!} />
    </>
  );
};
