import { useState } from "react";
import Modal from "../../_ui/Modal";
import { Kbd } from "../../_ui/Kbd";
import { DarkMode } from "../../Elements/Button/DarkMode";
import useShortcutKey from "../../../hooks/useShortcutKey";

const hotkeys = [
  {
    name: "Open Settings",
    key: "Ctrl/⌘ + .",
  },
  {
    name: "Show/Hide Sidebar",
    key: "Ctrl/⌘ + b",
  },
  {
    name: "Close Tab",
    key: "Alt + w",
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
            <DarkMode />
          </div>
          <div>
            <p className="mb-1 text-lg">Hotkeys</p>
            <div className="flex flex-col gap-y-1">
              {hotkeys.map((hotkey) => (
                <div
                  className="flex items-center justify-between text-base"
                  key={hotkey.key}
                >
                  <p>{hotkey.name}</p>
                  <Kbd>{hotkey.key}</Kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};
