import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

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
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo size="lg" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Accueil
            </Link>
            <Link 
              to="/packs"
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Packs
            </Link>
            <Link 
              to="/contact"
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Contact
            </Link>
            <Link 
              to="/devenir-partenaire"
              className="text-brand-black hover:text-brand-gold transition-smooth font-medium font-sans"
            >
              Devenir partenaire
            </Link>
            <Link
              to="/packs"
              className="bg-brand-black hover:bg-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-smooth shadow-elegant font-sans"
            >
              Commander
            </Link>
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
                <Link 
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Accueil
                </Link>
                <Link 
                  to="/packs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Packs
                </Link>
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Contact
                </Link>
                <Link 
                  to="/devenir-partenaire"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-brand-black hover:text-brand-gold transition-smooth font-medium py-2 font-sans"
                >
                  Devenir partenaire
                </Link>
                <Link 
                  to="/packs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-brand-black hover:bg-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-smooth shadow-elegant mt-4 font-sans inline-block text-center"
                >
                  Commander
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;