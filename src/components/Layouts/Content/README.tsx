import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTabContext } from "../../../context/tab-context";
import { DocsContent, DocsHeader } from "../../Elements/Docs";
import { Highlighter } from "../../Elements/Highlighter";
import { Image } from "../../Elements/Image";

export const README = () => {
  const { addTab } = useTabContext();
  return (
    <section className="flex flex-col px-2 py-32 md:px-4 gap-y-8">
      <DocsHeader
        title="frontendaese"
        description="frontendaese is a personal portfolio website inspired by Visual Studio
          Code."
      />
      <DocsContent title="Introduction">
        <p>
          Welcome to frontendaese, inspired by the look and feel of Visual
          Studio Code, this portfolio acts like an Integrated Development
          Environment (IDE), providing a unique and interactive experience for
          visitors.
        </p>
      </DocsContent>
      <DocsContent title="Tech Stack">
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
      </DocsContent>
      <DocsContent title="Getting Started">
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
      </DocsContent>
      <h2 className="text-2xl font-bold text-center text-gray-300">
        Enjoy the exploration!
      </h2>
    </section>
  );
};
