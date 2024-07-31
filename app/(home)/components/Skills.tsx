"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAngular,
  SiGit,
  SiGithub,
  SiJira,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Angular", Icon: SiAngular },
    { text: "Node", Icon: SiNodedotjs },
    { text: "Tailwind", Icon: SiTailwindcss },
    { text: "Jira", Icon: SiJira },
    { text: "MongoDB", Icon: SiMongodb },
    { text: "Git", Icon: SiGit },
    { text: "TypeScript", Icon: SiTypescript },
    { text: "Spring", Icon: SiSpringboot },
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
