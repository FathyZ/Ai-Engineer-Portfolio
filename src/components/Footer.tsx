import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-brand-black border-t border-white/5 pt-20 pb-10 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#39FF14_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-5">
          <h2 className="font-lora italic text-4xl mb-6">Seif Abdelaity</h2>
          <p className="text-brand-gray text-sm max-w-xs leading-relaxed font-light">
            Architecting autonomous systems and agentic workflows. 
            Built for the next generation of digital intelligence.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-[10px] text-brand-primary tracking-[0.4em] mb-8 uppercase">// NAVIGATION</h4>
          <ul className="space-y-4">
            {['Home', 'Projects', 'Behind the Scenes', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                  className="font-mono text-xs text-white/50 hover:text-brand-primary transition-colors uppercase"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-mono text-[10px] text-brand-primary tracking-[0.4em] mb-8 uppercase">// SYSTEM_LOG</h4>
          <div className="space-y-2 font-mono text-[10px] text-white/30">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>LOC_ENV:</span>
              <span className="text-white/60">CAIRO_EGY</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>ENGINE:</span>
              <span className="text-white/60">REACT_V18</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>STATUS:</span>
              <span className="text-brand-primary animate-pulse">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
        <div className="flex gap-8">
          <a href="https://github.com/Seifeldeen10" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/20 hover:text-white transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/in/seif-abdelaty-183318229/" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/20 hover:text-white transition-colors">LINKEDIN</a>
        </div>
        
        <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
          © {currentYear} ALL_RIGHTS_RESERVED // [V.02.0]
        </div>
      </div>
    </footer>
  );
};

export default Footer;