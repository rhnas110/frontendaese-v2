import { useEffect, useState } from "react";
import Modal from "../../_ui/Modal";

export const ModalOnceUp = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before
    const isOpen = localStorage.getItem("helloWorldModal");

    // If not, open the modal
    if (!isOpen) {
      setOpen(true);
    }
  }, []);

  function handleOpen() {
    // Close the modal
    setOpen(false);

    // Set localStorage to indicate the modal has been shown
    localStorage.setItem("helloWorldModal", "true");
  }
  return (
    <Modal open={open} onOpenChange={handleOpen}>
      <Modal.Content title="Hello World!">
        <div className="flex flex-col gap-2 text-center text-gray-300">
          <p>
            Try opening this site on a device with a width of 1024px or more!
          </p>
          <p>There will be interesting things that you will like</p>
          <button
            onClick={handleOpen}
            className="p-2 mt-4 text-white rounded bg-aese-900"
          >
            Got it!
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};
