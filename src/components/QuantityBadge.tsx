interface QuantityBadgeProps {
  quantity: string;
}

const QuantityBadge = ({ quantity }: QuantityBadgeProps) => {
  return (
    <div className="absolute top-2 right-2 bg-brand-gold text-brand-white px-2 py-1 rounded-full">
      <span className="font-inter text-xs font-bold">{quantity}</span>
    </div>
  );
};

export default QuantityBadge;