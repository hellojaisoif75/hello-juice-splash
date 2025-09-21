import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PackCard from "@/components/PackCard";
import ComingSoonCard from "@/components/ComingSoonCard";
import SocialLinks from "@/components/SocialLinks";
import ErrorBoundary from "@/components/ErrorBoundary";

const Packs = () => {
  const navigate = useNavigate();

  const handlePackEnfantsClick = () => {
    navigate("/packs/enfants");
  };

  const comingSoonPacks = [
    {
      title: "Pack Événementiel",
      description: "Pour vos événements et réceptions"
    },
    {
      title: "Pack Sport", 
      description: "Boissons énergisantes et hydratantes"
    },
    {
      title: "Pack Anniversaire",
      description: "Pour célébrer en grand"
    },
    {
      title: "Pack Scolarité",
      description: "Parfait pour les établissements scolaires"
    },
    {
      title: "Pack Entreprise",
      description: "Pour vos événements professionnels"
    },
    {
      title: "Éditions limitées",
      description: "Des packs saisonniers exclusifs"
    }
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-brand-white">
        <Header />
        
        <div className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Breadcrumbs */}
            <Breadcrumbs 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Packs", href: "/packs" }
              ]}
            />

            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Nos Packs Boissons
              </h1>
              <p className="font-inter text-xl text-brand-gray-medium max-w-2xl mx-auto">
                Découvrez nos packs soigneusement sélectionnés pour tous vos moments de partage.
              </p>
            </div>

            {/* Pack disponible */}
            <div className="mb-16">
              <h2 className="font-playfair text-2xl font-semibold text-brand-black mb-8">
                Disponible maintenant
              </h2>
              <div className="max-w-md mx-auto">
                <PackCard
                  title="Pack Enfants"
                  price="54,99 €"
                  description="Le pack parfait pour les enfants : boissons variées et savoureuses"
                  image="/img/pack-enfants-hero.jpg"
                  onClick={handlePackEnfantsClick}
                  available={true}
                />
              </div>
            </div>

            {/* Packs à venir */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-brand-black mb-8">
                Bientôt disponible
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comingSoonPacks.map((pack, index) => (
                  <ComingSoonCard
                    key={index}
                    title={pack.title}
                    description={pack.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

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

export default Packs;