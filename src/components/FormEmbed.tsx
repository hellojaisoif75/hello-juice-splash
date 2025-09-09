import { useState } from "react";
import CTAButton from "./CTAButton";

interface FormEmbedProps {
  googleFormUrl?: string;
  paypalUrl?: string;
}

const FormEmbed = ({ 
  googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform?embedded=true",
  paypalUrl = "https://www.paypal.com/paypalme/hellojaisoif" 
}: FormEmbedProps) => {
  const [showPaypalButton, setShowPaypalButton] = useState(false);

  const handlePaypalClick = () => {
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl shadow-card p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-brand-text mb-4">
          Commandez votre Pack Enfants
        </h2>
        <p className="text-muted-foreground">
          Remplissez vos coordonnées et votre adresse de livraison. 
          Paiement à la livraison ou via PayPal.
        </p>
      </div>
      
      <div className="relative">
        <iframe
          src={googleFormUrl}
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-forms allow-scripts allow-same-origin"
          className="rounded-lg"
          title="Formulaire de commande HelloJaiSoif"
        >
          Chargement en cours...
        </iframe>
      </div>
      
      <div className="mt-6 p-6 bg-brand-gray-light rounded-lg">
        <h3 className="font-semibold text-brand-text mb-2">
          Vous avez choisi PayPal ?
        </h3>
        <p className="text-muted-foreground mb-4">
          Après avoir envoyé le formulaire, cliquez sur le bouton ci-dessous pour régler votre commande.
        </p>
        <CTAButton
          variant="primary"
          onClick={handlePaypalClick}
          className="bg-[#0070ba] hover:bg-[#005ea6]"
        >
          Payer avec PayPal
        </CTAButton>
      </div>
      
      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          En soumettant ce formulaire, vous acceptez notre{" "}
          <a href="#" className="text-brand-blue hover:underline">
            politique de confidentialité
          </a>{" "}
          et nos{" "}
          <a href="#" className="text-brand-blue hover:underline">
            conditions générales de vente
          </a>.
        </p>
      </div>
    </div>
  );
};

export default FormEmbed;