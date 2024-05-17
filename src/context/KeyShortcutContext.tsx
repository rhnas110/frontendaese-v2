import { createContext, FC, ReactNode, useContext, useState } from "react";
import useShortcutKey from "../hooks/useShortcutKey";

interface KeyShortcutContextType {
  showSidebar: boolean;
}

const KeyShortcutContext = createContext<KeyShortcutContextType | undefined>(
  undefined
);

export const KeyShortcutProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useShortcutKey({
    modifierKeys: ["Control"],
    keys: ["b"],
    action: () => setShowSidebar(!showSidebar),
  });

  return (
    <KeyShortcutContext.Provider value={{ showSidebar }}>
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
