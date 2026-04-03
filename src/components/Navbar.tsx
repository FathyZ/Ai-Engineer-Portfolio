import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Behind the Scenes', href: '/behind-the-scenes' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-brand-primary/20 bg-brand-black/80 backdrop-blur-md">
        <div className="w-full mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
          
          <Link to="/" className="font-mono font-bold text-md uppercase tracking-tighter">
            Seif Abdelaity <span className="text-brand-primary animate-pulse">_</span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end
                className={({ isActive }) => `font-mono text-xs uppercase transition-colors duration-300 ${isActive ? 'text-brand-primary' : 'text-brand-gray hover:text-brand-primary'}`}
              >
                [{link.name}]
              </NavLink>
            ))}
          </div>

          <button 
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-brand-primary transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-brand-primary transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-brand-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <div className="hidden lg:block font-mono text-[10px] text-brand-primary/40 uppercase tracking-[0.2em]">
            SYSTEM_STATUS: NOMINAL // 2026
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 px-6"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#39FF14_1px,transparent_1px)] bg-size-[20px_20px]" />
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <NavLink
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `font-lora italic text-5xl ${isActive ? 'text-brand-primary' : 'text-white'}`}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;