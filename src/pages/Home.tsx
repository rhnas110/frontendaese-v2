import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";

import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MarginWidthWrapper from "../components/MarginWidthWrapper";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex w-full h-max">
      <div className="fixed hidden h-full lg:block">
        <Sidebar />
      </div>
      <MarginWidthWrapper>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="bg-[#424242] h-16 w-full fixed hidden lg:block">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {activeTab === "home" && (
          <>
            <Header />
            <About />
            <Resume />
            <Contact />
          </>
        )}
        {activeTab === "about" && <About />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "contact" && <Contact />}
      </MarginWidthWrapper>
    </div>
  );
};

export default Home;
