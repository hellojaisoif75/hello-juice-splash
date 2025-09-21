import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      // Scroll to footer contact section
      const element = document.querySelector('footer');
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth border-b ${
        isScrolled 
          ? "bg-brand-black/95 backdrop-blur-md shadow-elegant border-brand-gold/30" 
          : "bg-brand-black/90 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/hellojaisoif-logo.png" 
              alt="HelloJaiSoif" 
              className="h-10 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-white/90 hover:text-brand-gold transition-smooth font-medium font-inter"
            >
              Accueil
            </a>
            <a 
              href="/packs" 
              className="text-white/90 hover:text-brand-gold transition-smooth font-medium font-inter"
            >
              Packs
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-white/90 hover:text-brand-gold transition-smooth font-medium font-inter"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-brand-gold transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            {/* Menu */}
            <div className="md:hidden fixed top-16 left-0 right-0 bg-brand-black border-t border-brand-gold/30 shadow-elegant z-50">
              <div className="px-4 py-4 space-y-1">
                <a 
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-white/90 hover:text-brand-gold font-inter"
                >
                  Accueil
                </a>
                <a 
                  href="/packs"
                  className="block px-3 py-2 text-base font-medium text-white/90 hover:text-brand-gold font-inter"
                >
                  Packs
                </a>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="block px-3 py-2 text-base font-medium text-white/90 hover:text-brand-gold font-inter"
                >
                  Contact
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;