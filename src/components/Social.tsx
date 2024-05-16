import { FC } from "react";
import { Link } from "react-router-dom";

import { Tooltip } from "./_ui/Tooltip";
import { Image } from "./Elements/Image";

import SOCIAL from "../constants/social";

export const Social: FC = () => {
  return (
    <div className="flex items-center justify-between px-4">
      {SOCIAL.map((social) => (
        <Tooltip content={social.name} key={social.name}>
          <Link to={social.url} target="_blank">
            <Image
              src={social.icon}
              alt={social.name}
              className="w-10 h-10 transition duration-500 bg-transparent text-yellow_vs hover:scale-125"
              lazy
            />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};
