import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../../List";
import { skills } from "../../../constants/skills";

const About = () => {
  return (
    <div className="w-full px-2 pt-60">
      <div className="flex justify-end mb-8">
        <div className="text-right sm:w-7/12">
          <div className="flex items-center justify-end gap-2">
            <code className="text-[#e6f1ff] text-3xl whitespace-nowrap">
              About Me
            </code>
            <IdentificationIcon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow_vs" />
          </div>
          <code className="py-2 text-lg text-gray-400">
            A Fullstack Web Developer graduated from Purwadhika Digital
            Technology School with 1 year of experience, specializing in
            JavaScript for both backend (Node.js, Express.js) and frontend
            (React.js, HTML, CSS, Tailwind). Committed to designing functional,
            visually appealing, and responsive websites. Thrives in
            collaborative environments and continually seeks to enhance my
            skills for tackling new challenges in web development.
          </code>
        </div>
      </div>
      <div className="font-bold text-left text-gray-400 sm:w-7/12">
        <code>Tech stack:</code>
        <List list={skills} />
      </div>
    </div>
  );
};

export default About;
