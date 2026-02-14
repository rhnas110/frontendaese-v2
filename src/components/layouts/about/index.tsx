import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../List";
import { skills } from "../../../constants/skills";
import { MotionInView } from "../../Elements/Motion";

const About = () => {
  return (
    <section className="w-full px-2 pt-60 md:px-4">
      <div className="flex justify-end mb-8">
        <MotionInView
          className="text-right sm:w-7/12"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          once
        >
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
        </MotionInView>
      </div>
      <MotionInView
        className="font-bold text-left text-gray-400 sm:w-7/12"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        once
      >
        <code>Tech stack:</code>
        <List list={skills} />
      </MotionInView>
    </section>
  );
};

export default About;
