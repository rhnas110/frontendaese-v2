// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const Slider = ({ children, ...props }) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export { Slider, SwiperSlide as Slide };
