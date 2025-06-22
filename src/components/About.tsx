"use client";

import { Code, Database, Globe, Terminal, Cpu } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="text-center py-20" id="about-me">
      <section id="about" className="px-4 max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600" 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          About Me
        </motion.h2>

        <div className="bg-base-100 rounded-xl p-8 shadow-2xl" >
          <p className="text-lg leading-relaxed mb-6" data-aos="fade-left">
            Hello! I&apos;m <span className="font-semibol">Muhammed Nowfal</span>,
            a passionate Computer Science student pursuing my B.Sc. at Government Arts College, Coimbatore.
            I specialize in building modern web applications and solving complex problems through code.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4" data-aos="fade-right">
              <div className="p-3 bg-blue-900/50 rounded-full">
                <Code className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Full-Stack Development</h3>
                <p>
                  Currently building applications with React, Next.js, Express, and MongoDB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-left">
              <div className="p-3 bg-purple-900/50 rounded-full">
                <Database className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Database Expertise</h3>
                <p>
                  Strong knowledge in database design and management systems
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-right">
              <div className="p-3 bg-green-900/50 rounded-full">
                <Terminal className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Programming</h3>
                <p>
                  Experience with JavaScript, Java, Python and problem-solving
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-left">
              <div className="p-3 bg-orange-900/50 rounded-full">
                <Globe className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                <p>
                  Built E-Commerce websites and applications with modern frameworks
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-200 shadow-xl" data-aos="fade-right">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-2 text-blue-700">
              <Cpu className="inline" /> Current Focus
            </h3>
            <p>
              I&apos;m currently enhancing my skills in full-stack development while working towards building
              a complete e-commerce solution. When I&apos;m not coding, I enjoy exploring tech trends,
              collaborating with peers, and continuously expanding my knowledge in this ever-evolving field.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;