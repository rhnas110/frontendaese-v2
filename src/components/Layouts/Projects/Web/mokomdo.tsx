import { FC } from "react";
import { MotionInView } from "../../../Elements/Motion";
import { SwiperThumb } from "../../../Elements/Swiper/SwiperThumb";
import { IconCloud } from "../../../_ui/IconCloud";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlzoyg2ox/image/upload/v1698048681/f-aese/project/mokomdo_thumbnail_nzhibc.webp",
  },
];

const slugs = [
  "javascript",
  "react",
  "chakraui",
  "nodedotjs",
  "express",
  "mysql",
  "sequelize",
  "html5",
  "css3",
  "redux",
  "jsonwebtokens",
  "nodemon",
  "dotenv",
  "figma",
  "git",
  "jira",
  "github",
  "visualstudiocode",
];

export const MOKOMDO: FC = () => {
  return (
    <section className="flex flex-col px-2 py-32 md:px-4 gap-y-8">
      <MotionInView
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <h1 className="text-4xl font-bold text-gray-300">MOKOMDO</h1>
        <hr className="h-px my-4 border-0 opacity-75 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
        <p>
          MOKOMDO (Modal Komputer Doank) is an e-commerce application that
          applies more than one warehouse.
        </p>
      </MotionInView>

      <MotionInView
        className="h-[95vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <SwiperThumb image={data as []} />
      </MotionInView>

      <MotionInView
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
        once
      >
        <h2 className="text-2xl font-bold text-gray-300">Introduction</h2>
        <hr className="h-px mt-2 mb-4 border-0 rounded opacity-75 bg-gradient-to-r from-neutral-500 via-transparent to-transparent" />
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
      </MotionInView>

      <MotionInView
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
        once
      >
        <h2 className="text-2xl font-bold text-gray-300">Tech Stack</h2>
        <hr className="h-px mt-2 mb-4 border-0 rounded opacity-75 bg-gradient-to-r from-neutral-500 via-transparent to-transparent" />
        <IconCloud iconSlugs={slugs} />
      </MotionInView>
    </section>
  );
};
