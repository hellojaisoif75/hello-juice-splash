import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import ScrollToTop from "../components/ScrollToTop";
import ErrorBoundary from "../components/ErrorBoundary";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.subject || "Demande de renseignements - HelloJaiSoif");
    const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:hellojaisoif75@gmail.com?subject=${subject}&body=${body}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Simuler un délai puis afficher le message de confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 font-sans">
                Contactez-nous
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
                Une question ? Un besoin particulier ? Notre équipe HelloJaiSoif est là pour vous accompagner.
              </p>
            </div>

            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-12">
              <ol className="flex items-center space-x-2">
                <li><a href="/" className="hover:text-brand-gold transition-colors">Accueil</a></li>
                <li>&gt;</li>
                <li className="text-brand-text font-medium">Contact</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-brand-text mb-8 font-sans">
                  Nos coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-brand-text mb-1 font-sans">Email</h3>
                      <a 
                        href="mailto:hellojaisoif75@gmail.com"
                        className="text-muted-foreground hover:text-brand-gold transition-colors"
                      >
                        hellojaisoif75@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-brand-text mb-1 font-sans">Zone de livraison</h3>
                      <p className="text-muted-foreground">
                        Île-de-France<br />
                        Livraison sous 48h après confirmation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-brand-text mb-4 font-sans">Suivez-nous</h3>
                  <SocialLinks />
                </div>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-brand-text mb-3 font-sans">Horaires de réponse</h3>
                  <p className="text-muted-foreground text-sm">
                    Nous répondons à vos messages du lundi au vendredi, généralement sous 24h ouvrées.
                    Pour les commandes urgentes, n'hésitez pas à le préciser dans votre message.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-brand-text mb-8 font-sans">
                  Envoyez-nous un message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Message envoyé !</h3>
                    <p className="text-green-700 text-sm">
                      Votre client email s'est ouvert. Si ce n'est pas le cas, vous pouvez nous contacter directement à hellojaisoif75@gmail.com
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-brand-gold hover:text-brand-text transition-colors text-sm underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-smooth"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-smooth"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-text mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-smooth"
                        placeholder="Objet de votre demande"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-smooth resize-vertical"
                        placeholder="Décrivez votre demande, vos besoins spécifiques, ou posez-nous votre question..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-black hover:bg-brand-gold text-white px-8 py-4 rounded-full font-semibold transition-smooth shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed font-sans flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground">
                      * Champs obligatoires. En soumettant ce formulaire, votre client email s'ouvrira 
                      avec votre message pré-rempli pour l'envoyer à notre équipe.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="bg-brand-black text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <img 
                  src="/hellojaisoif-logo.png"
                  alt="HelloJaiSoif Logo" 
                  className="h-16 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-300 text-sm mb-4 font-sans">
                  Des boissons de qualité pour tous vos événements, livrées rapidement en Île-de-France.
                </p>
                <SocialLinks />
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-brand-gold font-sans">Liens utiles</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
                  <li><a href="/packs" className="text-gray-300 hover:text-white transition-colors">Nos Packs</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-brand-gold font-sans">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">Mentions légales</a></li>
                  <li><a href="/cgv" className="text-gray-300 hover:text-white transition-colors">CGV</a></li>
                  <li><a href="/politique-confidentialite" className="text-gray-300 hover:text-white transition-colors">Confidentialité</a></li>
                  <li><a href="/politique-cookies" className="text-gray-300 hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-brand-gold font-sans">Livraison</h4>
                <p className="text-gray-300 text-sm mb-2">
                  📍 Zone : Île-de-France
                </p>
                <p className="text-gray-300 text-sm">
                  ⚡ Délai : 48h après confirmation
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-sm font-sans">
                © 2024 HelloJaiSoif. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
};

export default Contact;