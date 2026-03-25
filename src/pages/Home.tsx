import { useState, useEffect } from "react";
import NeuralMesh from "../components/NeuralMesh";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projectsData.ts";
import { Reveal } from "../components/animations/Reveal.tsx";
import Capabilities from "../components/Capabilities.tsx";
import HomeScroller from "../components/HomeScroller.tsx";
import { Link } from "react-router-dom";

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
      <div className="absolute inset-0 z-0">
        <NeuralMesh />
      </div>

      <Reveal>
        <section className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center px-6 md:px-20 bg-transparent pointer-events-auto  ">
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
                      index === i
                        ? "text-brand-primary opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <HomeScroller></HomeScroller>

      <Reveal>
        <p className=" mt-36 px-6 md:px-20 font-mono text-brand-primary font-light text-lg tracking-tight text-center md:text-2xl md:text-left animate-flicker">
          [01] TECHNICAL_STACK
        </p>
      </Reveal>
      
        <Capabilities></Capabilities>
      <div className="px-6 md:px-20 mt-16 mb-8 flex flex-col md:flex-row justify-between items-center ">
        <p className="  font-mono text-brand-primary font-light text-lg tracking-tight text-center md:text-2xl md:text-left animate-flicker">
          [02] FEATURED_SYSTEMS
        </p>
        <a
          href="#projects"
          className="font-primary hidden md:inline-block  text-brand-primary  text-md md:text-xl hover:underline underline-offset-2 transition-all duration-500"
        >
          View All Projects
        </a>
      </div>
      <div className="px-6 md:px-20 mb-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {featuredProjects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="w-full">
          <ProjectCard
            key={project.id}
            {...project}
            imagePath={project.imagePaths[0]}
            />
            </Link>
        ))}

       <Link to="/projects" className="w-full flex justify-center">
       <a
          className="font-primary inline-block md:hidden text-center  text-brand-primary  text-md md:text-xl hover:underline underline-offset-2 transition-all duration-500 mb-8"
          >
          View All Projects
        </a>
          </Link> 
      </div>
    </>
  );
};

export default Home;
