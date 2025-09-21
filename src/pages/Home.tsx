import { useNavigate } from "react-router-dom";
import { Package, Shield, Truck } from "lucide-react";
import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import SocialLinks from "@/components/SocialLinks";
import ErrorBoundary from "@/components/ErrorBoundary";

const Home = () => {
  const navigate = useNavigate();

  const handleCommanderClick = () => {
    navigate("/packs");
  };

  const uspFeatures = [
    {
      icon: Package,
      title: "Pratique",
      description: "Des packs prêts à partager, parfaits pour toutes les occasions"
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Prix clairs, composition détaillée, aucune surprise"
    },
    {
      icon: Truck,
      title: "Sécurité",
      description: "Paiement PayPal sécurisé ou paiement à la livraison"
    }
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-brand-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/hellojaisoif-logo.png" 
                alt="HelloJaiSoif Logo" 
                className="h-16 mx-auto mb-8"
              />
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-brand-black mb-6">
              Des packs boissons prêts à partager.
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-brand-gray-medium mb-8 max-w-3xl mx-auto">
              Commandez le Pack Enfants (54,99 € TTC). Les autres packs arrivent bientôt.
            </p>
            
            {/* Badge logistique */}
            <div className="inline-flex items-center bg-brand-gray-light px-6 py-3 rounded-full mb-12">
              <Truck className="w-5 h-5 text-brand-gold mr-2" />
              <span className="font-inter font-medium text-brand-black">
                Livraison Île-de-France sous 48 h après confirmation
              </span>
            </div>
            
            <CTAButton 
              variant="primary" 
              size="lg"
              onClick={handleCommanderClick}
              className="font-inter text-lg px-12 py-4"
            >
              Commander maintenant
            </CTAButton>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-16 bg-brand-gray-light">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {uspFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-brand-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                      <IconComponent className="w-8 h-8 text-brand-gold" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-brand-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-brand-gray-medium">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bandeau visuel premium */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-card p-12 rounded-lg shadow-elegant">
              <h2 className="font-playfair text-3xl font-bold text-brand-black mb-4">
                Une expérience premium
              </h2>
              <p className="font-inter text-lg text-brand-gray-medium max-w-2xl mx-auto">
                HelloJaiSoif révolutionne la façon dont vous partagez des moments de convivialité avec des packs soigneusement sélectionnés.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-black text-brand-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Logo et description */}
              <div>
                <img 
                  src="/hellojaisoif-logo.png" 
                  alt="HelloJaiSoif Logo" 
                  className="h-12 mb-4 brightness-0 invert"
                />
                <p className="font-inter text-sm text-gray-300">
                  Des packs boissons prêts à partager pour tous vos moments de convivialité.
                </p>
              </div>

              {/* Liens utiles */}
              <div>
                <h4 className="font-playfair text-lg font-semibold mb-4">Informations légales</h4>
                <div className="space-y-2">
                  <a href="/mentions-legales" className="block font-inter text-sm text-gray-300 hover:text-brand-gold transition-smooth">
                    Mentions légales
                  </a>
                  <a href="/cgv" className="block font-inter text-sm text-gray-300 hover:text-brand-gold transition-smooth">
                    CGV
                  </a>
                  <a href="/politique-confidentialite" className="block font-inter text-sm text-gray-300 hover:text-brand-gold transition-smooth">
                    Politique de confidentialité
                  </a>
                  <a href="/politique-cookies" className="block font-inter text-sm text-gray-300 hover:text-brand-gold transition-smooth">
                    Politique des cookies
                  </a>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 className="font-playfair text-lg font-semibold mb-4">Nous suivre</h4>
                <SocialLinks />
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="font-inter text-sm text-gray-400">
                © 2024 HelloJaiSoif. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default Home;