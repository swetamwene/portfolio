"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiExpress,
  SiGit,
  SiDjango,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiMysql,
  SiJavascript,
  SiCoffeescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "JavaScript", Icon: SiJavascript },
    { text: "Java", Icon: SiCoffeescript },
    { text: "Django", Icon: SiDjango },
    { text: "Express", Icon: SiExpress },
    { text: "SQL", Icon: SiMysql },
    { text: "Node", Icon: SiNodedotjs },
    { text: "Python", Icon: SiPython },
    { text: "Git", Icon: SiGit },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔥"
        className="flex flex-col items-center justify-center -rotate-6 mt-10"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
