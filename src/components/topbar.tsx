import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

import { Tooltip } from "./_ui/tooltip";
import { enterFullScreen, exitFullScreen } from "../utils/screen";

export const Topbar = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div className="bg-[#424242] border-b-2 border-backgroundSecondary h-8 w-full items-center justify-center px-2 fixed z-50 rounded-t-md hidden lg:flex">
      <div className="absolute z-20 flex space-x-2 left-2">
        <Tooltip content="Close" className="text-gray-400">
          <div
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"
            onClick={() => {
              window.open("https://aese.space/", "_blank");
              window.open("about:blank", "_self");
              window.close();
            }}
          ></div>
        </Tooltip>

        {/* There no action for MINIMIZE */}
        <div className="w-3 h-3 rounded-full bg-neutral-500"></div>

        <Tooltip
          content={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
          className="text-gray-400"
        >
          <div
            className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"
            onClick={() => {
              if (isFullScreen) {
                exitFullScreen();
                setIsFullScreen(false);
              } else {
                enterFullScreen();
                setIsFullScreen(true);
              }
            }}
          ></div>
        </Tooltip>
      </div>
      <div className="flex items-center justify-center w-2/5 gap-1 text-sm text-gray-400 border rounded-md cursor-pointer h-3/4 border-background bg-backgroundSecondary">
        <Tooltip content="Search">
          <i className="rotate-90">
            <SearchIcon width={16} />
          </i>
        </Tooltip>
        <p>frontendaese</p>
      </div>
    </div>
  );
};
