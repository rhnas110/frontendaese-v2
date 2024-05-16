import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { HTMLProps, ReactNode } from "react";
import { cn } from "../../../utils";

export const Tooltip = ({
  children,
  content,
  className,
  withArrow,
  arrowClassName,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: {
  children: ReactNode;
  content?: string;
  className?: string;
  withArrow?: boolean;
  arrowClassName?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  props?: HTMLProps<HTMLDivElement>;
}) => {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side="bottom"
          align="center"
          {...props}
          className={cn(
            "px-2 flex items-center justify-center border bg-background/50 border-backgroundSecondary rounded-sm text-base",
            className
          )}
        >
          {content}
          {withArrow && (
            <TooltipPrimitive.Arrow
              width={10}
              height={5}
              className={cn("fill-backgroundSecondary", arrowClassName)}
            />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
