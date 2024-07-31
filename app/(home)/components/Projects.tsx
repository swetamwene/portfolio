import React from "react";
import {
  SiAngular,
  SiAxios,
  SiCsharp,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJira,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiSpring,
  SiSwagger,
  SiUnity,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
const Projects = () => {
  const projects = [
    {
      title: "Youtube Clone - React",
      text: [SiReact, SiNodedotjs, SiAxios, SiMui],
      link: "https://magnificent-croissant-f52057.netlify.app/",
      cover: "/yt-clone.png",
      background: "bg-green-500",
    },
    {
      title: "Blog-Hive",
      text: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
      link: "https://github.com/n1shan1/blog-hive-fullstack",
      cover: "/Home.png",
      background: "bg-indigo-500",
    },
    {
      title: "FurnXAR",
      text: [SiUnity, SiCsharp, SiFirebase, SiFigma],
      link: "https://github.com/n1shan1/furn-x-ar",
      cover: "/furn-x-ar.png",
      background: "bg-indigo-500",
    },
    {
      title: "Forex Trading Dashboard [NDA]",
      text: [SiAngular, SiSpring, SiSwagger, SiMysql],
      link: "",
      cover: "/forex-db.jpeg",
      background: "bg-green-500",
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
            <Link key={index} href={project.link}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5 ">
                      {project.text.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
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
