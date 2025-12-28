import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import SocialLinks from '@/components/SocialLinks';
import { envConfig } from '@/lib/env-config';
import { Settings } from 'lucide-react';

export default function Footer() {
  const { isAdmin } = useAuth();

  return (
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
            
            {isAdmin && (
              <div className="mt-6 pt-6 border-t border-brand-gold/20">
                <Link 
                  to="/admin" 
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-white transition-smooth font-sans text-sm"
                >
                  <Settings className="h-4 w-4" />
                  Administration
                </Link>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-brand-gold/20 pt-8 text-center text-brand-white/60">
          <p className="font-sans">© 2025 HelloJaiSoif. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
