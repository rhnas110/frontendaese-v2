import { useState } from "react";
import Hero from "./Hero";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import Navbar from "../../Navbar";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div className="bg-[#424242] h-16 w-full fixed hidden lg:block">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab === "home" && (
        <>
          <Hero />
          <About />
          <Resume />
          <Contact />
        </>
      )}
      {activeTab === "about" && <About />}
      {activeTab === "resume" && <Resume />}
      {activeTab === "contact" && <Contact />}
    </>
  );
};
