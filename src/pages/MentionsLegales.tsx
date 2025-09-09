import Header from "@/components/Header";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Informations légales</h2>
              <p className="text-muted-foreground mb-4">
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
                pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des 
                utilisateurs et visiteurs du site les présentes mentions légales.
              </p>
              
              <h3 className="text-xl font-semibold text-brand-text mb-2">Éditeur du site</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Raison sociale :</strong> HelloJaiSoif<br/>
                <strong>Adresse :</strong> France<br/>
                <strong>Email :</strong> HelloJaisoif@gmail.com<br/>
                <strong>Téléphone :</strong> Sur demande
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Hébergement</h2>
              <p className="text-muted-foreground mb-4">
                Le site est hébergé par Lovable, dont le siège social est situé aux États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit 
                d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, 
                y compris pour les documents téléchargeables et les représentations iconographiques et 
                photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Responsabilité</h2>
              <p className="text-muted-foreground mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis 
                à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes 
                ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un 
                dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème 
                de la manière la plus précise possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Litiges</h2>
              <p className="text-muted-foreground">
                Les présentes conditions du site HelloJaiSoif et votre utilisation de ce site sont 
                régies par la loi française. Tout litige portant sur l'utilisation du site 
                HelloJaiSoif sera de la compétence exclusive des tribunaux français.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;