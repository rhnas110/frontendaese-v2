import { useState } from "react";
import { motion } from "../../../utils/motion";
import { cn } from "../../../utils";
import { transition } from "../../../config/transition.config";

export const Motion = ({
  section = false,
  children,
  className = "",
  ...props
}) => {
  const Comp = section ? motion.section : motion.div;

  return (
    <Comp
      {...props}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </Comp>
  );
};

export const MotionInView = ({
  section = false,
  once = false,
  amount = 0.5,
  children,
  className = "",
  ...props
}) => {
  const Comp = section ? motion.section : motion.div;
  return (
    <Comp
      {...props}
      viewport={{ once, amount }}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </Comp>
  );
};

export const FramerMagnetic = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - rect.left - rect.width / 2;
    const middleY = clientY - rect.top - rect.height / 2;
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ transform: `translate(${x}px, ${y}px)` }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative flex items-center justify-center transition duration-100"
    >
      {children}
    </motion.div>
  );
};
