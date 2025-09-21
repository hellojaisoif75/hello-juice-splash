interface ComingSoonCardProps {
  title: string;
  description: string;
}

const ComingSoonCard = ({ title, description }: ComingSoonCardProps) => {
  return (
    <div className="bg-brand-gray-light border border-gray-300 rounded-lg p-6 opacity-60">
      <div className="aspect-square bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        <span className="font-inter text-gray-500 text-sm">Image à venir</span>
      </div>
      
      <div className="text-center">
        <h3 className="font-playfair text-lg font-bold text-brand-black mb-2">
          {title}
        </h3>
        <p className="font-inter text-sm text-brand-gray-medium mb-4">
          {description}
        </p>
        <div className="bg-brand-gray-medium text-brand-white px-4 py-2 rounded-full inline-block">
          <span className="font-inter text-sm font-medium">Bientôt disponible</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;