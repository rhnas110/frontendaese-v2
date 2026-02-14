import { FC, useCallback, useEffect, useRef } from "react";

import { useKeyShortcut } from "../../../context/key-shortcut-context";
import { cn } from "../../../utils";
import { started } from "../../../utils/bin";

import { Navbar } from "./navbar";
import Input from "./input";
import History from "./history";
import { useHistory } from "./history/hook";

export const Terminal: FC = () => {
  const { showSidebar, terminalOpen, setTerminalOpen } = useKeyShortcut();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerInputRef = useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(started()), []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  if (!terminalOpen) return null;
  return (
    <div className="overflow-y-hidden hidden border-t border-l border-[#424242] bg-backgroundSecondary h-[40vh] z-20 fixed bottom-0 w-full px-4 py-2 overflow-x-hidden lg:flex">
      <div
        className={cn("flex flex-col gap-y-2", {
          "w-[calc(100%_-_3rem)]": !showSidebar,
          "[width:calc(100%_-_288px_-_3rem)]": showSidebar,
        })}
      >
        <Navbar setTerminalOpen={setTerminalOpen} />
        <div
          ref={containerInputRef}
          className="w-full overflow-y-auto terminal-scrollbar [min-height:calc(40vh_-_60px)] cursor-text"
          onClick={focusInput}
        >
          <History history={history} />
          <Input
            inputRef={inputRef}
            containerInputRef={containerInputRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
            setTerminalOpen={setTerminalOpen}
          />
        </div>
      </div>
    </div>
  );
};
