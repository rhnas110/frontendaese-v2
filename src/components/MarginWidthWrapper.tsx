import { ReactNode } from "react";
import { cn } from "../utils";
import { useKeyShortcut } from "../context/KeyShortcutContext";

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
        "flex flex-col min-h-screen lg:ml-72",
        className,
        !showSidebar && "lg:ml-0"
      )}
    >
      {children}
    </div>
  );
}
