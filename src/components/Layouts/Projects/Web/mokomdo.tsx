import js from "../../../../assets/icons/js.png";
import github from "../../../../assets/logos/github.png";
import { FC } from "react";
import { DocsContent, DocsHeader } from "../../../Elements/Docs";
import { MotionInView } from "../../../Elements/Motion";
import { SwiperThumb } from "../../../Elements/Swiper/swiper-thumb";
import { TechStack } from "../../TechStack/TechStack";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlzoyg2ox/image/upload/v1698048681/f-aese/project/mokomdo_thumbnail_nzhibc.webp",
  },
];

const techStackData = [
  {
    id: 1,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_reactjs.svg",
    title: "React",
  },
  {
    id: 2,
    src: js,
    title: "JavaScript",
  },
  {
    id: 3,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_node.svg",
    title: "Node.js",
  },
  {
    id: 4,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_mysql.svg",
    title: "MySQL",
  },
  {
    id: 5,
    src: "https://img.icons8.com/nolan/512/express-js.png",
    title: "Express.js",
  },
  {
    id: 6,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_sequelize.svg",
    title: "Sequelize.js",
  },
  {
    id: 9,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_git.svg",
    title: "Git",
  },
  {
    id: 10,
    src: github,
    title: "GitHub",
  },
  {
    id: 11,
    src: "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
    title: "Chakra UI",
  },
  {
    id: 12,
    src: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    title: "Redux",
  },
  {
    id: 13,
    src: "https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png",
    title: "JWT",
  },
  {
    id: 14,
    src: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/335811e6c4ac5d017a4ce179c624c86e4179ebd9/icons/file_type_nodemon.svg",
    title: "nodemon",
  },
  {
    id: 15,
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
    title: "Figma",
  },
  {
    id: 16,
    src: "https://seeklogo.com/images/J/jira-logo-FD39F795A7-seeklogo.com.png",
    title: "Jira",
  },
];

export const MOKOMDO: FC = () => {
  return (
    <section className="flex flex-col px-2 py-32 md:px-4 gap-y-8">
      <DocsHeader
        title="MOKOMDO"
        description="MOKOMDO (Modal Komputer Doank) is an e-commerce application that
          applies more than one warehouse."
      />

      <MotionInView
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <SwiperThumb image={data as []} />
      </MotionInView>

      <DocsContent title="Introduction">
        <p>
          Developing an e-commerce application by collaborating with 2 members
          from scratch. This application called MOKOMDO is an e-commerce
          application that applies more than one warehouse in storing its goods.
          This application aims to increase shipping speed and also reduce
          shipping costs. MOKOMDO is developed using React.js on the client
          side, while on the server side, we use Node.js combined with
          Express.js for REST API, MySQL/SQL for the database and Sequelize.js
          for the ORM tools.
        </p>
      </DocsContent>

      <DocsContent title="Tech Stack">
        <TechStack data={techStackData} className="h-[75vh]" />
      </DocsContent>
    </section>
  );
};
