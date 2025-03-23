import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
const Navbar = ({ className }: { className: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/swetayadav27",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/swetamwene",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/yadavhaisweta/",
      label: "Instagram",
      Icon: SiInstagram,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-10 decoration-green-800 -rotate-2">
        Sweta Yadav 👋
      </h1>
      <div className="flex item-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              key={index}
              href={social.link}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
