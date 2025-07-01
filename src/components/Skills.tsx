"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { img: "/skills_images/html.png", name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { img: "/skills_images/css-3.png", name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { img: "/skills_images/js.png", name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { img: "/skills_images/atom.png", name: "React", url: "https://react.dev/" },
        { img: "/skills_images/nextjs.png", name: "Next.js", url: "https://nextjs.org/docs" },
        { img: "/skills_images/tailwind-css.png", name: "Tailwind CSS", url: "https://v2.tailwindcss.com/docs" },
        { img: "/skills_images/bootstrap.png", name: "Bootstrap", url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { img: "/skills_images/nodejs.png", name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
        { img: "/skills_images/express.png", name: "Express.js", url: "https://expressjs.com/" },
        { img: "/skills_images/mongodb.png", name: "MongoDB", url: "https://www.mongodb.com/docs/" },
      ]
    },
    {
      name: "Tools",
      skills: [
        { img: "/skills_images/vscode.png", name: "VS Code", url: "https://code.visualstudio.com/docs" },
        { img: "/skills_images/github.png", name: "GitHub", url: "https://docs.github.com/en" },
        { img: "/skills_images/chatgpt.png", name: "ChatGPT", url: "https://platform.openai.com/docs/guides/text?api-mode=responses" },
      ]
    }
  ];

  const familiarWithSkills = [
    { img: "/familiar_skills_images/python.png", name: "Python", url: "https://docs.python.org/3/" },
    { img: "/familiar_skills_images/java.png", name: "Java", url: "https://docs.oracle.com/en/java/" },
    { img: "/familiar_skills_images/c++.png", name: "C++", url: "http://devdocs.io/cpp/" },
    { img: "/familiar_skills_images/c.png", name: "C", url: "https://devdocs.io/c/" },
    { img: "/familiar_skills_images/mysql.png", name: "SQL", url: "https://dev.mysql.com/doc/" },
    { img: "/familiar_skills_images/php.png", name: "PHP", url: "https://www.php.net/docs.php" },
    { img: "/familiar_skills_images/cs.png", name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  ];

  return (
    <section className="text-center pb-20 pt-10 px-4 sm:px-6 lg:px-8" id="skills">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 py-10"
      >
        My Skills
      </motion.h1>

      {/* Main Skills */}
      <div className="max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-16" >
            <h2 className="md:flex md:ms-15 text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {category.name}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" >
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                >
                  <Link href={skill.url} target="_blank" className="group">
                    <div
                      className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10  backdrop-blur-sm rounded-xl hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/10"
                      role="button"
                      onClick={() => navigator.vibrate(50)}
                    >
                      <div className="relative w-10 h-10 md:w-16 md:h-16 mx-auto">
                        <Image
                          src={skill.img}
                          width={500}
                          height={500}
                          priority={false}
                          alt={skill.name}
                          className="object-contain"
                        />
                      </div>
                      <span className="mt-2 block text-sm md:text-md md:font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Familiar With Section */}
      <div className="mt-20" >
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500" >
          Also Familiar With
        </h2>

        <div
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
        >
          {familiarWithSkills.map((skill) => (
            <div key={skill.name} data-aos="fade-up">
              <div
                className="px-6 py-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full shadow hover:scale-105 hover:bg-white/10 transition-all duration-300"
                role="button"
                onClick={() => navigator.vibrate(50)}
              >
                <Link href={skill.url} target="_blank" className="flex items-center gap-2 ">
                  <div className="relative w-6 h-6">
                    <Image
                      src={skill.img}
                      width={300}
                      height={300}
                      priority={false}
                      alt={skill.name}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;