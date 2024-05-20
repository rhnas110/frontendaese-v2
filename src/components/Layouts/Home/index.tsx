import Navbar from "../../Navbar";

import TabContent from "../Tab/TabContent";
import { useTabContext } from "../../../context/TabContext";

export const Home = () => {
  const { activeTab } = useTabContext();

  return (
    <>
      <Navbar />
      <TabContent activeTab={activeTab!} />
    </>
  );
};
