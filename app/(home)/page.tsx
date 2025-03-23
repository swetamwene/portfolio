import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Timeline from "./components/Timeline";

const Page = () => {
  return (
    <div className="min-h-screen bg-black p-5 overflow-hidden ">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar className="" />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
