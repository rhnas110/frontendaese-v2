import { Desktop } from "../../../utils/screen";
import Navbar from "../../Navbar";
import TabContent from "../Tab/TabContent";
import { ModalOnceUp } from "../Modal/ModalOnceUp";

export const Home = () => {
  return (
    <>
      <Navbar />
      <TabContent />
      {!Desktop && <ModalOnceUp />}
    </>
  );
};
