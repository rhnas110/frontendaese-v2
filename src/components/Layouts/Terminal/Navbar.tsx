import { Tooltip } from "../../_ui/Tooltip";
import { XIcon } from "@heroicons/react/solid";

export const Navbar = ({
  setTerminalOpen,
}: {
  setTerminalOpen: (value: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-between text-gray-400">
      <div className="flex gap-x-8">
        <Tooltip content="Terminal (Ctrl+`)" withArrow side="top">
          <pre className="underline underline-offset-[6px] text-sm cursor-pointer">
            TERMINAL
          </pre>
        </Tooltip>
      </div>
      <Tooltip content="Close" className="text-gray-400">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setTerminalOpen(false);
          }}
        >
          <XIcon className="w-6 h-6" />
        </button>
      </Tooltip>
    </div>
  );
};
