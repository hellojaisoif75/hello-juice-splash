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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth border-b ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-md shadow-soft border-brand-gold/20" 
          : "bg-white/90 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/hellojaisoif-logo.png"
                alt="HelloJaiSoif Logo" 
                className="h-20 w-auto max-w-none"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/"
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Accueil
            </a>
            <a 
              href="/packs"
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Packs
            </a>
            <button 
              onClick={() => scrollToSection("footer")}
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Contact
            </button>
            <a
              href="/packs/enfants"
              className="bg-brand-black hover:bg-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-smooth shadow-elegant font-sans"
            >
              Commander
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-brand-black hover:text-brand-gold transition-smooth"
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
            <div className="md:hidden fixed top-20 left-0 right-0 bg-white border-t border-brand-gold/20 shadow-elegant z-50">
              <div className="px-4 py-4 space-y-3">
                <a 
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Accueil
                </a>
                <a 
                  href="/packs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Packs
                </a>
                <button 
                  onClick={() => scrollToSection("footer")}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Contact
                </button>
                <a 
                  href="/packs/enfants"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-brand-black hover:bg-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-smooth shadow-elegant mt-4 font-sans inline-block text-center"
                >
                  Commander
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