import { Shield, Truck, Package, Eye, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import SocialLinks from "@/components/SocialLinks";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { envConfig } from "@/lib/env-config";
import heroImage from "@/assets/hero-cocktails.png";

const Home = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
      
        {/* Hero Section */}
        <section id="hero" className="pt-24 pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-black mb-6 font-serif tracking-widest uppercase">
                  HelloJaiSoif
                </h1>
                <p className="text-2xl md:text-3xl text-brand-gold font-serif mb-6">
                  Vos événements, nos boissons
                </p>
                <p className="text-lg md:text-xl text-brand-gray mb-8 font-sans max-w-2xl">
                  Nous préparons des packs boissons sur-mesure pour tous vos moments de partage : anniversaires, mariages, événements sportifs et bien plus encore.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/packs"
                    className="inline-flex items-center justify-center bg-brand-black hover:bg-brand-gold text-white px-10 py-4 rounded-full font-semibold transition-smooth shadow-elegant font-sans text-lg"
                  >
                    Découvrir nos packs
                  </Link>
                </div>
                
                {/* Decorative line */}
                <div className="mt-12 flex items-center justify-center lg:justify-start">
                  <div className="w-20 h-0.5 bg-brand-gold"></div>
                  <div className="w-2 h-2 bg-brand-gold rounded-full mx-4"></div>
                  <div className="w-20 h-0.5 bg-brand-gold"></div>
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className="relative z-10">
                  <img src={heroImage} alt="Pack de boissons HelloJaiSoif" className="w-full h-auto rounded-2xl shadow-elegant" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-gold/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-gold/5 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-serif">
                Qui sommes-nous ?
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-xl text-brand-gray font-sans max-w-3xl mx-auto">
                HelloJaiSoif, c'est la solution simple pour vos événements. Plus besoin de courir faire vos courses : nous préparons vos packs boissons et vous les livrons directement chez vous.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8 rounded-2xl bg-brand-gray-light border border-brand-gold/20">
                <div className="w-14 h-14 mx-auto mb-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3 font-serif">Simplicité</h3>
                <p className="text-brand-gray font-sans text-sm">
                  Commandez en quelques clics, nous nous occupons du reste.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-brand-gray-light border border-brand-gold/20">
                <div className="w-14 h-14 mx-auto mb-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3 font-serif">Qualité</h3>
                <p className="text-brand-gray font-sans text-sm">
                  Des boissons sélectionnées avec soin pour satisfaire tous les goûts.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-brand-gray-light border border-brand-gold/20">
                <div className="w-14 h-14 mx-auto mb-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3 font-serif">Service</h3>
                <p className="text-brand-gray font-sans text-sm">
                  Un accompagnement personnalisé pour chaque événement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-20 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif">Pratique</h3>
                <p className="text-brand-gray font-sans">
                  Des packs prêts à l'emploi, parfaitement dosés pour tous vos événements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif">Transparence</h3>
                <p className="text-brand-gray font-sans">
                  Ingrédients et allergènes clairement indiqués pour chaque produit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif">Sécurité</h3>
                <p className="text-brand-gray font-sans">
                  Paiement à la livraison pour votre tranquillité d'esprit.
                </p>
              </div>
            </div>
            
            {/* Delivery banner */}
            <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-soft border border-brand-gold/20">
              <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif flex items-center justify-center gap-2">
                <Truck className="w-6 h-6 text-brand-gold" />
                Livraison Île-de-France sous 48h après confirmation
              </h3>
              <p className="text-brand-gray font-sans">
                Service rapide et fiable pour tous vos événements
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-serif">
                Retours d'expérience
              </h2>
              <p className="text-xl text-brand-gray font-sans">
                Ce que nos clients pensent de nos packs
              </p>
              <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-brand-gray-light rounded-2xl p-8 shadow-soft border border-brand-gold/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-brand-black font-serif">Marie</h4>
                    <div className="flex text-brand-gold">
                      {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray font-sans italic">
                  "Parfait pour l'anniversaire de ma fille ! Les enfants ont adoré et moi j'ai été tranquille. Livraison rapide et tout était parfait."
                </p>
              </div>
              
              <div className="bg-brand-gray-light rounded-2xl p-8 shadow-soft border border-brand-gold/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">J</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-brand-black font-serif">Julien</h4>
                    <div className="flex text-brand-gold">
                      {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray font-sans italic">
                  "Super pratique pour notre événement sportif. Fini les courses de dernière minute, tout arrive préparé et les quantités sont parfaites !"
                </p>
              </div>
              
              <div className="bg-brand-gray-light rounded-2xl p-8 shadow-soft border border-brand-gold/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-brand-black font-serif">Sophie</h4>
                    <div className="flex text-brand-gold">
                      {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray font-sans italic">
                  "Excellent service ! Les boissons sont de qualité et j'adore la transparence sur les ingrédients. Je recommande vivement !"
                </p>
              </div>
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

export default Home;