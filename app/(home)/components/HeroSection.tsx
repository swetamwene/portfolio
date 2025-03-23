import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import { MdOutlineFileDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between p-10 mt-10 animate-move-up ">
      <div className="flex flex-col gap-10">
        <div className="space-y-10 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-bold">
            Nice to Meet you! 👋 <br />{" "}
            <span className="underline underline-offset-8 decoration-green-500">
              {"I'm Sweta"}
            </span>
          </h1>
          <p className="md:w-96 text-base text-gray-300">
            {
              "A Passionate Software Engineer & UI/UX Designer. Crafting seamless digital experiences with Java, Python, React, and Django."
            }
          </p>
        </div>
        <div className="group">
          <Link
            href={"mailto:swetuyadav529@gmail.com"}
            className="inline-block cursor-pointer z-50 relative group-hover:cursor-pointer"
          >
            <Title text="Contact Me! 📭" />
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-up-[10]">
          <MovingBorderBtn
            borderRadius="6.0rem"
            duration={3000}
            className="px-2 py-2"
          >
            <MdOutlineFileDownload size={25} />
            <a href="/cv.pdf" download className="p-0 m-0 text-xs">
              Download Resume!
            </a>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
