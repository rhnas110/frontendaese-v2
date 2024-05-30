import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { HomePage, NotFoundPage } from "./pages";
import { initializeGA, ReactGA } from "./utils/googleAnalytics";

function App() {
  useEffect(() => {
    initializeGA();
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
