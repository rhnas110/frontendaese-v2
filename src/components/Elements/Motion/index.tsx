import { FC, ReactNode } from "react";
import { motion } from "../../../utils/motion";
import { cn } from "../../../utils";
import { transition } from "../../../config/transition.config";
import { ILoveTypeScript } from "../../../types";

type MotionProps = {
  children: ReactNode;
  className?: string;
  transition?: ILoveTypeScript;
  initial?: { opacity: number; x?: number; y?: number };
  animate?: { opacity: number; x?: number; y?: number };
  exit?: { opacity: number; x?: number; y?: number };
};
export const Motion: FC<MotionProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      {...props}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};

type MotionInViewProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  transition?: ILoveTypeScript;
  initial?: { opacity: number; x?: number; y?: number };
  animate?: { opacity: number; x?: number; y?: number };
  exit?: { opacity: number; x?: number; y?: number };
  whileInView: {
    opacity: number;
    x?: number;
    y?: number;
  };
};
export const MotionInView: FC<MotionInViewProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      {...props}
      viewport={{ once: props.once, amount: props.amount || 0.5 }}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};
