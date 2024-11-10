import { FC } from "react";
import { IconCloud } from "../../../_ui/IconCloud";
import { DocsContent, DocsHeader } from "../../../Elements/Docs";
import { MotionInView } from "../../../Elements/Motion";
import { SwiperThumb } from "../../../Elements/Swiper/swiper-thumb";

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
        <IconCloud iconSlugs={slugs} />
      </DocsContent>
    </section>
  );
};
