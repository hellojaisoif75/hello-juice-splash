import { Badge } from "@/components/ui/badge";
import CTAButton from "./CTAButton";
import capriSunImage from "@/assets/capri-sun.png";
import fruitShootImage from "@/assets/fruitshoot.jpg";
import jusPommeImage from "@/assets/jus-pomme.jpg";
import cristallineImage from "@/assets/cristalline.png";
import eauCadeauImage from "@/assets/eau-cadeau.png";

interface DrinkItem {
  name: string;
  description: string;
  allergens: string;
  volume: string;
  quantity?: string;
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
        <div className="mb-8">
          <div className="grid grid-cols-5 gap-4 mb-6">
            {/* Capri-Sun */}
            <div className="bg-white rounded-xl p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={capriSunImage} alt="Capri-Sun" className="w-full h-32 object-contain mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-sm mb-2">Capri-Sun</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×40 (20 cl)</p>
            </div>
            
            {/* Fruit Shoot */}
            <div className="bg-white rounded-xl p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={fruitShootImage} alt="Fruit Shoot" className="w-full h-32 object-contain mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-sm mb-2">Fruit Shoot</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×24 (20 cl)</p>
            </div>
            
            {/* Jus de pomme */}
            <div className="bg-white rounded-xl p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={jusPommeImage} alt="Jus de pomme" className="w-full h-32 object-contain mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-sm mb-2">Jus de pomme</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×24 (20 cl)</p>
            </div>
            
            {/* Évian ou Cristalline */}
            <div className="bg-white rounded-xl p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={cristallineImage} alt="Évian ou Cristalline" className="w-full h-32 object-contain mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-sm mb-2">Évian ou Cristalline</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×24 (33 cl)</p>
            </div>
            
            {/* Eau 1,5 L OFFERT */}
            <div className="bg-white rounded-xl p-4 border border-brand-black/10 shadow-soft text-center relative">
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="bg-brand-gold text-white border-0 font-sans font-bold text-xs px-2 py-1">
                  OFFERT
                </Badge>
              </div>
              <img src={eauCadeauImage} alt="Eau 1,5 L avec cadeau" className="w-full h-32 object-contain mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-sm mb-2">Eau 1,5 L</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×2 OFFERT</p>
            </div>
          </div>
          
          {/* Gift ribbon for cristalline packs */}
          <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🎁</span>
              <p className="text-brand-gold font-semibold font-sans">
                Cadeau offert : 2 packs de Cristalline 1,5L
              </p>
              <span className="text-2xl">🎁</span>
            </div>
          </div>
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