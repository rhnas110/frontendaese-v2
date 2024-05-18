import { useState } from "react";
import Modal from "../../_ui/Modal";
import useShortcutKey from "../../../hooks/useShortcutKey";

const hotkeys = [
  {
    name: "Open Settings",
    key: "Control + .",
  },
  {
    name: "Show/Hide Sidebar",
    key: "Control + b",
  },
  {
    name: "Close Tab",
    key: "Control + w",
  },
];

export const ModalSettings = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["."],
    action: handleOpen,
  });
  return (
    <Modal open={open} onOpenChange={handleOpen}>
      <Modal.Content title="Settings">
        <div className="flex flex-col gap-2 text-gray-300">
          <div className="flex items-center justify-between text-lg">
            <p>Dark Mode</p>
            <p>Toggle</p>
          </div>
          <div>
            <p className="mb-2 text-lg">Hotkeys</p>
            {hotkeys.map((hotkey) => (
              <div
                className="flex items-center justify-between text-base leading-5"
                key={hotkey.key}
              >
                <p>{hotkey.name}</p>
                <kbd>{hotkey.key}</kbd>
              </div>
            ))}
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};
