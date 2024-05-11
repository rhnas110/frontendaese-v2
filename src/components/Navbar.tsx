import { useState } from "react";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

import TSIcon from "../assets/icons/TSIcon.png";
import { Image } from "./Elements/Image";

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [closedTabs, setClosedTabs] = useState<string[]>([]);

  return (
    <div className="flex flex-row h-full">
      <Container
        className={
          activeTab === "home"
            ? "bg-[#1e1e1e] text-yellow_vs"
            : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
        }
        onClick={() => {
          setActiveTab("home");
        }}
      >
        <Image
          src={TSIcon}
          alt="JS Icon"
          className="mr-1 bg-transparent w-7 h-7"
          lazy
        />
        Home.ts
      </Container>

      {closedTabs.includes("about") ? null : (
        <Container
          className={
            activeTab === "about"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            setActiveTab("about");
          }}
        >
          <Image
            src={TSIcon}
            alt="JS Icon"
            className="mr-1 bg-transparent w-7 h-7"
            lazy
          />
          About.ts
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab("home");
              setClosedTabs((prevState) => [...prevState, "about"]);
            }}
          />
        </Container>
      )}

      {closedTabs.includes("resume") ? null : (
        <Container
          className={
            activeTab === "resume"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            setActiveTab("resume");
          }}
        >
          <Image
            src={TSIcon}
            alt="JS Icon"
            className="mr-1 bg-transparent w-7 h-7"
            lazy
          />
          Resume.ts
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab("home");
              setClosedTabs((prevState) => [...prevState, "resume"]);
            }}
          />
        </Container>
      )}

      {closedTabs.includes("contact") ? null : (
        <Container
          className={
            activeTab === "contact"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            setActiveTab("contact");
          }}
        >
          <Image
            src={TSIcon}
            alt="JS Icon"
            className="mr-1 bg-transparent w-7 h-7"
            lazy
          />
          Contact.ts
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab("home");
              setClosedTabs((prevState) => [...prevState, "contact"]);
            }}
          />
        </Container>
      )}
    </div>
  );
};
export default Navbar;
