import { useEffect } from "react";

interface ShortcutKeyOptions {
  modifierKeys: string[];
  keys: string[];
  action: () => void;
}

const useShortcutKey = ({ modifierKeys, keys, action }: ShortcutKeyOptions) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isModifierKeyPressed = modifierKeys.some(
        (key) =>
          (e.metaKey && key === "Meta") ||
          (e.ctrlKey && key === "Control") ||
          (e.altKey && key === "Alt") ||
          (e.shiftKey && key === "Shift")
      );

      const isKeyPressed = keys.includes(e.key.toLowerCase());

      if (isModifierKeyPressed && isKeyPressed) {
        e.preventDefault();
        action();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modifierKeys, keys, action]);
};

export default useShortcutKey;
