import { Badge } from "@/components/ui/badge";
import CTAButton from "./CTAButton";

interface DrinkItem {
  name: string;
  description: string;
  allergens: string;
  volume: string;
}

interface ProductCardProps {
  title: string;
  price?: string;
  drinks?: DrinkItem[];
  isAvailable?: boolean;
  onOrderClick?: () => void;
  className?: string;
}

const ProductCard = ({ 
  title, 
  price, 
  drinks, 
  isAvailable = true, 
  onOrderClick,
  className 
}: ProductCardProps) => {
  return (
    <div className={`gradient-card rounded-2xl p-8 shadow-elegant transition-smooth hover:shadow-card border border-brand-black/10 ${!isAvailable ? 'opacity-60' : ''} ${className}`}>
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-3xl font-bold text-brand-black font-serif">{title}</h3>
        {!isAvailable && (
          <Badge variant="secondary" className="bg-muted text-brand-gray border border-brand-black/20 font-sans">
            Bientôt disponible
          </Badge>
        )}
      </div>
      
      {price && (
        <div className="mb-8">
          <span className="text-4xl font-bold text-brand-black font-serif">{price}</span>
          <span className="text-brand-gray ml-2 font-sans">TTC</span>
        </div>
      )}
      
      {drinks && (
        <div className="space-y-6 mb-8">
          <h4 className="font-semibold text-brand-black mb-4 font-serif text-xl">Composition du pack :</h4>
          {drinks.map((drink, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-brand-black/10 shadow-soft">
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-semibold text-brand-black font-sans text-lg">{drink.name}</h5>
                <Badge variant="outline" className="text-xs border-brand-gold text-brand-gold font-sans">
                  {drink.volume}
                </Badge>
              </div>
              <p className="text-sm text-brand-gray mb-3 font-sans">{drink.description}</p>
              <p className="text-sm font-medium text-brand-black font-sans">
                <span className="font-semibold">Allergènes :</span> {drink.allergens}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {isAvailable && onOrderClick && (
        <CTAButton 
          variant="primary" 
          onClick={onOrderClick}
          className="w-full"
        >
          Commander ce pack
        </CTAButton>
      )}
    </div>
  );
};

export default ProductCard;