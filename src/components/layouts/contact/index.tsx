import { MailIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { FramerMagnetic, MotionInView } from "../../elements/motion";

const Contact = () => {
  return (
    <MotionInView
      section
      className="px-2 py-60 md:px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex items-center justify-center gap-2">
        <MailIcon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow_vs" />
        <code className="text-[#e6f1ff] text-3xl whitespace-nowrap">
          Get In Touch
        </code>
      </div>
      <div className="flex flex-col items-center justify-center sm:max-w-[60%] py-2 mx-auto text-lg text-gray-400 gap-y-10">
        <code>
          Currently looking for new opportunities, you can contact me by
          clicking the button below. If you have any questions or just want to
          say hello, please feel free to contact me and I will try my best to
          get back to you!
        </code>
        <FramerMagnetic>
          <Link
            to="mailto:raihanas110@gmail.com"
            target="_blank"
            className="px-3 py-2 font-semibold transition duration-300 rounded text-background hover:bg-transparent hover:text-lightblue_vs bg-lightblue_vs hover:border hover:border-lightblue_vs"
          >
            <code>Contact me</code>
          </Link>
        </FramerMagnetic>
      </div>
    </MotionInView>
  );
};

export default Contact;
