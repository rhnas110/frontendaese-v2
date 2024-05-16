import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import MarginWidthWrapper from "./MarginWidthWrapper";
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
        <div className="fixed z-20 hidden h-full lg:block">
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
