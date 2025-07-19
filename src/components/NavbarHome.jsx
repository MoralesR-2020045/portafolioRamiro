import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavbarHome = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { label: 'INICIO', to: '#about' },
  { label: 'ACERCA DE', to: '#tech' },
  { label: 'TECNOLOGIAS', to: '#technologies' },
  { label: 'EDUCACIÓN', to: '#education' },
  { label: 'PROYECTOS', to: '#projects' },
  { label: 'CONTACTO', to: '#contact' },
];


  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-black shadow-md' : 'bg-black text-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
        <a
          href="/"
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          Ramiro Morales
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <a
                href={link.to}
                className="transition-colors duration-200 hover:text-[#91FF00]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-md transition ${
            scrolled ? 'hover:bg-black/10' : 'hover:bg-white/10'
          }`}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 px-6 py-4 bg-inherit">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={link.to}
                  className={`block transition-colors hover:text-[#91FF00] ${
                    scrolled ? 'text-black' : 'text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
