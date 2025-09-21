import { getSecureExternalLinkProps } from "@/lib/security-utils";
import { envConfig } from "@/lib/env-config";

interface PaypalButtonProps {
  amount: string;
  paypalUrl?: string;
}

const PaypalButton = ({ amount, paypalUrl = envConfig.PAYPAL_LINK }: PaypalButtonProps) => {
  const handlePaypalClick = () => {
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  };

  const linkProps = getSecureExternalLinkProps(paypalUrl);

  return (
    <button
      onClick={handlePaypalClick}
      className="bg-brand-black text-brand-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-brand-gold transition-smooth shadow-button hover:shadow-elegant"
      {...linkProps}
    >
      Payer avec PayPal ({amount})
    </button>
  );
};

export default PaypalButton;