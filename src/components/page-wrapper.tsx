import { ReactNode } from "react";

import { Topbar } from "./topbar";
import { Leftbar } from "./leftbar";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MarginWidthWrapper from "./margin-width-wrapper";
import { ModalSettings } from "./layouts/settings";
import { Terminal } from "./layouts/terminal";

import { cn } from "../utils";

const _hideTopbarRaw = import.meta.env.VITE_HIDE_TOPBAR;
const hideTopbar =
  _hideTopbarRaw === "true" ||
  _hideTopbarRaw === "1" ||
  _hideTopbarRaw === true;

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  console.log("[WRAPPER] useTopbar", !hideTopbar);
  return (
    <>
      {!hideTopbar && <Topbar />}
      <div className="flex">
        <aside
          className={cn("fixed z-20 hidden h-full lg:flex", {
            "mt-8 h-[calc(100%-2rem)]": !hideTopbar,
          })}
        >
          <Leftbar />
          <Sidebar />
        </aside>
        <Navbar />
        <main
          className={cn("flex-1 overflow-x-hidden", {
            "mt-8": !hideTopbar,
          })}
        >
          <MarginWidthWrapper>
            <div className={cn("flex flex-col flex-grow space-y-2", className)}>
              {children}
              <Terminal />
            </div>
          </MarginWidthWrapper>
          <ModalSettings />
        </main>
      </div>
    </>
  );
}
