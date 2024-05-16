import { FC } from "react";
import { Image } from "../components/Elements/Image";
import NotFoundImage from "../assets/NotFound.png";

export const NotFound: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen px-2">
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
    </div>
  );
};
