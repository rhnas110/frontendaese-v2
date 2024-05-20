import { useEffect } from "react";
import { Desktop } from "../utils/screen";

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
          (key === "Control" && (e.metaKey || e.ctrlKey)) ||
          (e.altKey && key === "Alt") ||
          (e.shiftKey && key === "Shift")
      );

      const isKeyPressed = keys.includes(e.key.toLowerCase());

      if (isModifierKeyPressed && isKeyPressed) {
        e.preventDefault();
        if (Desktop) action();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modifierKeys, keys, action]);
};

export default useShortcutKey;
