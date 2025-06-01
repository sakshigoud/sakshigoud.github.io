import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink = ({ href, title, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base relative group"
  >
    {title}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-white font-bold text-xl md:text-2xl">
            <span className="text-teal-400">S</span>akshi<span className="text-teal-400">G</span>oud
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#skills" title="Skills" />
            <NavLink href="#experience" title="Experience" />
            <NavLink href="#projects" title="Projects" />
            <NavLink href="#contact" title="Contact" />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-teal-400 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <NavLink href="#home" title="Home" onClick={closeMobileMenu} />
          <NavLink href="#about" title="About" onClick={closeMobileMenu} />
          <NavLink href="#skills" title="Skills" onClick={closeMobileMenu} />
          <NavLink href="#experience" title="Experience" onClick={closeMobileMenu} />
          <NavLink href="#projects" title="Projects" onClick={closeMobileMenu} />
          <NavLink href="#contact" title="Contact" onClick={closeMobileMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;