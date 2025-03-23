import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMapbox,
  SiClerk,
  SiDjango,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiFigma,
} from "react-icons/si";

import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
const Projects = () => {
  const projects = [
    {
      title: "MERN Taxi Booking App",
      text: [SiNextdotjs, SiTypescript, SiTailwindcss, SiMapbox, SiClerk],
      link: "https://github.com/swetamwene/taxi-booking-app",
      cover: "/images/taxi.png",
      background: "bg-blue-500",
    },
    {
      title: "Django CRUD API",
      text: [SiDjango, SiPostgresql, SiGit],
      link: "https://github.com/swetamwene/mysite",
      cover: "/images/api.png",
      background: "bg-green-500",
    },
    {
      title: "JobHunt - Full Stack Job Portal",
      text: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      link: "https://github.com/swetamwene/jobhunt-main",
      cover: "/images/jobhunt.png",
      background: "bg-green-500",
    },
    {
      title: "InterAI UI/UX Designs",
      text: [SiFigma],
      link: "https://www.figma.com/@swetayadav",
      cover: "/images/interain1.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🌟"
        className="flex flex-col items-center justify-center -rotate-6 mt-10"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link} target="_blank">
              <div className={cn("p-2 rounded-md", project.background)}>
                <div className="block sm:hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full"
                  />
                  <div className="mt-3 space-y-3">
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-3">
                      {project.text.map((Icon, idx) => {
                        return <Icon className="w-6 h-6" key={idx} />;
                      })}
                    </div>
                  </div>
                </div>
                <DirectionAwareHover
                  className="hidden sm:block w-full space-y-5 cursor-pointer h-auto sm:h-80"
                  imageUrl={project.cover}
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.text.map((Icon, idx) => {
                        return <Icon className="w-8 h-8" key={idx} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
