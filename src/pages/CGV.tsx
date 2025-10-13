import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import ScrollToTop from "@/components/ScrollToTop";

const CGV = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">Conditions Générales de Vente</h1>
          
          <div className="text-center mb-8">
            <CTAButton variant="primary" onClick={() => window.location.href = '/'}>
              Retour à l'accueil
            </CTAButton>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 1 - Objet</h2>
              <p className="text-muted-foreground mb-4">
                Les présentes conditions générales de vente s'appliquent à toutes les ventes conclues 
                sur le site Internet HelloJaiSoif. Le fait de passer commande implique l'adhésion entière 
                et sans réserve de l'acheteur aux présentes conditions générales de vente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 2 - Prix</h2>
              <p className="text-muted-foreground mb-4">
                Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC). 
                Ils tiennent compte de la TVA applicable au jour de la commande. Tout changement du 
                taux applicable peut être répercuté sur le prix des produits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 3 - Commande</h2>
              <p className="text-muted-foreground mb-4">
                Vous pouvez passer commande via notre formulaire en ligne. La validation de votre 
                commande vaut acceptation de prix et description des produits disponibles à la vente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 4 - Paiement</h2>
              <p className="text-muted-foreground mb-4">
                Le paiement de vos achats s'effectue uniquement par paiement à la livraison (Cash on Delivery). 
                Le règlement sera dû au moment de la réception de votre commande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 5 - Livraison</h2>
              <p className="text-muted-foreground mb-4">
                Les livraisons sont effectuées uniquement en Île-de-France sous 48h après confirmation 
                de commande. Les délais de livraison sont donnés à titre indicatif et peuvent varier 
                selon les conditions météorologiques ou d'autres circonstances exceptionnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 6 - Droit de rétractation</h2>
              <p className="text-muted-foreground mb-4">
                Conformément à l'article L121-21 du Code de la consommation, vous disposez d'un délai 
                de 14 jours à compter de la réception de vos produits pour exercer votre droit de 
                rétractation sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 7 - Garanties</h2>
              <p className="text-muted-foreground mb-4">
                Tous nos produits bénéficient de la garantie légale de conformité et de la garantie 
                contre les vices cachés prévues par le Code civil. En cas de non-conformité d'un 
                produit vendu, il pourra être retourné, échangé ou remboursé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 8 - Données personnelles</h2>
              <p className="text-muted-foreground mb-4">
                HelloJaiSoif s'engage à préserver la confidentialité des informations fournies par 
                l'acheteur. Toute information vous concernant est soumise aux dispositions de la loi 
                n° 78-17 du 6 janvier 1978. Vous disposez d'un droit d'accès, de rectification et 
                d'opposition aux données personnelles vous concernant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Article 9 - Litiges</h2>
              <p className="text-muted-foreground">
                Les présentes conditions générales de vente sont soumises à la loi française. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default CGV;