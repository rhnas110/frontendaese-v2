import "./index.css";
import { useEffect, useRef, useState } from "react";
import { MotionImage } from "../../elements/motion";
import { motion } from "../../../utils/motion";
import { Sticker } from "../../../types";
import { cn } from "../../../utils";

const getRandomPosition = (canvasWidth: number, canvasHeight: number) => {
  const x = Math.random() * (canvasWidth - 100); // Adjust based on sticker size
  const y = Math.random() * (canvasHeight - 100); // Adjust based on sticker size
  return { x, y };
};

export const TechStack = ({
  data,
  className,
}: {
  data: Sticker[];
  className?: string;
}) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [initialPositions, setInitialPositions] = useState<
    { x: number; y: number }[]
  >([]);

  useEffect(() => {
    if (constraintsRef.current) {
      const canvasWidth = constraintsRef.current.clientWidth;
      const canvasHeight = constraintsRef.current.clientHeight;
      const positions = data.map(() =>
        getRandomPosition(canvasWidth, canvasHeight),
      );
      setInitialPositions(positions);
    }
  }, [constraintsRef, data]);
  return (
    <div
      className={cn("w-full h-[50vh] relative", className)}
      ref={constraintsRef}
    >
      <span className="top ts"></span>
      <span className="right ts"></span>
      <span className="bottom ts"></span>
      <span className="left ts"></span>
      {initialPositions.length > 0 &&
        data.map((sticker: Sticker, index: number) => (
          <motion.div
            key={sticker.id}
            className="sticker"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileTap={{ cursor: "grabbing" }}
            initial={{ y: 0, opacity: 0 }} // Start above the canvas with opacity 0
            whileInView={{
              x: initialPositions[index].x,
              y: initialPositions[index].y,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.1, // Stagger animation for each sticker
              duration: 0.5,
            }}
          >
            <MotionImage
              src={sticker.src}
              alt={`Sticker ${sticker.id}`}
              lazy
              className="bg-transparent"
            />
            <p className="leading-none text-center text-gray-400">
              {sticker.title}
            </p>
          </motion.div>
        ))}
    </div>
  );
};
