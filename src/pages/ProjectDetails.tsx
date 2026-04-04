import { useParams } from "react-router-dom";
import { PROJECTS } from "../data/projectsData";
import { Reveal } from "../components/animations/Reveal";
import NeuralMesh from "../components/NeuralMesh";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-white pt-20 text-center font-mono">ERR_404: DATA_NOT_FOUND</div>;
  }

  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-primary selection:text-black">
      <NeuralMesh />

      <div className="relative z-10 px-6 md:px-20 pt-40 pb-20">
        <Reveal>
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-4xl">
              <span className="font-mono text-brand-primary text-xs tracking-[0.5em] mb-4 block animate-flicker">
                [PROJECT_FILE_{project.id}]
              </span>
              <h2 className="text-4xl lg:text-9xl font-lora font-bold italic leading-[0.8] mb-8">
                {project.title}
              </h2>
            </div>
            <div className="text-right font-mono text-xs text-brand-gray space-y-1">
              <p>DEPLOYED_YEAR: {project.year}</p>
              <p>SECTOR: {project.category}</p>
              <p>STATUS: OPERATIONAL</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3 lg:sticky lg:top-40">
            <Reveal delay={0.2}>
              <div className="border-l border-brand-primary pl-6 py-2">
                <h4 className="font-mono text-sm text-brand-primary mb-6 tracking-widest">// CORE_ENGINE</h4>
                <div className="flex flex-row lg:flex-col flex-wrap gap-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-sm lg:text-2xl font-lora italic hover:text-brand-primary transition-all cursor-crosshair">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.4}>
            <Reveal delay={0.5}>
              <div className="w-full ">
                <p className="text-xl md:text-2xl font-light text-brand-gray leading-relaxed mb-8 ">
                  {project.description}
                </p>
              </div>
            </Reveal>
              <div className="relative ">
                <img 
                  src={project.imagePaths[0]} 
                  className="w-full h-auto object-cover " 
                  alt={project.title}
                />
              </div>
            </Reveal>


            <div className="mt-20 space-y-20">
              {project.imagePaths.slice(1).map((img, idx) => (
                <Reveal key={idx} delay={0.2}>
                  <img src={img} className="w-full h-auto border border-white/5" alt="" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-40">
          <div className="flex items-center gap-8 mb-20">
            <div className="h-px grow bg-white/10" />
            <h3 className="font-mono text-xs text-brand-primary tracking-[0.5em]">SYSTEM_ARCHITECTURE</h3>
            <div className="h-px grow bg-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="p-12 group hover:bg-white/5 transition-colors">
              <span className="font-mono text-xs text-brand-primary/50 block mb-8">01.0 // CHALLENGE</span>
              <p className="text-lg text-white/80 group-hover:text-white leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-12 group hover:bg-white/5 transition-colors">
              <span className="font-mono text-xs text-brand-primary/50 block mb-8">02.0 // EXECUTION</span>
              <p className="text-lg text-white/80 group-hover:text-white leading-relaxed">{project.execution}</p>
            </div>
            <div className="p-12 group hover:bg-white/5 transition-colors">
              <span className="font-mono text-xs text-brand-primary/50 block mb-8">03.0 // RESULT</span>
              <p className="text-lg text-white/80 group-hover:text-white leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;