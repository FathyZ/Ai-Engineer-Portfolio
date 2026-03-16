import { CAPABILITIES } from "../data/capabilitiesData";

const Capabilities = () => {
  return (
    <section className="px-6 md:px-20 py-24 bg-transparent relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="group">
            <div className="font-mono text-brand-primary text-xs mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              [{cap.icon}]
            </div>
            <h3 className="font-primary text-xl uppercase font-bold text-white mb-6 tracking-tight">
              {cap.title}
            </h3>
            <ul className="space-y-3">
              {cap.skills.map(skill => (
                <li key={skill} className="font-mono text-sm text-white/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;