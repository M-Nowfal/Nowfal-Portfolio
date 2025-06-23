"use client";

import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="hero pt-20" id="hero">
      <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            width={1000}
            height={1000}
            priority
            src="/portfolio_images/Nowfal.png"
            className="max-w-xs sm:max-w-sm rounded-full object-cover object-top shadow-2xl md:h-100 md:w-100 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-200"
            alt="Nowfal Portfolio"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">Muhammed Nowfal</h1>
          <div className="flex gap-3 items-center my-2">
            <span className="text-xl sm:text-3xl font-bold">I&apos;m a</span>
            <h2 className="font-bold text-xl sm:text-3xl my-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Dev", "React Developer",
                    "Express Developer",
                    "Node.js Developer"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 30
                }}
              />
            </h2>
          </div>
          <motion.button
            className="btn bg-gradient-to-r  from-purple-400 to-blue-400 text-white font-semibold md:font-bold text-lg py-5 btn-sm md:btn-md"
            onClick={() => {
              navigator.vibrate(50);
              window.open("resume/Nowfal Resume.pdf", "_blank");
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            suppressHydrationWarning
          >Resume
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;