import Lenis from "lenis";
import { useEffect } from "react";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
};

export default useLenis;
