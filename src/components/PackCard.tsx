import { cn } from "@/lib/utils";

interface PackCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  onClick?: () => void;
  available: boolean;
}

const PackCard = ({ title, price, description, image, onClick, available }: PackCardProps) => {
  return (
    <div 
      className={cn(
        "bg-brand-white border border-gray-200 rounded-lg overflow-hidden shadow-card transition-smooth",
        available 
          ? "hover:shadow-elegant cursor-pointer" 
          : "opacity-50 cursor-not-allowed"
      )}
      onClick={available ? onClick : undefined}
    >
      <div className="aspect-square relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {available && (
          <div className="absolute top-4 right-4 bg-brand-gold text-brand-white px-3 py-1 rounded-full">
            <span className="font-inter text-sm font-medium">Disponible</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-brand-black mb-2">
          {title}
        </h3>
        <p className="font-inter text-brand-gray-medium mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-playfair text-2xl font-bold text-brand-gold">
            {price}
          </span>
          {available && (
            <button className="bg-brand-black text-brand-white px-4 py-2 rounded-full font-inter text-sm font-medium hover:bg-brand-gold transition-smooth">
              Voir le pack
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackCard;