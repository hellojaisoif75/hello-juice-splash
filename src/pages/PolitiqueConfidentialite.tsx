import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import ScrollToTop from "@/components/ScrollToTop";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">Politique de confidentialité</h1>
          
          <div className="text-center mb-8">
            <CTAButton variant="primary" onClick={() => window.location.href = '/'}>
              Retour à l'accueil
            </CTAButton>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                HelloJaiSoif s'engage à protéger votre vie privée. Cette politique de confidentialité 
                explique comment nous collectons, utilisons et protégeons vos informations personnelles 
                lorsque vous utilisez notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Données collectées</h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les informations suivantes :<br/>
                - Nom et prénom<br/>
                - Adresse email<br/>
                - Numéro de téléphone<br/>
                - Adresse de livraison<br/>
                - Informations de commande
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Utilisation des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont utilisées pour :<br/>
                - Traiter vos commandes<br/>
                - Organiser les livraisons<br/>
                - Vous contacter concernant votre commande<br/>
                - Améliorer nos services<br/>
                - Respecter nos obligations légales
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Base légale</h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données personnelles repose sur :<br/>
                - L'exécution du contrat de vente<br/>
                - Votre consentement explicite<br/>
                - Nos intérêts légitimes<br/>
                - Le respect d'obligations légales
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Partage des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous ne vendons, n'échangeons ou ne transférons pas vos informations personnelles 
                à des tiers, sauf :<br/>
                - Pour traiter vos commandes (partenaires de livraison)<br/>
                - Lorsque la loi l'exige<br/>
                - Avec votre consentement explicite
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Conservation des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées, conformément aux obligations légales 
                (généralement 3 ans pour les données de commande).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :<br/>
                - Droit d'accès à vos données<br/>
                - Droit de rectification<br/>
                - Droit à l'effacement<br/>
                - Droit à la limitation du traitement<br/>
                - Droit à la portabilité<br/>
                - Droit d'opposition
              </p>
              <p className="text-muted-foreground mb-4">
                Pour exercer ces droits, contactez-nous à : HelloJaisoif@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Sécurité</h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos 
                informations personnelles contre l'accès non autorisé, la modification, 
                la divulgation ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela 
                pourrait affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité, 
                contactez-nous à : HelloJaisoif@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default PolitiqueConfidentialite;