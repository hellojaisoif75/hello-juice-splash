import { Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FormEmbed from "@/components/FormEmbed";
import SocialLinks from "@/components/SocialLinks";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { envConfig } from "@/lib/env-config";
import packMariageHero from "@/assets/pack-mariage-hero.png";

const PackMariage = () => {
  const packMariageData = {
    title: "Pack Mariage et Événementiel",
    price: "529 €",
    drinks: [
      {
        name: "Coca-Cola 1,5L",
        description: "La boisson gazeuse emblématique, parfaite pour accompagner votre réception",
        allergens: "Sans allergènes - Convient à tous les invités",
        volume: "1,5L",
        quantity: "60 bouteilles (90L)"
      },
      {
        name: "Oasis Tropical 1,5L",
        description: "Boisson fruitée aux saveurs exotiques pour une touche de fraîcheur",
        allergens: "Sans allergènes - Boisson aux fruits sans pulpe",
        volume: "1,5L",
        quantity: "50 bouteilles (75L)"
      },
      {
        name: "Ice Tea Pêche 1,5L",
        description: "Thé glacé délicatement parfumé à la pêche, idéal pour les moments de convivialité",
        allergens: "Sans allergènes - Peut contenir des traces de thé",
        volume: "1,5L",
        quantity: "50 bouteilles (75L)"
      },
      {
        name: "Orangina 1,5L",
        description: "Boisson pétillante à l'orange naturelle avec pulpe de fruit",
        allergens: "Sans allergènes - Contient de la pulpe d'orange naturelle",
        volume: "1,5L",
        quantity: "40 bouteilles (60L)"
      },
      {
        name: "Eau Plate 1,5L",
        description: "Eau minérale naturelle pour l'hydratation de vos invités",
        allergens: "Aucun allergène",
        volume: "1,5L",
        quantity: "80 bouteilles (120L)"
      }
    ]
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
      
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-brand-gray">
                <li><Link to="/" className="hover:text-brand-gold transition-smooth">Accueil</Link></li>
                <li className="text-brand-gray">&gt;</li>
                <li><Link to="/packs" className="hover:text-brand-gold transition-smooth">Packs</Link></li>
                <li className="text-brand-gray">&gt;</li>
                <li className="text-brand-black font-medium">Pack Mariage et Événementiel</li>
              </ol>
            </nav>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-serif">
                Pack <span className="text-brand-gold">Mariage et Événementiel</span>
              </h1>
              <p className="text-xl text-brand-gray font-sans max-w-3xl mx-auto mb-6">
                Pack spécialement conçu pour les mariages et événements jusqu'à 500 personnes
              </p>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-brand-gold font-serif">529 €</span>
                <span className="text-brand-gray ml-2 text-xl">TTC</span>
              </div>
              <p className="text-lg text-brand-gold font-semibold font-sans">
                🎁 Pack enfant offert avec ce pack
              </p>
              <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src={packMariageHero} 
                  alt="Boissons pour événements et mariages" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-20 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-elegant mb-8">
                <p className="text-center text-brand-gray font-sans text-lg">
                  <strong>280 bouteilles / 420 litres</strong> - Environ 0,84L par invité pour 500 personnes
                </p>
              </div>
              <ProductCard 
                title="Contenu du Pack Mariage et Événementiel" 
                drinks={packMariageData.drinks} 
                isAvailable={true} 
                className="max-w-none" 
              />
              
              {/* Boissons Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <div className="aspect-square bg-brand-gray-light rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">🥤</span>
                  </div>
                  <p className="text-sm font-semibold text-brand-black font-sans">Coca-Cola</p>
                  <p className="text-xs text-brand-gray font-sans">60 bouteilles</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <div className="aspect-square bg-brand-gray-light rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">🍹</span>
                  </div>
                  <p className="text-sm font-semibold text-brand-black font-sans">Oasis Tropical</p>
                  <p className="text-xs text-brand-gray font-sans">50 bouteilles</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <div className="aspect-square bg-brand-gray-light rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">🍑</span>
                  </div>
                  <p className="text-sm font-semibold text-brand-black font-sans">Ice Tea Pêche</p>
                  <p className="text-xs text-brand-gray font-sans">50 bouteilles</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <div className="aspect-square bg-brand-gray-light rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">🍊</span>
                  </div>
                  <p className="text-sm font-semibold text-brand-black font-sans">Orangina</p>
                  <p className="text-xs text-brand-gray font-sans">40 bouteilles</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <img 
                    src="/src/assets/cristalline-white-bg.png" 
                    alt="Eau minérale" 
                    className="aspect-square object-contain rounded-lg mb-3"
                  />
                  <p className="text-sm font-semibold text-brand-black font-sans">Eau plate</p>
                  <p className="text-xs text-brand-gray font-sans">80 bouteilles</p>
                </div>
              </div>
              
              <div className="bg-brand-gold/10 rounded-2xl p-6 mt-8 border border-brand-gold/20">
                <h3 className="text-xl font-bold text-brand-black mb-4 font-serif text-center">
                  Personnalisation disponible
                </h3>
                <p className="text-brand-gray font-sans text-center mb-4">
                  Vous pouvez personnaliser votre pack en choisissant parmi notre large sélection de boissons : 
                  Oasis, Fanta (classic, exotic, citron), Coca (classic, zero, cherry), Freeze, Minute Maid, 
                  Schweppes (tonic, pommes), et bien plus encore.
                </p>
                <p className="text-brand-gray font-sans text-center text-sm">
                  Options disponibles sur demande : Gingembre, Bissap
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-brand-gray-light rounded-2xl p-8 shadow-soft border border-brand-gold/20">
                <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif flex items-center justify-center gap-2">
                  <Truck className="w-6 h-6 text-brand-gold" />
                  Livraison & Retours
                </h3>
                <div className="space-y-4 text-center">
                  <p className="text-brand-gray font-sans">
                    <strong>Livraison :</strong> Île-de-France sous 48h après confirmation de votre commande
                  </p>
                  <p className="text-brand-gray font-sans">
                    <strong>Retours :</strong> 14 jours pour signaler tout problème - produits dans leur état d'origine
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-brand-gold/20 mt-6">
                <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif text-center">
                  Options supplémentaires
                </h3>
                <ul className="space-y-3 text-brand-gray font-sans">
                  <li className="flex justify-between items-center">
                    <span>Glaçons et bacs à rafraîchir</span>
                    <span className="font-semibold text-brand-gold">+40€</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Livraison sur lieu</span>
                    <span className="font-semibold text-brand-gold">+30 à +50€</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Étiquettes personnalisées</span>
                    <span className="font-semibold text-brand-gold">+25€</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Jus bio ou limonades artisanales</span>
                    <span className="font-semibold text-brand-gold">+35€</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="formulaire" className="py-20 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-serif">
                Commandez votre Pack Événementiel
              </h2>
              <p className="text-xl text-brand-gray font-sans">
                Remplissez le formulaire ci-dessous pour passer votre commande et personnaliser votre pack
              </p>
              <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FormEmbed />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-black text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <img src={`${import.meta.env.BASE_URL}hellojaisoif-logo.png`} alt="HelloJaiSoif Logo" className="h-16 w-auto mb-6 bg-white rounded-lg p-2" />
                <p className="text-brand-white/80 mb-6 font-sans">
                  Des packs boissons prêts à partager pour tous vos événements.
                </p>
                <SocialLinks instagramUrl={envConfig.IG_URL} facebookUrl={envConfig.FB_URL} tiktokUrl={envConfig.TT_URL} />
              </div>
              
              <div>
                <h4 className="font-bold text-brand-gold mb-6 font-serif text-xl">Liens utiles</h4>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-brand-white/80 hover:text-brand-gold transition-smooth font-sans">Accueil</Link></li>
                  <li><Link to="/packs" className="text-brand-white/80 hover:text-brand-gold transition-smooth font-sans">Packs</Link></li>
                  <li><Link to="/mentions-legales" className="text-brand-white/80 hover:text-brand-gold transition-smooth font-sans">Mentions légales</Link></li>
                  <li><Link to="/cgv" className="text-brand-white/80 hover:text-brand-gold transition-smooth font-sans">CGV</Link></li>
                  <li><Link to="/politique-confidentialite" className="text-brand-white/80 hover:text-brand-gold transition-smooth font-sans">Politique de confidentialité</Link></li>
                  <li><Link to="/politique-cookies" className="text-brand-white/80 hover:text-brand-gold transition-smooth font-sans">Politique cookies</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-brand-gold mb-6 font-serif text-xl">Support</h4>
                <p className="text-brand-white/80 mb-3 font-sans">Service client :</p>
                <a href="mailto:Hellojaisoif75@gmail.com" className="text-brand-gold hover:underline font-medium font-sans">Hellojaisoif75@gmail.com</a>
              </div>
              
              <div>
                <h4 className="font-bold text-brand-gold mb-6 font-serif text-xl">Livraison</h4>
                <p className="text-brand-white/80 font-sans">
                  Île-de-France uniquement<br />
                  Sous 48h après confirmation
                </p>
              </div>
            </div>
            
            <div className="border-t border-brand-gold/20 pt-8 text-center text-brand-white/60">
              <p className="font-sans">© 2025 HelloJaiSoif. Tous droits réservés.</p>
            </div>
          </div>
         </footer>
         <ScrollToTop />
       </div>
    </ErrorBoundary>
  );
};

export default PackMariage;
