import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import ScrollToTop from "@/components/ScrollToTop";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">Politique des cookies</h1>
          
          <div className="text-center mb-8">
            <CTAButton variant="primary" onClick={() => window.location.href = '/'}>
              Retour à l'accueil
            </CTAButton>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-muted-foreground mb-4">
                Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile 
                lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos 
                actions et préférences pendant une période donnée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Types de cookies utilisés</h2>
              
              <h3 className="text-xl font-semibold text-brand-text mb-2">Cookies strictement nécessaires</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de 
                naviguer sur le site et d'utiliser ses fonctionnalités essentielles comme les 
                formulaires de commande.
              </p>

              <h3 className="text-xl font-semibold text-brand-text mb-2">Cookies de performance</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies collectent des informations sur la façon dont vous utilisez notre site, 
                comme les pages les plus visitées. Ces données nous aident à améliorer le 
                fonctionnement de notre site.
              </p>

              <h3 className="text-xl font-semibold text-brand-text mb-2">Cookies de fonctionnalité</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies permettent au site de mémoriser vos choix (comme votre région de livraison) 
                et offrent des fonctionnalités améliorées et personnalisées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Cookies tiers</h2>
              <p className="text-muted-foreground mb-4">
                Nous utilisons également des services tiers qui peuvent déposer des cookies :<br/>
                - <strong>Google Analytics :</strong> pour analyser le trafic du site<br/>
                - <strong>PayPal :</strong> pour les paiements sécurisés<br/>
                - <strong>Réseaux sociaux :</strong> pour les boutons de partage
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Gestion des cookies</h2>
              <p className="text-muted-foreground mb-4">
                Vous pouvez contrôler et gérer les cookies de plusieurs façons :
              </p>
              
              <h3 className="text-xl font-semibold text-brand-text mb-2">Via votre navigateur</h3>
              <p className="text-muted-foreground mb-4">
                Tous les navigateurs modernes permettent de gérer les cookies. Vous pouvez :<br/>
                - Bloquer tous les cookies<br/>
                - Accepter uniquement les cookies du site visité<br/>
                - Supprimer les cookies existants<br/>
                - Être averti avant l'installation d'un cookie
              </p>

              <h3 className="text-xl font-semibold text-brand-text mb-2">Via notre bannière de cookies</h3>
              <p className="text-muted-foreground mb-4">
                Lors de votre première visite, une bannière vous permet de choisir quels types 
                de cookies vous acceptez. Vous pouvez modifier vos préférences à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Configuration par navigateur</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies<br/>
                <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies<br/>
                <strong>Safari :</strong> Préférences → Confidentialité → Cookies<br/>
                <strong>Edge :</strong> Paramètres → Cookies et autorisations de site
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Conséquences de la désactivation</h2>
              <p className="text-muted-foreground mb-4">
                La désactivation de certains cookies peut affecter votre expérience sur notre site :<br/>
                - Impossibilité de mémoriser vos préférences<br/>
                - Fonctionnalités réduites<br/>
                - Nécessité de ressaisir vos informations à chaque visite
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Mise à jour de la politique</h2>
              <p className="text-muted-foreground mb-4">
                Cette politique des cookies peut être mise à jour périodiquement. Nous vous 
                encourageons à la consulter régulièrement pour rester informé de nos pratiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant notre utilisation des cookies, 
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

export default PolitiqueCookies;