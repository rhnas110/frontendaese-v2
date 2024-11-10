import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTabContext } from "../../../context/tab-context";
import { Highlighter } from "../../Elements/Highlighter";
import { Image } from "../../Elements/Image";
import { Motion, MotionInView } from "../../Elements/Motion";

export const README = () => {
  const { addTab } = useTabContext();
  return (
    <section className="flex flex-col px-2 py-32 md:px-4 gap-y-8">
      <Motion
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <h1 className="text-4xl font-bold text-gray-300">frontendaese</h1>
        <hr className="h-px my-4 border-0 opacity-75 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
        <p>
          frontendaese is a personal portfolio website inspired by Visual Studio
          Code.
        </p>
      </Motion>
      <MotionInView
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
        once
      >
        <h2 className="text-2xl font-bold text-gray-300">Introduction</h2>
        <hr className="h-px mt-2 mb-4 border-0 rounded opacity-75 bg-gradient-to-r from-neutral-500 via-transparent to-transparent" />
        <p>
          Welcome to frontendaese, inspired by the look and feel of Visual
          Studio Code, this portfolio acts like an Integrated Development
          Environment (IDE), providing a unique and interactive experience for
          visitors.
        </p>
      </MotionInView>
      <MotionInView
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
        once
      >
        <h2 className="text-2xl font-bold text-gray-300">Tech Stack</h2>
        <hr className="h-px mt-2 mb-4 border-0 rounded opacity-75 bg-gradient-to-r from-neutral-500 via-transparent to-transparent" />
        <div className="mx-auto lg:max-w-[50%]">
          <Image
            src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/React/React.png"
            alt="React"
            className="w-full h-full transition duration-300 bg-transparent saturate-0 hover:saturate-100"
            lazy
          />
          <div className="grid grid-cols-3 gap-x-2">
            <Image
              src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
              className="object-contain transition duration-500 bg-transparent saturate-0 hover:saturate-100"
              lazy
            />
            <Image
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind CSS"
              className="object-contain transition duration-500 bg-transparent saturate-0 hover:saturate-100"
              lazy
            />
            <Image
              src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue"
              alt="Framer Motion"
              className="object-contain transition duration-500 bg-transparent saturate-0 hover:saturate-100"
              lazy
            />
          </div>
        </div>
      </MotionInView>
      <MotionInView
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
        once
      >
        <h2 className="text-2xl font-bold text-gray-300">Getting Started</h2>
        <hr className="h-px mt-2 mb-4 border-0 rounded opacity-75 bg-gradient-to-r from-neutral-500 via-transparent to-transparent" />
        <Highlighter
          language="bash"
          style={anOldHope}
          lineProps={() => ({
            style: {
              cursor: "pointer",
              fontStyle: "italic",
            },
            onClick() {
              addTab({ id: "home", title: "Home.ts" });
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            },
          })}
          wrapLines
        >
          {"cd ./src/pages/Home"}
        </Highlighter>
      </MotionInView>
      <h2 className="text-2xl font-bold text-center text-gray-300">
        Enjoy the exploration!
      </h2>
    </section>
  );
};
