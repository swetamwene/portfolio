"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

type TimelineItemProps = {
  year: string;
  title: string;
  company: string;
  description: string;
  index: number;
};

const TimelineItem = ({
  year,
  title,
  company,
  description,
  index,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12 relative bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-28 text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 md:mb-0 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full md:text-center inline-block md:self-start">
          {year}
        </div>

        <div className="relative flex-1 md:ml-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">
            {company}
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      year: "Jan 2024 - Feb 2024",
      title: "Java Backend Developer Intern",
      company: "TuTr Hyperloop, IIT Madras",
      description:
        "Engineered robust TCP/IP communication protocols for real-time data exchange. Optimized network performance, reducing latency by 40%, and collaborated with a cross-functional team to integrate backend services seamlessly.",
    },
    {
      year: "Feb 2024 - Aug 2024",
      title: "UI/UX Intern",
      company: "InterAI",
      description:
        "Designed and optimized AI-driven user interfaces, enhancing engagement by 25%. Developed 20+ high-fidelity Figma wireframes, reducing onboarding friction by 30% while ensuring seamless design-to-development implementation.",
    },
    {
      year: "2023-Present",
      title: "Backend & Full-Stack Development",
      company: "Freelance & Personal Projects",
      description:
        "Developed and deployed scalable applications, including a MERN-based Taxi Booking App, Django REST APIs, and a full-stack JobHunt portal. Specializing in secure authentication, database management, and performance optimization.",
    },
  ];

  return (
    <section id="experience" className="py-10 p-5 sm:p-0">
      <Title
        text="Professional Experience 💼"
        className="flex flex-col items-center justify-center -rotate-6 mt-10"
      />

      <div className="pt-20">
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              index={index}
              year={experience.year}
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
