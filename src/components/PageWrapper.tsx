import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import MarginWidthWrapper from "./MarginWidthWrapper";
import { cn } from "../utils";
import MobileMenu from "./MobileMenu";

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className="flex ">
        <div className="fixed hidden h-full lg:block">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-x-hidden">
          <MarginWidthWrapper>
            <MobileMenu />
            <div className={cn("flex flex-col flex-grow space-y-2", className)}>
              {children}
            </div>
          </MarginWidthWrapper>
        </main>
      </div>
    </>
  );
}
