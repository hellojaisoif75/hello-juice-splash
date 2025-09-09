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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-soft" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="text-2xl font-bold text-brand-blue cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              HelloJaiSoif
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("produit")}
              className="text-brand-text hover:text-brand-blue transition-smooth font-medium"
            >
              Produit
            </button>
            <button 
              onClick={() => scrollToSection("packs")}
              className="text-brand-text hover:text-brand-blue transition-smooth font-medium"
            >
              Nos Packs
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-brand-text hover:text-brand-blue transition-smooth font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("formulaire")}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-full font-semibold transition-smooth shadow-button"
            >
              Commander
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-brand-text hover:text-brand-blue transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border shadow-card">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection("produit")}
                className="block w-full text-left text-brand-text hover:text-brand-blue transition-smooth font-medium py-2"
              >
                Produit
              </button>
              <button 
                onClick={() => scrollToSection("packs")}
                className="block w-full text-left text-brand-text hover:text-brand-blue transition-smooth font-medium py-2"
              >
                Nos Packs
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-brand-text hover:text-brand-blue transition-smooth font-medium py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection("formulaire")}
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-full font-semibold transition-smooth shadow-button mt-4"
              >
                Commander
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;