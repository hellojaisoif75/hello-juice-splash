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
    <div className={`gradient-card rounded-2xl p-6 shadow-card transition-smooth hover:shadow-lg ${!isAvailable ? 'opacity-60' : ''} ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-brand-text">{title}</h3>
        {!isAvailable && (
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            Bientôt disponible
          </Badge>
        )}
      </div>
      
      {price && (
        <div className="mb-6">
          <span className="text-3xl font-bold text-brand-blue">{price}</span>
          <span className="text-muted-foreground ml-2">TTC</span>
        </div>
      )}
      
      {drinks && (
        <div className="space-y-4 mb-6">
          <h4 className="font-semibold text-brand-text mb-3">Composition du pack :</h4>
          {drinks.map((drink, index) => (
            <div key={index} className="bg-white/60 rounded-lg p-4 border border-white/20">
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-semibold text-brand-blue">{drink.name}</h5>
                <Badge variant="outline" className="text-xs">
                  {drink.volume}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{drink.description}</p>
              <p className="text-sm font-medium text-brand-green">
                <span className="font-semibold">Allergènes :</span> {drink.allergens}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {isAvailable && onOrderClick && (
        <CTAButton 
          variant="secondary" 
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