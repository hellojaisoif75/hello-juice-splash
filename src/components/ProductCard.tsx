import { Badge } from "@/components/ui/badge";
import CTAButton from "./CTAButton";
import capriSunImage from "@/assets/capri-sun.png";
import fruitShootImage from "@/assets/fruitshoot.jpg";
import jusPommeImage from "@/assets/jus-pomme.jpg";
import cristallineImage from "@/assets/cristalline-white-bg.png";
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
            {/* Capri-Sun */}
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={capriSunImage} alt="Capri-Sun" className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-xs sm:text-sm mb-1 sm:mb-2">Capri-Sun</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×40 (20 cl)</p>
            </div>
            
            {/* Fruit Shoot */}
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={fruitShootImage} alt="Fruit Shoot" className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-xs sm:text-sm mb-1 sm:mb-2">Fruit Shoot</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×24 (20 cl)</p>
            </div>
            
            {/* Jus de pomme */}
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={jusPommeImage} alt="Jus de pomme" className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-xs sm:text-sm mb-1 sm:mb-2">Jus de pomme</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×24 (20 cl)</p>
            </div>
            
            {/* Évian ou Cristalline */}
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-brand-black/10 shadow-soft text-center">
              <img src={cristallineImage} alt="Évian ou Cristalline" className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-xs sm:text-sm mb-1 sm:mb-2">Évian ou Cristalline</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×24 (33 cl)</p>
            </div>
            
            {/* Eau 1,5 L OFFERT */}
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-brand-black/10 shadow-soft text-center relative col-span-2 sm:col-span-1">
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="bg-brand-gold text-white border-0 font-sans font-bold text-xs px-2 py-1">
                  OFFERT
                </Badge>
              </div>
              <img src={eauCadeauImage} alt="Pack Cristalline 6 x 1,5 L x 2 Offert" className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" />
              <h5 className="font-semibold text-brand-black font-sans text-xs sm:text-sm mb-1 sm:mb-2">Pack Cristalline 6 x 1,5 L</h5>
              <p className="text-xs text-brand-gray font-sans mb-1">×2 OFFERT</p>
            </div>
          </div>
          
          {/* Gift ribbon for cristalline packs */}
          <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-3 sm:p-4 text-center mb-8">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl">🎁</span>
              <p className="text-brand-gold font-semibold font-sans text-sm sm:text-base">
                Cadeau offert : 2 packs de Cristalline 1,5L
              </p>
              <span className="text-xl sm:text-2xl">🎁</span>
            </div>
          </div>

          {/* Ingredients Table */}
          <div className="bg-white rounded-xl border border-brand-black/10 shadow-soft overflow-hidden">
            <div className="bg-brand-gold/10 px-4 py-3 border-b border-brand-gold/20">
              <h4 className="font-bold text-brand-black font-serif text-lg">Ingrédients & Allergènes – Pack Enfants</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-gray-light">
                    <th className="px-4 py-3 text-left font-semibold text-brand-black font-sans text-sm">Produit</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-black font-sans text-sm">Ingrédients</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-black font-sans text-sm">Allergènes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-black/5">
                    <td className="px-4 py-3 font-semibold text-brand-black font-sans text-sm">
                      Capri-Sun Multivitamin 20 cl
                    </td>
                    <td className="px-4 py-3 text-brand-gray font-sans text-sm">
                      Eau de source, jus de fruits à base de concentrés 12% (citron 4,6%, orange 4,5%, pomme 1,6%, ananas 0,6%, banane 0,4%, kiwi 0,2%, fruit de la passion 0,1%), sucre, arômes naturels, vitamines (C, B3, E, B6, B1, biotine), antioxydant : acide ascorbique.
                    </td>
                    <td className="px-4 py-3 text-brand-black font-sans text-sm font-medium">
                      Aucun allergène majeur
                    </td>
                  </tr>
                  <tr className="border-b border-brand-black/5 bg-brand-gray-light/30">
                    <td className="px-4 py-3 font-semibold text-brand-black font-sans text-sm">
                      Fruit Shoot Multivitamin 20 cl
                    </td>
                    <td className="px-4 py-3 text-brand-gray font-sans text-sm">
                      Eau 84%, jus & purées de fruits à base de concentrés 10% (orange 6,5%, pêche 1,9%, abricot 1,5%, banane 0,1%), sucre, acidifiant : acide citrique, arômes naturels d'abricot, antioxydant : acide ascorbique, vitamines (B3, B6, B8), colorant : caroténoïdes.
                    </td>
                    <td className="px-4 py-3 text-brand-black font-sans text-sm font-medium">
                      Aucun allergène majeur
                    </td>
                  </tr>
                  <tr className="border-b border-brand-black/5">
                    <td className="px-4 py-3 font-semibold text-brand-black font-sans text-sm">
                      Jus de Pomme Rio d'Oro 20 cl
                    </td>
                    <td className="px-4 py-3 text-brand-gray font-sans text-sm">
                      100% jus de pomme à base de concentré.
                    </td>
                    <td className="px-4 py-3 text-brand-black font-sans text-sm font-medium">
                      Aucun allergène majeur
                    </td>
                  </tr>
                  <tr className="border-b border-brand-black/5 bg-brand-gray-light/30">
                    <td className="px-4 py-3 font-semibold text-brand-black font-sans text-sm">
                      Évian 33 cl
                    </td>
                    <td className="px-4 py-3 text-brand-gray font-sans text-sm">
                      Eau minérale naturelle (composition minérale : Ca 80 mg/L, Mg 26 mg/L, HCO₃⁻ 360 mg/L...).
                    </td>
                    <td className="px-4 py-3 text-brand-black font-sans text-sm font-medium">
                      Aucun
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-brand-black font-sans text-sm">
                      Cristalline 33 cl
                    </td>
                    <td className="px-4 py-3 text-brand-gray font-sans text-sm">
                      Eau de source (Ca 68 mg/L, Mg 11 mg/L, Cl⁻ 28 mg/L...).
                    </td>
                    <td className="px-4 py-3 text-brand-black font-sans text-sm font-medium">
                      Aucun
                    </td>
                  </tr>
                </tbody>
              </table>
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