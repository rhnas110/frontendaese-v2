import { ClipboardListIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { MotionInView } from "../../Elements/Motion";

const Resume = () => {
  return (
    <MotionInView
      section
      className="px-2 pt-60 md:px-4"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      once
    >
      <div className="flex items-center gap-2">
        <ClipboardListIcon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow_vs" />
        <code className="text-[#e6f1ff] text-3xl whitespace-nowrap">
          Resume
        </code>
      </div>
      <div className="flex flex-col py-2 text-lg text-gray-400 gap-y-10">
        <div className="flex gap-1">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="flex flex-col w-3/4 gap-2.5">
            <div className="flex flex-col">
              <code className="text-blue_vs">
                Purwadhika Digital Technology School
              </code>
              <code className="text-sm italic text-lightblue_vs">
                Full Stack Web Development
              </code>
              <code className="text-xs text-brown_vs">• 2022 - 2023</code>
            </div>
            <div className="flex flex-col">
              <code className="text-blue_vs">SMA Negeri 1 Cikarang Barat</code>
              <code className="text-sm italic text-lightblue_vs">Science</code>
              <code className="text-xs text-brown_vs">• 2018 - 2021</code>
            </div>
          </div>
        </div>
        <div>
          <Link
            to="https://frontendaese.netlify.app/resume?lang=en"
            target="_blank"
            className="px-3 py-2 font-semibold transition duration-300 rounded text-background hover:bg-transparent hover:text-lightblue_vs bg-lightblue_vs hover:border hover:border-lightblue_vs"
          >
            <code>See more</code>
          </Link>
        </div>
      </div>
    </MotionInView>
  );
};

export default Resume;
