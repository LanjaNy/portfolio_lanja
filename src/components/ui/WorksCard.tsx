"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsGithub, BsGitlab } from "react-icons/bs";

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
  gitlab: string;
}

const WorkCard = ({ project, index }: { project: Project; index: number }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent, url: string) => {
    if (!url) return;
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsLoading(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative bg-black/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={(e) => project.live && handleClick(e, project.live)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-end pointer-events-none">
          <div className="h-1 w-full bg-accent/20">
            <div className="h-full bg-accent animate-progress"></div>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-4xl font-extrabold text-transparent text-outline">
            {project.num}
          </span>
          <span className="text-sm font-medium text-accent">{project.category}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-white/60 text-sm flex-grow mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          {project.live && (
            <Link
              href={project.live}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent/10 rounded-full p-3 hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <BsArrowRight className="text-xl" />
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 rounded-full p-3 hover:bg-white/10 transition-all"
            >
              <BsGithub className="text-xl text-white" />
            </Link>
          )}
          {project.gitlab && (
            <Link
              href={project.gitlab}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 rounded-full p-3 hover:bg-white/10 transition-all"
            >
              <BsGitlab className="text-xl text-white" />
            </Link>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </motion.div>
  );
};

export default WorkCard;