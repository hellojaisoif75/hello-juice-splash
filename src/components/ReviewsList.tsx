import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  author_name: string;
  rating: number;
  comment: string;
  event_type: string | null;
  created_at: string;
}

// Static fallback testimonials when no approved reviews exist
const FALLBACK_REVIEWS: Review[] = [
  {
    id: "fallback-1",
    author_name: "Marie",
    rating: 5,
    comment:
      "Parfait pour l'anniversaire de ma fille ! Les enfants ont adoré et moi j'ai été tranquille. Livraison rapide et tout était parfait.",
    event_type: "Anniversaire",
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-2",
    author_name: "Julien",
    rating: 5,
    comment:
      "Super pratique pour notre événement sportif. Fini les courses de dernière minute, tout arrive préparé et les quantités sont parfaites !",
    event_type: "Événement sportif",
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-3",
    author_name: "Sophie",
    rating: 5,
    comment:
      "Excellent service ! Les boissons sont de qualité et j'adore la transparence sur les ingrédients. Je recommande vivement !",
    event_type: null,
    created_at: new Date().toISOString(),
  },
];

export default function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, author_name, rating, comment, event_type, created_at")
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) throw error;

      // Use fallback reviews if no approved reviews exist
      setReviews(data && data.length > 0 ? data : FALLBACK_REVIEWS);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews(FALLBACK_REVIEWS);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-brand-gold">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-brand-gold" : "fill-none"
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-brand-gray-light rounded-2xl p-8 animate-pulse"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-gray rounded-full" />
              <div className="ml-4 space-y-2">
                <div className="h-4 w-20 bg-brand-gray rounded" />
                <div className="h-3 w-24 bg-brand-gray rounded" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-brand-gray rounded" />
              <div className="h-3 w-4/5 bg-brand-gray rounded" />
              <div className="h-3 w-3/5 bg-brand-gray rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {reviews.slice(0, 6).map((review) => (
        <div
          key={review.id}
          className="bg-brand-gray-light rounded-2xl p-8 shadow-soft border border-brand-gold/20"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {review.author_name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-brand-black font-serif">
                {review.author_name}
              </h4>
              {renderStars(review.rating)}
            </div>
          </div>
          <p className="text-brand-gray font-sans italic">"{review.comment}"</p>
          {review.event_type && (
            <p className="text-xs text-brand-gold mt-4 font-sans">
              {review.event_type}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
