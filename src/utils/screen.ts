function getWindowWidth() {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
}

function getWindowHeight() {
  return Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
}

const width = getWindowWidth();
// const height = getWindowHeight();

const MobileXs = width < 375 && width >= 0;
const MobileSm = width < 480 && width >= 375;
const MobileMd = width < 640 && width >= 480;
const MobileLg = width < 768 && width >= 640;
const Tablet = width < 1024 && width >= 768;
const Desktop = width >= 1024;

export {
  getWindowHeight,
  getWindowWidth,
  MobileXs,
  MobileSm,
  MobileMd,
  MobileLg,
  Tablet,
  Desktop,
};
