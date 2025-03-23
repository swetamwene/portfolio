"use client";
import React, { useRef } from "react";
import Title from "./Title";
import { motion, useInView } from "framer-motion";
import { FaUser, FaRoute, FaCode, FaLightbulb } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smoother motion
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
    hover: {
      y: -5,
      scale: 1.15,
      color: "#6366f1", // Adding color animation on hover
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const aboutSections = [
    {
      title: "Who I Am",
      content:
        "I'm Sweta Yadav, a backend-focused software engineer passionate about building scalable, high-performance systems. With expertise in Java, Python, Node.js, and Django, I develop efficient and secure backend architectures that drive seamless digital experiences.",
      icon: <FaUser className="text-2xl mb-2 text-indigo-500" />,
    },
    {
      title: "My Journey",
      content:
        "My journey started with a deep curiosity for how systems communicate and process data. Over time, I have engineered real-time data exchange protocols, optimized network performance, and collaborated across teams to deliver robust software solutions.",
      icon: <FaRoute className="text-2xl mb-2 text-emerald-500" />,
    },
    {
      title: "What I Do",
      content:
        "I specialize in backend development, API design, and database management, leveraging technologies like Django, Express.js, PostgreSQL, and MongoDB. My work focuses on optimizing system efficiency, enhancing security, and enabling real-time data processing.",
      icon: <FaCode className="text-2xl mb-2 text-amber-500" />,
    },
    {
      title: "Beyond Coding",
      content:
        "When I'm not coding, I enjoy exploring cybersecurity concepts, refining UI/UX workflows, and staying updated with the latest advancements in backend architecture and performance optimization.",
      icon: <FaLightbulb className="text-2xl mb-2 text-rose-500" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-12 mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Title
          text="About Me 👨‍💻"
          className="flex flex-col items-center justify-center -rotate-6 mt-10 mb-16"
        />
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {aboutSections.map((section, index) => (
          <motion.div
            key={section.title}
            variants={cardVariants}
            whileHover="hover"
            className="bg-black/5 dark:bg-white/5 p-7 rounded-xl backdrop-blur-md border border-transparent hover:border-gray-300/15 dark:hover:border-white/15 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col items-center mb-4">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                {section.icon}
              </motion.div>
              <motion.h3
                variants={contentVariants}
                className="text-xl font-bold mt-2"
              >
                {section.title}
              </motion.h3>
            </div>
            <motion.div
              variants={contentVariants}
              className="w-1/4 h-0.5 bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent mx-auto mb-5 rounded-full"
            />
            <motion.p
              variants={contentVariants}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {section.content}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
