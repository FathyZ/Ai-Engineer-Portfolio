import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Behind the Scenes', href: '/behind-the-scenes' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 px-20 w-full z-40 border-b border-brand-primary/20 bg-brand-black/50 backdrop-blur-md">
      <div className="w-full mx-auto px-6 h-16 flex items-center justify-between">
        
          <span className="font-mono  font-bold  text-md uppercase" data-hover="true">
            Seif Abdelaity 
          </span>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end
              data-hover="true"
              className={({ isActive})=>`font-mono text-sm uppercase  text-brand-gray hover:text-brand-primary transition-colors duration-300 ${isActive ? 'text-brand-primary': 'text-brand-gray'}`}
            >
              [{link.name}]
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block font-mono text-xs text-brand-primary/40">
          SYSTEMS_NOMINAL // 2026
        </div>
      </div>
    </nav>
  );
};

export default Navbar;