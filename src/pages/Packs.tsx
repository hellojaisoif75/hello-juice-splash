import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { envConfig } from "@/lib/env-config";

const Packs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const packEnfants = {
    title: "Pack Enfants",
    price: "54,99 €",
    description: "Pack spécialement conçu pour les enfants avec des boissons adaptées",
    icon: "🧒",
    isAvailable: true,
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
                <li className="text-brand-black font-medium">Packs</li>
              </ol>
            </nav>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-serif">
                Nos <span className="text-brand-gold">Packs</span>
              </h1>
              <p className="text-xl text-brand-gray font-sans max-w-2xl mx-auto">
                Découvrez notre sélection de packs boissons pour tous vos événements
              </p>
              <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>
          </div>
        </section>

        {/* Packs Grid */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Pack Enfants - Available */}
              <div className="bg-white rounded-2xl p-8 shadow-elegant border border-brand-gold/20 hover:shadow-card transition-smooth cursor-pointer group">
                <Link to="/packs/enfants" className="block">
                  <div className="text-5xl mb-6 text-center">{packEnfants.icon}</div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif text-center group-hover:text-brand-gold transition-smooth">
                    {packEnfants.title}
                  </h3>
                  <p className="text-brand-gray mb-6 font-sans text-center">
                    {packEnfants.description}
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-brand-gold font-serif">{packEnfants.price}</span>
                    <span className="text-brand-gray ml-2">TTC</span>
                  </div>
                  <div className="bg-brand-gold text-white px-6 py-3 rounded-full text-center font-medium hover:bg-brand-black transition-smooth">
                    <span className="font-sans">Voir le pack</span>
                  </div>
                </Link>
              </div>

              {/* Coming Soon Packs */}
              {comingSoonPacks.map((pack, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border border-brand-black/10 opacity-50 cursor-not-allowed" aria-disabled="true">
                  <div className="text-5xl mb-6 text-center opacity-60">{pack.icon}</div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif text-center opacity-60">{pack.title}</h3>
                  <p className="text-brand-gray mb-6 font-sans text-center opacity-60">{pack.description}</p>
                  <div className="bg-brand-gray-light px-4 py-2 rounded-full text-center border border-brand-black/10">
                    <span className="text-sm font-medium text-brand-gray font-sans">Bientôt disponible</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 font-serif">
              Prêt à commander ?
            </h2>
            <p className="text-xl text-brand-gray mb-8 font-sans">
              Le Pack Enfants est disponible dès maintenant
            </p>
            <Link
              to="/packs/enfants"
              className="inline-flex items-center justify-center bg-brand-black hover:bg-brand-gold text-white px-8 py-4 rounded-full font-semibold transition-smooth shadow-elegant font-sans text-lg"
            >
              Commander le Pack Enfants
            </Link>
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

export default Packs;