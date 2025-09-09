import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-gray-light transition-smooth"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-brand-text">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-brand-blue" size={20} />
        ) : (
          <ChevronDown className="text-brand-blue" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-brand-gray-light border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;