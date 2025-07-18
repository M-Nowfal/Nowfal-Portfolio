
"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import projects from "@/utils/Projects.json";
import Image from 'next/image';
import { motion } from "framer-motion";

const Projects: React.FC = () => {

  const [category, setCategory] = useState("All");
  const [filterProjects, setFilterProjects] = useState(projects);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    if (category === "All") {
      setFilterProjects(projects);
    } else {
      setFilterProjects(projects.filter(project => project.category === category));
    }
  }, [category]);

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section className="flex flex-col items-center py-10" id="projects">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 py-10 mb-5 text-center" data-aos="fade-up">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {["All", "Advanced", "Intermediate", "Basic"].map((cat) => (
          <div key={cat} data-aos="fade-up">
            <motion.button
              onClick={() => {
                setCategory(cat);
                navigator.vibrate(50);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${category === cat
                ? 'bg-gradient-to-r  from-purple-400 to-blue-400 text-white shadow-xl'
                : 'bg-base-300 hover:bg-purple-200/10 hover:shadow-md text-gray-500'
                }`}
              whileTap={{ scale: 0.90 }}
              whileHover={{ scale: 1.07 }}
              suppressHydrationWarning
            >
              {cat}
            </motion.button>
          </div>
        ))}
      </div>

      <div className="w-full px-4 sm:px-6  2xl:px-50">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filterProjects.map((project) => (
            <div key={project.title} data-aos="fade-up">
              <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 relative backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-96 md:h-85">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${expandedProject === project.title && "opacity-100"} transition-opacity duration-500`}></div>

                <div className="h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col" onClick={() => toggleExpand(project.title)}>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-sm font-semibold mb-3 w-fit px-3 py-1 shadow-lg bg-gradient-to-r from-purple-400 to-blue-400 rounded-4xl transition-all duration-300 text-white">
                        {project.category}
                      </h3>
                      <span className={`${expandedProject === project.title ? "opacity-100" : "opacity-0"} text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 text-2xl font-bold cursor-default absolute left-[55%] -translate-[50%] top-10 group-hover:opacity-100`}>
                        {project.title}
                      </span>
                    </div>

                    <div className={`${expandedProject === project.title ? 'opacity-5' : 'opacity-100'} group-hover:opacity-10 transition-opacity duration-300 absolute inset-0 flex items-center justify-center`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        priority={false}
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>

                    <div className={`${expandedProject === project.title ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-300 flex flex-col h-full`}>
                      <div
                        className="mb-4 flex-grow max-h-32 pr-2"
                      >
                        <p className={`${expandedProject !== project.title && 'line-clamp-4'} text-sm font-semibold`}>
                          {project.description}
                        </p>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium text-blue-500/80 mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(tech => (
                            <span key={tech} className="px-2 py-1 bg-gradient-to-r from-blue-400/70 to-purple-400/70 text-white text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-base-300/80 group-hover:bg-blue-600/10 transition-all duration-300 z-20">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="btn bg-gradient-to-r from-purple-400 to-blue-400 text-white w-full transform group-hover:scale-105 transition-transform duration-300"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
