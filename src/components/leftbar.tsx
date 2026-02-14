import { FC } from "react";
import {
  DocumentDuplicateIcon,
  UserCircleIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { Tooltip } from "./_ui/tooltip";
import { useKeyShortcut } from "../context/key-shortcut-context";
import { toastInfo } from "../utils/toast";

export const Leftbar: FC = () => {
  const { showSidebar, setShowSidebar, settingsOpen, setSettingsOpen } =
    useKeyShortcut();
  return (
    <div className="flex flex-col z-30 items-center justify-between w-12 h-full py-4 gap-y-2 bg-[#424242] overflow-hidden relative">
      <div className="flex flex-col items-center w-full gap-y-2">
        <Tooltip content="Explorer" side="right">
          <i
            className={`cursor-pointer hover:opacity-100 w-full flex justify-center ${
              showSidebar
                ? "opacity-100 border-l-2 border-foreground"
                : "opacity-50"
            }`}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <DocumentDuplicateIcon className="w-8 h-8" />
          </i>
        </Tooltip>
      </div>
      <div className="flex flex-col flex-shrink gap-2">
        <Tooltip content="Accounts" side="right">
          <i
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={() => toastInfo("Coming soon...")}
          >
            <UserCircleIcon className="w-8 h-8" />
          </i>
        </Tooltip>
        <Tooltip content="Settings" side="right">
          <i
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <CogIcon className="w-8 h-8" />
          </i>
        </Tooltip>
      </div>
    </div>
  );
};
