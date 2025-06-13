"use client";

import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-200/50 pt-25 lg:h-screen lg:pt-0" id="hero">
      <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
        <Image
          width={1000}
          height={1000}
          priority
          src="/portfolio_images/Nowfal.png"
          className="max-w-sm rounded-full object-cover object-top shadow-2xl h-100 w-100"
          alt="Nowfal Portfolio"
          data-aos="fade-left"
        />
        <div data-aos="fade-right">
          <h1 className="text-5xl font-bold">Muhammed Nowfal</h1>
          <div className="flex gap-3 items-center my-2">
            <span className="text-3xl font-bold">I&apos;m a</span>
            <h2 className="font-bold text-3xl my-2 text-blue-500">
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
          <button className="btn bg-blue-500 text-black font-bold text-lg py-6" suppressHydrationWarning>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;