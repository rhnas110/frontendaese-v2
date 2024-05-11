import { ReactNode } from "react";
import { cn } from "../utils";

export default function MarginWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col min-h-screen lg:ml-72", className)}>
      {children}
    </div>
  );
}
