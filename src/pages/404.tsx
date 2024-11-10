import { FC } from "react";
import { Image } from "../components/Elements/Image";
import { Motion } from "../components/Elements/Motion";
import NotFoundImage from "../assets/not-found.png";

export const NotFound: FC = () => {
  return (
    <Motion
      className="flex items-center justify-center h-screen px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center opacity-75">
        <Image
          src={NotFoundImage}
          alt="Not Found"
          lazy
          className="bg-transparent w-80 saturate-0"
        />
        <div className="text-center text-brown_vs">
          <h1 className="text-2xl font-bold text-gray-300 xs:text-4xl">
            Oh no! i thinks its bugs
          </h1>
          <p className="text-lg">
            You need to turn off lights, it attracts bugs.
          </p>
        </div>
      </div>
    </Motion>
  );
};
