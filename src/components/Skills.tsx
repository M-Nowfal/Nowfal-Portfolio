import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Skills: React.FC = () => {

  const skills = [
    { img: "/skills_images/html.png", name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { img: "/skills_images/css-3.png", name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { img: "/skills_images/js.png", name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { img: "/skills_images/atom.png", name: "React", url: "https://react.dev/" },
    { img: "/skills_images/nodejs.png", name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
    { img: "/skills_images/mongodb.png", name: "MongoDB", url: "https://www.mongodb.com/docs/" },
    { img: "/skills_images/express.png", name: "Express.js", url: "https://expressjs.com/" },
    { img: "/skills_images/nextjs.png", name: "Next.js", url: "https://nextjs.org/docs" },
    { img: "/skills_images/tailwind-css.png", name: "Tailwind-CSS", url: "https://v2.tailwindcss.com/docs" },
    { img: "/skills_images/bootstrap.png", name: "Bootstrap", url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/" },
    { img: "/skills_images/vscode.png", name: "VS Code", url: "https://code.visualstudio.com/docs" },
    { img: "/skills_images/github.png", name: "Git-Hub", url: "https://docs.github.com/en" },
    { img: "/skills_images/chatgpt.png", name: "ChatGPT", url: "https://platform.openai.com/docs/guides/text?api-mode=responses" },
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
    <div className="min-h-screen text-center pb-20 bg-base-200 pt-10" id="skills">
      <h1 className="text-4xl font-bold text-blue-500 py-10" data-aos="fade-right">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:px-30">
        {skills.map(skill => (
          <div key={skill.name} data-aos="fade-up">
            <Link
              href={skill.url}
              target="_blank"
              className="flex flex-col items-center hover:scale-120 cursor-pointer transition-all duration-300"
            >
              <Image
                src={skill.img}
                width={500}
                height={500}
                alt={skill.name}
                className="w-10"
              />
              <span className="font-bold">{skill.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-blue-400 text-2xl font-bold my-5" data-aos="fade-left">Also familiar with</h1>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {familiarWithSkills.map(familiarSkill => (
              <div key={familiarSkill.name} data-aos="fade-right">
                <Link
                  href={familiarSkill.url}
                  target="_blank"
                  className="flex gap-2 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={familiarSkill.img}
                    width={500}
                    height={500}
                    alt={familiarSkill.name}
                    className="w-8"
                  />
                  <span className="font-semibold">{familiarSkill.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;