import { useState } from "react";
import { DialogContent } from "@radix-ui/react-dialog";
import { ArrowsExpandIcon, XIcon } from "@heroicons/react/outline";
// import Swiper required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper-thumb.css";

import Modal from "../../_ui/Modal";
import { Tooltip } from "../../_ui/Tooltip";
import { Slider, Slide } from ".";
import { Image } from "../Image";
import { MotionImage } from "../Motion";

import { useKeyShortcut } from "../../../context/key-shortcut-context";

const DEFAULT_DATA = [
  {
    id: 1,
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
];

export function SwiperThumb({ image = [] }) {
  const { showSidebar } = useKeyShortcut();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modal, setModal] = useState({ open: false, index: 0 });
  const SLIDE_DATA = image.length ? image : DEFAULT_DATA;

  function handleOpen(index) {
    setModal({ open: true, index });
  }

  const THUMBNAIL = SLIDE_DATA[modal?.index]?.image;
  return (
    <>
      <div className="relative h-[75%]">
        <Slider
          style={{
            "--swiper-navigation-color": "#F9F8F6",
            "--swiper-navigation-size": "32px",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full h-full"
        >
          {SLIDE_DATA.map((item, index) => (
            <Slide key={item.id} className="overflow-hidden rounded-lg">
              <MotionImage
                src={item.image}
                alt={`Slide ${item.id}`}
                lazy
                initial={{
                  opacity: 0,
                  filter: "blur(2rem)",
                }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
              />
              <div
                className="absolute z-[1] w-8 h-8 cursor-pointer bottom-2 right-2 opacity-75 animate-pulse"
                onClick={() => handleOpen(index)}
              >
                <ArrowsExpandIcon className="w-full h-full" />
              </div>
            </Slide>
          ))}
        </Slider>
      </div>

      <ModalThumbnail
        open={modal.open}
        onOpenChange={(index) => setModal({ open: false, index })}
        image={THUMBNAIL}
      />

      <Slider
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={showSidebar ? 3 : 4}
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumb-preview h-[25%] py-2"
      >
        {SLIDE_DATA.map((item) => (
          <Slide key={item.id} className="overflow-hidden rounded-lg group">
            <Image src={item.image} alt={`Slide ${item.id}`} lazy />
          </Slide>
        ))}
      </Slider>
    </>
  );
}

function ModalThumbnail({ open, onOpenChange, image }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Overlay className="bg-background/85" />
      <DialogContent className="fixed top-0 left-0 z-20 flex items-center justify-center p-4 h-dvh w-dvw">
        <div className="absolute top-0 right-0">
          <Tooltip content="Close" className="text-gray-400">
            <Modal.Close
              className="absolute text-gray-400 md:top-8 md:right-8 hover:text-gray-500 top-4 right-4"
              asChild
              aria-label="Close"
            >
              <button className="p-1 border-2 border-gray-400 rounded-full hover:border-gray-500">
                <XIcon className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </Modal.Close>
          </Tooltip>
        </div>
        <div className="overflow-hidden border shadow-lg md:w-9/12 rounded-2xl aspect-video border-background">
          <Image src={image} alt="Thumbnail" lazy className="rounded" />
        </div>
      </DialogContent>
    </Modal>
  );
}
