import { Link } from "react-router-dom";
import { validateIframeSrc } from "@/lib/security-utils";
import { envConfig } from "@/lib/env-config";

interface FormEmbedProps {
  googleFormUrl?: string;
}

const FormEmbed = ({ 
  googleFormUrl = envConfig.GFORM_URL
}: FormEmbedProps) => {
  // Validate iframe source for security
  const isValidIframeSrc = validateIframeSrc(googleFormUrl);

  return (
    <div className="bg-white rounded-2xl shadow-card p-8">
      <div className="mb-6">
        <p className="text-muted-foreground">
          Remplissez vos coordonnées et votre adresse de livraison. 
          Paiement à la livraison.
        </p>
      </div>
      
      <div className="relative">
        {isValidIframeSrc ? (
          <iframe
            src={googleFormUrl}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation"
            className="rounded-lg"
            title="Formulaire de commande HelloJaiSoif"
          >
            Chargement en cours...
          </iframe>
        ) : (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 text-center">
            <p className="text-destructive font-medium">
              Le formulaire n'est pas disponible pour le moment. Veuillez nous contacter directement.
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          En soumettant ce formulaire, vous acceptez notre{" "}
          <Link to="/politique-confidentialite" className="text-brand-blue hover:underline">
            politique de confidentialité
          </Link>{" "}
          et nos{" "}
          <Link to="/cgv" className="text-brand-blue hover:underline">
            conditions générales de vente
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default FormEmbed;