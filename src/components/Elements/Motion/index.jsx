import { motion } from "../../../utils/motion";
import { cn } from "../../../utils";
import { transition } from "../../../config/transition.config";

export const Motion = ({ children, className, ...props }) => {
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

export const MotionInView = ({
  once = false,
  amount = 0.5,
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      {...props}
      viewport={{ once, amount }}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};
