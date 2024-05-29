import { createContext, FC, ReactNode, useContext, useState } from "react";
import useShortcutKey from "../hooks/useShortcutKey";

interface KeyShortcutContextType {
  showSidebar: boolean;
  terminalOpen: boolean;
  setTerminalOpen: (value: boolean) => void;
}

const KeyShortcutContext = createContext<KeyShortcutContextType | undefined>(
  undefined
);

export const KeyShortcutProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["b"],
    action: () => setShowSidebar(!showSidebar),
  });
  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["`"],
    action: () => setTerminalOpen(!terminalOpen),
  });

  return (
    <KeyShortcutContext.Provider
      value={{ showSidebar, terminalOpen, setTerminalOpen }}
    >
      {children}
    </KeyShortcutContext.Provider>
  );
};

export const useKeyShortcut = () => {
  const context = useContext(KeyShortcutContext);
  if (!context) {
    throw new Error("useKeyShortcut must be used within a KeyShortcutProvider");
  }
  return context;
};
