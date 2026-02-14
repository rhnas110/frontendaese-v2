import { Desktop } from "../../../utils/screen";
import TabNavbar from "../tab/tab-navbar";
import TabContent from "../tab/tab-content";
import { ModalOnceUp } from "../modal/modal-once-up";

export const Home = () => {
  return (
    <>
      <TabNavbar />
      <TabContent />
      {!Desktop && <ModalOnceUp />}
    </>
  );
};
