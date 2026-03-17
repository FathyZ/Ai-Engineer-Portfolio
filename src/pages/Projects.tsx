import { Link } from "react-router-dom";
import { Reveal } from "../components/animations/Reveal.tsx";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projectsData.ts";



const Projects = () => {
  return (
    <div className="px-6 md:px-20 my-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
      {PROJECTS.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={project.id} className="w-full">
        <Reveal key={project.id} delay={index * 0.1}> 
          
          <ProjectCard
            {...project}
            imagePath={project.imagePaths[0]}
          />
        </Reveal>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
