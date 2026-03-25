import { CAPABILITIES } from "../data/capabilitiesData";
import { Reveal } from "./animations/Reveal";

const Capabilities = () => {
  return (

    <section className="px-6 md:px-20 py-8 bg-transparent relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-between">
        {CAPABILITIES.map((cap,index) => (
          <Reveal delay={index * 0.1}>


          <div key={cap.title} className="h-full group flex flex-col items-center justify-start bg-transparent backdrop-blur-xs hover:border-brand-primary border border-brand-gray-muted rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-500 " data-hover="true">
            <div className=" mb-4 flex  gap-2">
            <cap.IconComponent className="w-7 h-7 text-brand-gray group-hover:text-brand-primary transition-colors duration-500  "></cap.IconComponent>
            <h3 className="font-primary text-xl uppercase font-bold text-white mb-6 tracking-tight">
              {cap.title}
            </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
      {cap.technologies.map((TechIcon, i) => (
        <TechIcon key={i} className="w-8 h-8 text-brand-gray group-hover:text-brand-primary transition-colors duration-500" />
      ))}
    </div>

    <ul className="text-center">
      {cap.skills.map(skill => (
        <li key={skill} className="font-mono text-xs text-brand-gray uppercase tracking-widest mb-1">
          {skill}
        </li>
      ))}
    </ul>
          </div>
        </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;