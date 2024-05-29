import { FC } from "react";

export const Label: FC = () => {
  return (
    <code className="text-gray-300 cursor-pointer hover:underline hover:underline-offset-1">
      <span className="text-green_vs">guest@{window.location.origin}</span>:
      <span className="text-blue_vs">~</span>$
    </code>
  );
};
