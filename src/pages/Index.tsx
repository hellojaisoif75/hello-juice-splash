import { Droplets, Shield, Truck, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import ProductCard from "@/components/ProductCard";
import FormEmbed from "@/components/FormEmbed";
import SocialLinks from "@/components/SocialLinks";
import FAQItem from "@/components/FAQItem";
import heroImage from "@/assets/hero-drinks.jpg";

const Index = () => {
  const scrollToForm = () => {
    const element = document.getElementById("formulaire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packEnfantsData = {
    title: "Pack Enfants",
    price: "54,99 €",
    drinks: [
      {
        name: "Capri-Sun",
        description: "Eau, jus de fruits à base de concentrés (orange, citron, pomme, etc.), sucre, arômes naturels",
        allergens: "Aucun allergène majeur",
        volume: "20 cl"
      },
      {
        name: "Évian", 
        description: "Eau minérale naturelle",
        allergens: "Aucun",
        volume: "33 cl"
      },
      {
        name: "Cristalline",
        description: "Eau de source",
        allergens: "Aucun", 
        volume: "33 cl"
      },
      {
        name: "Jus de pomme",
        description: "100% jus de pomme (à base de concentré selon marque)",
        allergens: "Aucun",
        volume: "20 cl"
      }
    ]
  };

  const comingSoonPacks = [
    {
      title: "Événementiel", 
      description: "Solutions complètes pour vos événements, mariages, soirées et célébrations",
      icon: "🎉"
    },
    {
      title: "Sport",
      description: "Parfait pour compétitions et tournois",
      icon: "⚽"
    }, 
    {
      title: "Anniversaire",
      description: "Packs prêts à partager pour fêtes d'anniversaire",
      icon: "🎂"
    },
    {
      title: "Scolarité", 
      description: "Idéal pour sorties scolaires et kermesses",
      icon: "🏫"
    },
    {
      title: "Entreprise",
      description: "Packs professionnels pour réunions, séminaires et événements corporate",  
      icon: "👔"
    },
    {
      title: "Éditions limitées",
      description: "Sélections spéciales et créations exclusives",
      icon: "⭐"
    }
  ];

  const faqData = [
    {
      question: "Quels sont les moyens de paiement disponibles ?",
      answer: "Nous acceptons le paiement à la livraison (Cash on Delivery) et PayPal. Vous pouvez choisir votre mode de paiement préféré lors de la commande."
    },
    {
      question: "Quels sont les délais et zones de livraison ?", 
      answer: "Nous livrons uniquement en Île-de-France sous 48h après confirmation de votre commande. La livraison est effectuée par notre équipe."
    },
    {
      question: "Quelle est votre politique de retour ?",
      answer: "Vous disposez de 14 jours pour nous signaler tout problème avec votre commande. Les produits doivent être dans leur état d'origine."
    },
    {
      question: "Le Pack Enfants contient-il des allergènes ?",
      answer: "Non, le Pack Enfants ne contient aucun allergène majeur. Toutes les boissons sont adaptées aux enfants et sans allergènes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
                Des packs boissons prêts à partager,{" "}
                <span className="text-brand-blue">livrés rapidement</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Commandez aujourd'hui le Pack Enfants (54,99 € TTC). 
                D'autres packs arrivent bientôt pour tous vos événements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="primary" size="lg" onClick={scrollToForm}>
                  Commander maintenant
                </CTAButton>
                <CTAButton variant="outline" size="lg" onClick={() => {
                  const element = document.getElementById("produit");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}>
                  Découvrir le pack
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Boissons fraîches HelloJaiSoif" 
                className="rounded-2xl shadow-card w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white p-4 rounded-full shadow-button">
                <Droplets size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">Pratique</h3>
              <p className="text-muted-foreground">Packs prêts à l'emploi, parfaits pour tous vos événements</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">Transparence</h3>
              <p className="text-muted-foreground">Ingrédients et allergènes clairement indiqués</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-brand-orange" size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">Sécurité</h3>
              <p className="text-muted-foreground">Paiement à la livraison ou PayPal sécurisé</p>
            </div>
          </div>
          
          {/* Delivery Banner */}
          <div className="bg-white rounded-xl p-6 shadow-soft text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="text-brand-blue" size={24} />
              <span className="font-bold text-brand-text text-lg">
                Livraison Île-de-France sous 48h après confirmation de commande
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="produit" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Produit du moment
            </h2>
            <p className="text-xl text-muted-foreground">
              Le Pack Enfants - Disponible dès maintenant
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ProductCard 
              {...packEnfantsData}
              onOrderClick={scrollToForm}
            />
            
            {/* Nutritional Info */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-soft">
              <h4 className="font-bold text-brand-text mb-4">Informations nutritionnelles</h4>
              <p className="text-muted-foreground text-sm">
                Les valeurs nutritionnelles détaillées sont disponibles sur chaque emballage 
                et peuvent varier selon les marques. Nos packs sont conçus pour offrir 
                un équilibre entre plaisir et hydratation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Packs */}
      <section id="packs" className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Nos autres packs
            </h2>
            <p className="text-xl text-muted-foreground">
              Bientôt disponibles pour tous vos événements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonPacks.map((pack, index) => (
              <div key={index} className="bg-white/60 rounded-xl p-6 shadow-soft opacity-60">
                <div className="text-4xl mb-4">{pack.icon}</div>
                <h3 className="text-xl font-bold text-brand-text mb-2">{pack.title}</h3>
                <p className="text-muted-foreground mb-4">{pack.description}</p>
                <div className="bg-muted px-3 py-1 rounded-full inline-block">
                  <span className="text-sm font-medium text-muted-foreground">Bientôt disponible</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir sur nos packs
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formulaire" className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FormEmbed 
              googleFormUrl={import.meta.env.VITE_GFORM_URL}
              paypalUrl={import.meta.env.VITE_PAYPAL_LINK}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-brand-blue mb-4">HelloJaiSoif</div>
              <p className="text-muted-foreground mb-4">
                Des packs boissons prêts à partager pour tous vos événements.
              </p>
              <SocialLinks 
                instagramUrl={import.meta.env.VITE_IG_URL}
                facebookUrl={import.meta.env.VITE_FB_URL}
                tiktokUrl={import.meta.env.VITE_TT_URL}
              />
            </div>
            
            <div>
              <h4 className="font-bold text-brand-text mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-smooth">Mentions légales</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-smooth">CGV</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-smooth">Politique de confidentialité</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-smooth">Politique cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-brand-text mb-4">Support</h4>
              <p className="text-muted-foreground mb-2">Service client :</p>
              <a 
                href="mailto:support@hellojaisoif.fr" 
                className="text-brand-blue hover:underline font-medium"
              >
                support@hellojaisoif.fr
              </a>
            </div>
            
            <div>
              <h4 className="font-bold text-brand-text mb-4">Livraison</h4>
              <p className="text-muted-foreground">
                Île-de-France uniquement<br />
                Sous 48h après confirmation
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 HelloJaiSoif. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;