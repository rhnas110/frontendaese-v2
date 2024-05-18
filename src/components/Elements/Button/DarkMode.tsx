import { FC, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { toastInfo } from "../../../utils/toast";

export const DarkMode: FC = () => {
  // TODO: add dark mode, this still dummy
  const [darkMode, setDarkMode] = useState(true);

  function handleDarkMode() {
    setDarkMode(!darkMode);
    return toastInfo("Coming soon...");
  }
  return (
    <div className="flex flex-row justify-between">
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="hidden checkbox"
            defaultChecked={darkMode}
            onClick={handleDarkMode}
          />
          <div className="block h-8 border border-white rounded-full w-14"></div>
          <div
            className={`absolute w-6 h-6 transition rounded-full dot left-1 top-1 ${
              darkMode && "bg-white"
            }`}
          >
            {darkMode ? (
              <MoonIcon className="w-6 h-6 text-background" />
            ) : (
              <SunIcon className="w-6 h-6 text-yellow_vs" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};
