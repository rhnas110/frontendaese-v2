import { useEffect } from "react";
import { Desktop } from "../utils/screen";

interface ShortcutKeyOptions {
  modifierKeys?: string[];
  keys: string[];
  action: () => void;
}

const useShortcutKey = ({
  modifierKeys = [],
  keys,
  action,
}: ShortcutKeyOptions) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isModifierKeyPressed = modifierKeys.every(
        (key) =>
          (key === "Control" && (e.metaKey || e.ctrlKey)) ||
          (key === "Alt" && e.altKey) ||
          (key === "Shift" && e.shiftKey)
      );

      const isKeyPressed = keys.includes(e.key.toLowerCase());

      if (isModifierKeyPressed && isKeyPressed) {
        e.preventDefault();
        if (Desktop) action();
      } else if (
        keys.includes(e.key.toLowerCase()) &&
        modifierKeys.length === 0
      ) {
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
