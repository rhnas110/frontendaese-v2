import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import MarginWidthWrapper from "./MarginWidthWrapper";
import { cn } from "../utils";
import { useKeyShortcut } from "../context/KeyShortcutContext";

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { showSidebar } = useKeyShortcut();
  return (
    <>
      <div className="flex">
        <div
          className={`fixed z-20 hidden h-full ${showSidebar && "lg:block"}`}
        >
          <Sidebar />
        </div>
        <main className="flex-1 overflow-x-hidden">
          <MarginWidthWrapper>
            <div className={cn("flex flex-col flex-grow space-y-2", className)}>
              {children}
            </div>
          </MarginWidthWrapper>
        </main>
      </div>
    </>
  );
}
