"use client";

import { Code, Database, Globe, Terminal, Cpu, GraduationCap, BookOpen, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about-me">
      <section id="about" className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8" >
            {/* Summary Card */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-200 border border-gray-400/50 backdrop-blur-sm hover:scale-105" >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <BookOpen className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Professional Summary
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Hello! I&apos;m <span className="font-semibold text-blue-300">Muhammed Nowfal</span>,
                      a passionate Computer Science student pursuing my B.Sc. at Government Arts College, Coimbatore.
                      I specialize in building modern web applications and solving complex problems through code.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-200 border border-gray-400/50 backdrop-blur-sm hover:scale-105" >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <GraduationCap className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      Education
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg">B.Sc Computer Science</h4>
                        <p className="text-blue-500">Government Arts College, Coimbatore</p>
                        <p className="text-sm">2023 - Present</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">ST.Michael&apos;s Higher Secondary School</h4>
                        <p className="text-blue-500">Coimbatore</p>
                        <p className="text-sm">2021 - 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8" >
            {/* Skills Highlights */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-200 border border-gray-400/50 backdrop-blur-sm hover:scale-105" >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <Lightbulb className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                      Skills Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-900/50 rounded-full mt-1">
                          <Code className="text-blue-400" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold">Full-Stack Dev</h4>
                          <p className="text-sm">React, Next.js, Express</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-900/50 rounded-full mt-1">
                          <Database className="text-purple-400" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold">Database</h4>
                          <p className="text-sm">MongoDB, SQL</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-900/50 rounded-full mt-1">
                          <Terminal className="text-green-400" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold">Programming</h4>
                          <p className="text-sm">JavaScript, Python, Java</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-900/50 rounded-full mt-1">
                          <Globe className="text-orange-400" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold">Web Dev</h4>
                          <p className="text-sm">E-Commerce solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-200 border border-gray-400/50 backdrop-blur-sm hover:scale-105" >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-full">
                    <Cpu className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                      Current Focus
                    </h3>
                    <p className="leading-relaxed">
                      I&apos;m currently enhancing my skills in full-stack development while working towards building
                      a complete e-commerce solution. When I&apos;m not coding, I enjoy exploring tech trends,
                      collaborating with peers, and continuously expanding my knowledge in this ever-evolving field.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;