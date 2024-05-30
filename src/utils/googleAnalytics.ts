import ReactGA from "react-ga4";
const TRACKING_ID = "G-8B2LQ2ZXLH";

const initializeGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

const trackGAEvent = (category: string, action: string, label: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export { initializeGA, trackGAEvent, ReactGA };
