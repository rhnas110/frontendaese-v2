import js from "../../../../assets/icons/js.png";
import framer from "../../../../assets/logos/framer-motion.webp";
import { FC } from "react";
import { DocsContent, DocsHeader } from "../../../Elements/Docs";
import { MotionInView } from "../../../Elements/Motion";
import { SwiperThumb } from "../../../Elements/Swiper/swiper-thumb";
import { TechStack } from "../../TechStack/TechStack";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlzoyg2ox/image/upload/v1731234278/f-aese/project/preview_tsgvmj.png",
  },
  {
    id: 2,
    image: "https://im-pact.netlify.app/assets/default-DNPwH3oZ.gif",
  },
  {
    id: 3,
    image: "https://im-pact.netlify.app/assets/com-3-DjY4UI7e.jpg",
  },
];

const techStackData = [
  {
    id: 1,
    src: js,
    title: "JavaScript",
  },
  {
    id: 2,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_reactjs.svg",
    title: "React",
  },
  {
    id: 3,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_tailwind.svg",
    title: "Tailwind CSS",
  },
  {
    id: 4,
    src: framer,
    title: "Framer",
  },
  {
    id: 5,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_vite.svg",
    title: "Vite",
  },
  {
    id: 6,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_light_netlify.svg",
    title: "Netlify",
  },
];

export const Impact: FC = () => {
  return (
    <section className="flex flex-col px-2 py-32 md:px-4 gap-y-8">
      <DocsHeader
        title="impact."
        description="impact. is Genshin Impact Community Website."
      />

      <MotionInView
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <SwiperThumb image={data as []} />
      </MotionInView>

      <DocsContent title="Introduction">
        <p>
          Welcome to impact., the ultimate destination for Genshin Impact
          enthusiasts! Dive into the immersive world of Teyvat and join a
          vibrant community where you can exchange ideas, share knowledge, and
          embark on epic adventures together.
        </p>
      </DocsContent>

      <DocsContent title="Tech Stack">
        <TechStack data={techStackData} />
      </DocsContent>
    </section>
  );
};
