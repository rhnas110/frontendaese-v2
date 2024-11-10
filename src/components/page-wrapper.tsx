import { ReactNode } from "react";

import { Leftbar } from "./leftbar";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MarginWidthWrapper from "./margin-width-wrapper";
import { ModalSettings } from "./Layouts/Settings";
import { Terminal } from "./Layouts/Terminal";

import { cn } from "../utils";

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className="flex">
        <aside className="fixed z-20 hidden h-full lg:flex">
          <Leftbar />
          <Sidebar />
        </aside>
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
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
