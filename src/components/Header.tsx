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
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/52ad253b-07a3-477f-bba4-891012f9dcf3.png"
                alt="HelloJaiSoif Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("produit")}
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Produit
            </button>
            <button 
              onClick={() => scrollToSection("packs")}
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Nos Packs
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("formulaire")}
              className="bg-brand-black hover:bg-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-smooth shadow-elegant font-sans"
            >
              Commander
            </button>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-brand-gold/20 shadow-elegant">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection("produit")}
                className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
              >
                Produit
              </button>
              <button 
                onClick={() => scrollToSection("packs")}
                className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
              >
                Nos Packs
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection("formulaire")}
                className="w-full bg-brand-black hover:bg-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-smooth shadow-elegant mt-4 font-sans"
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