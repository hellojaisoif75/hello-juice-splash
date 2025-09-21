import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGallery from "@/components/ProductGallery";
import QuantityBadge from "@/components/QuantityBadge";
import SpecTable from "@/components/SpecTable";
import FormEmbed from "@/components/FormEmbed";
import PaypalButton from "@/components/PaypalButton";
import SocialLinks from "@/components/SocialLinks";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Gift } from "lucide-react";

const PackEnfants = () => {
  const packProducts = [
    {
      name: "Capri-Sun Multivitamin",
      quantity: "×40 (20 cl)",
      allergens: "Aucun",
      image: "/img/caprisun-40x20.png"
    },
    {
      name: "Fruit Shoot",
      quantity: "×24 (20 cl)", 
      allergens: "Aucun",
      image: "/img/fruitshoot-24x20.png"
    },
    {
      name: "Jus de pomme",
      quantity: "×24 (20 cl)",
      allergens: "Aucun", 
      image: "/img/juspomme-24x20.png"
    },
    {
      name: "Évian ou Cristalline",
      quantity: "×24 (33 cl)",
      allergens: "Aucun",
      image: "/img/eau-24x33.png"
    }
  ];

  const bonusProduct = {
    name: "Bonus : 2 × eau 1,5 L OFFERT",
    image: "/img/eau-offert-2x150.png"
  };

  const nutritionalData = [
    { nutrient: "Énergie", per100ml: "45 kcal", perPortion: "90 kcal" },
    { nutrient: "Matières grasses", per100ml: "0 g", perPortion: "0 g" },
    { nutrient: "Glucides", per100ml: "11 g", perPortion: "22 g" },
    { nutrient: "Sucres", per100ml: "10 g", perPortion: "20 g" },
    { nutrient: "Protéines", per100ml: "0.1 g", perPortion: "0.2 g" },
    { nutrient: "Sel", per100ml: "0.01 g", perPortion: "0.02 g" }
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
                { label: "Packs", href: "/packs" },
                { label: "Pack Enfants", href: "/packs/enfants" }
              ]}
            />

            {/* Hero produit */}
            <div className="text-center mb-16">
              <div className="relative">
                <img 
                  src="/hellojaisoif-logo.png" 
                  alt="HelloJaiSoif Logo" 
                  className="h-16 mx-auto mb-8"
                />
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  Pack Enfants
                </h1>
                <div className="text-3xl font-bold text-brand-gold mb-8">
                  54,99 € TTC
                </div>
                <ProductGallery />
              </div>
            </div>

            {/* Contenu du pack */}
            <section className="mb-16">
              <h2 className="font-playfair text-3xl font-bold text-brand-black mb-8 text-center">
                Contenu du pack
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {packProducts.map((product, index) => (
                  <div key={index} className="bg-brand-white border border-gray-200 rounded-lg p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                    <div className="relative mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />
                      <QuantityBadge quantity={product.quantity} />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-brand-black mb-2">
                      {product.name}
                    </h3>
                    <p className="font-inter text-sm text-brand-gray-medium">
                      Allergènes : {product.allergens}
                    </p>
                  </div>
                ))}
              </div>

              {/* Produit bonus */}
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-card border border-brand-gold rounded-lg p-6 text-center shadow-elegant">
                  <div className="flex items-center justify-center mb-4">
                    <Gift className="w-8 h-8 text-brand-gold mr-2" />
                    <span className="font-playfair text-xl font-bold text-brand-gold">BONUS</span>
                  </div>
                  <img 
                    src={bonusProduct.image} 
                    alt={bonusProduct.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-playfair text-lg font-semibold text-brand-black">
                    {bonusProduct.name}
                  </h3>
                </div>
              </div>
            </section>

            {/* Tableau nutritionnel */}
            <section className="mb-16">
              <h2 className="font-playfair text-3xl font-bold text-brand-black mb-8 text-center">
                Informations nutritionnelles
              </h2>
              <SpecTable data={nutritionalData} />
            </section>

            {/* Livraison & retours */}
            <section className="mb-16 bg-brand-gray-light p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-bold text-brand-black mb-6 text-center">
                Livraison & retours
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-brand-black mb-2">
                    Livraison
                  </h3>
                  <p className="font-inter text-brand-gray-medium">
                    Livraison gratuite en Île-de-France sous 48h après confirmation de votre commande.
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-brand-black mb-2">
                    Retours
                  </h3>
                  <p className="font-inter text-brand-gray-medium">
                    Retours simplifiés sous 14 jours. Contactez-nous pour toute question.
                  </p>
                </div>
              </div>
            </section>

            {/* Formulaire et paiement */}
            <section id="formulaire" className="mb-16">
              <h2 className="font-playfair text-3xl font-bold text-brand-black mb-8 text-center">
                Commander votre Pack Enfants
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-brand-gray-light p-8 rounded-lg mb-8">
                  <FormEmbed />
                </div>
                
                <div className="text-center">
                  <PaypalButton amount="54,99 €" />
                  <p className="font-inter text-sm text-brand-gray-medium mt-4">
                    Si vous avez choisi "Paiement à la livraison" dans le formulaire, ignorez le bouton PayPal ci-dessus.
                  </p>
                </div>
              </div>
            </section>
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

export default PackEnfants;