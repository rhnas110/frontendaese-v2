import { createContext, FC, ReactNode, useContext, useState } from "react";
import useShortcutKey from "../hooks/useShortcutKey";

interface KeyShortcutContextType {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
  terminalOpen: boolean;
  setTerminalOpen: (value: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (value: boolean) => void;
}

const KeyShortcutContext = createContext<KeyShortcutContextType | undefined>(
  undefined
);

export const KeyShortcutProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["."],
    action: () => setSettingsOpen(!settingsOpen),
  });

  return (
    <KeyShortcutContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        terminalOpen,
        setTerminalOpen,
        settingsOpen,
        setSettingsOpen,
      }}
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
