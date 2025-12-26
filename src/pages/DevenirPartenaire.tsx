import { useState } from "react";
import { Handshake, TrendingUp, CheckCircle, Users, Calendar, Building2 } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const DevenirPartenaire = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    setFormData({
      nom: "",
      entreprise: "",
      email: "",
      telephone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const avantages = [
    {
      icon: TrendingUp,
      title: "Revenus complémentaires",
      description: "Développez une nouvelle source de revenus en proposant nos packs à vos clients.",
    },
    {
      icon: Handshake,
      title: "Partenariat simplifié",
      description: "Nous gérons la logistique, vous vous concentrez sur votre cœur de métier.",
    },
    {
      icon: CheckCircle,
      title: "Qualité garantie",
      description: "Des produits de qualité qui valorisent votre offre et fidélisent vos clients.",
    },
  ];

  const profils = [
    {
      icon: Calendar,
      title: "Organisateurs d'événements",
      description: "Mariages, anniversaires, séminaires...",
    },
    {
      icon: Building2,
      title: "Salles de réception",
      description: "Proposez une offre boissons clé en main.",
    },
    {
      icon: Users,
      title: "Traiteurs & Restaurateurs",
      description: "Complétez votre offre avec nos packs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-cream to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold font-medium tracking-wider uppercase text-sm mb-4">
            Partenariat
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6">
            Devenez partenaire <span className="text-brand-gold">HelloJaiSoif</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et proposez à vos clients des packs boissons de qualité pour leurs événements.
          </p>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black text-center mb-12">
            Pourquoi devenir partenaire ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-brand-gold/30 transition-smooth shadow-card"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <avantage.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-black mb-3">
                  {avantage.title}
                </h3>
                <p className="text-muted-foreground">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils recherchés */}
      <section className="py-16 bg-brand-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black text-center mb-12">
            Profils recherchés
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {profils.map((profil, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-brand-gold/30 transition-smooth shadow-card text-center"
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <profil.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-black mb-3">
                  {profil.title}
                </h3>
                <p className="text-muted-foreground">{profil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black text-center mb-4">
            Contactez-nous
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-brand-black mb-2">
                  Nom complet *
                </label>
                <Input
                  id="nom"
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="bg-card border-border focus:border-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="entreprise" className="block text-sm font-medium text-brand-black mb-2">
                  Entreprise
                </label>
                <Input
                  id="entreprise"
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                  className="bg-card border-border focus:border-brand-gold"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-brand-black mb-2">
                  Téléphone
                </label>
                <Input
                  id="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="bg-card border-border focus:border-brand-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
                Votre message *
              </label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Présentez-vous et expliquez votre intérêt pour un partenariat..."
                className="bg-card border-border focus:border-brand-gold"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-black hover:bg-brand-gold text-white py-6 rounded-full font-semibold transition-smooth shadow-elegant"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} HelloJaiSoif. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default DevenirPartenaire;
