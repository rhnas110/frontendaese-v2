import { FC } from "react";
import { IconCloud } from "../../../_ui/IconCloud";
import { DocsContent, DocsHeader } from "../../../Elements/Docs";
import { MotionInView } from "../../../Elements/Motion";
import { SwiperThumb } from "../../../Elements/Swiper/swiper-thumb";

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

const slugs = [
  "javascript",
  "react",
  "tailwindcss",
  "framer",
  "vite",
  "netlify",
  "lenis",
  "visualstudiocode",
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
        <IconCloud iconSlugs={slugs} />
      </DocsContent>
    </section>
  );
};
