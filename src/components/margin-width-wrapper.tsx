import { ReactNode } from "react";
import { cn } from "../utils";
import { useKeyShortcut } from "../context/key-shortcut-context";

export default function MarginWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { showSidebar } = useKeyShortcut();
  return (
    <div
      className={cn(
        "flex flex-col min-h-screen lg:ml-[calc(288px+3rem)]",
        className,
        !showSidebar && "lg:ml-12"
      )}
    >
      {children}
    </div>
  );
}
