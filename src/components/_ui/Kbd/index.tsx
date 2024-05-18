import { FC, ReactNode } from "react";
import { cn } from "../../../utils";

export const Kbd: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <kbd
      className={cn(
        "px-2 py-1.5 text-xs font-semibold text-gray-300 rounded-md bg-neutral-600 border-neutral-500 border",
        className
      )}
    >
      {children}
    </kbd>
  );
};
