import { useState, useEffect } from "react";
import NeuralMesh from "../components/NeuralMesh";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data.ts";

const titles = [
  "AI Engineer.",
  "Prompt Engineer.",
  "Backend Developer.",
  "Technical Architect.",
];

const featuredProjects = PROJECTS.filter((p) => p.featured);

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center px-6 md:px-20 bg-brand-black pointer-events-auto  ">
        <h1 className="font-lora text-6xl md:text-9xl font-semibold  leading-[0.9] text-center md:text-left  text-white mb-4">
          Hello I am <br />
          <span className="text-brand-primary">Seif </span>
          Abdelaity,
        </h1>

        <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-x-3 font-lora text-2xl md:text-4xl  text-white">
          <span>I am a</span>


          <div className="relative h-[1.2em] overflow-hidden inline-flex flex-col items-center  ">
            <div
              className="transition-all duration-700 ease-in-out"
              style={{ transform: `translateY(-${index * 25}%)` }}
            >
              {titles.map((title, i) => (
                <div
                  key={i}
                  className={`h-[1.2em] flex items-center justify-center font-mono text-xl md:text-3xl  tracking-wider not-italic ${
                    index === i ? "text-brand-primary opacity-100" : "opacity-0"
                  }`}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <NeuralMesh />
        </div>
      </section>
      <div className="px-6 md:px-20 flex flex-col md:flex-row justify-between items-center ">
      <h1 className="font-lora text-4xl md:text-6xl mb-10 font-bold text-white text-center">
        Featured Projects
      </h1>
              <a
          href="#projects"
          className="font-primary hidden md:inline-block  text-brand-primary  text-md md:text-xl hover:underline underline-offset-2 transition-all duration-500"
        >
          View All Projects
        </a>

      </div>
      <div className="px-6 md:px-20 mb-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            imagePath={project.imagePaths[0]}
          />
        ))}

      <a
          href="#projects"
          className="font-primary inline-block md:hidden text-center  text-brand-primary  text-md md:text-xl hover:underline underline-offset-2 transition-all duration-500"
        >
          View All Projects
        </a>
      </div>
    </>
  );
};

export default Home;
