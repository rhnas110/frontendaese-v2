import { Desktop } from "../../../utils/screen";
import TabNavbar from "../Tab/tab-navbar";
import TabContent from "../Tab/tab-content";
import { ModalOnceUp } from "../Modal/modal-once-up";

export const Home = () => {
  return (
    <>
      <TabNavbar />
      <TabContent />
      {!Desktop && <ModalOnceUp />}
    </>
  );
};
