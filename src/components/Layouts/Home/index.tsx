import { Desktop } from "../../../utils/screen";
import TabNavbar from "../Tab/TabNavbar";
import TabContent from "../Tab/TabContent";
import { ModalOnceUp } from "../Modal/ModalOnceUp";

export const Home = () => {
  return (
    <>
      <TabNavbar />
      <TabContent />
      {!Desktop && <ModalOnceUp />}
    </>
  );
};
