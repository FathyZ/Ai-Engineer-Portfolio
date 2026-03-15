interface ProjectCardProps {
  title: string;
  category: string;
  tech: string[];
  description: string;
  imagePath: string;
}

const ProjectCard = ({ title, category, tech, description , imagePath }: ProjectCardProps) => {
  return (
    <div className="group relative bg-brand-gray-muted backdrop-blur-sm  p-8 transition-all duration-500 hover:border-brand-primary rounded-lg"data-hover="true">
      <div className="flex justify-between items-center mb-6 " data-hover="true">
        <span className="font-mono text-sm text-brand-gray group-hover:text-brand-primary tracking-tighter border border-brand-gray group-hover:border-brand-primary-muted w-fit px-2 py-0.5 transition-all duration-500">
          {category}
        </span>
        <div className="flex gap-3">
          {tech.map((t) => (
            <span key={t} className="font-mono text-xs md:text-sm text-brand-gray uppercase tracking-tighter" data-hover="true">
              {t}
            </span>
          ))}
        </div>
      </div>

      <img src={imagePath} alt={title} className="w-full mb-6 " data-hover="true" />


      <h3 className="font-primary text-xl md:text-3xl uppercase font-bold mb-4 group-hover:text-brand-primary transition-colors" data-hover="true">
        {title}
      </h3>
      
      <p className="font-lora  text-brand-gray text-sm md:text-md mb-8 leading-relaxed" data-hover="true">
        {description}
      </p>

      <a href="" className="font-primary text-brand-primary text-sm md:text-lg hover:underline underline-offset-2 transition-all duration-500" data-hover="true">
        View Project
      </a>

      <div className="relative w-full h-px mt-4 bg-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-primary/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
};

export default ProjectCard;