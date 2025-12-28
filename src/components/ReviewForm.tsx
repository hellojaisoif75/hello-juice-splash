import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const reviewSchema = z.object({
  author_name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide")
    .max(255)
    .optional()
    .or(z.literal("")),
  rating: z.number().min(1, "Veuillez sélectionner une note").max(5),
  comment: z
    .string()
    .min(20, "Le commentaire doit contenir au moins 20 caractères")
    .max(1000, "Le commentaire ne peut pas dépasser 1000 caractères"),
  event_type: z.string().optional(),
  honeypot: z.string().max(0), // Honeypot field - should always be empty
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const EVENT_TYPES = [
  "Anniversaire",
  "Mariage",
  "Événement sportif",
  "Fête de famille",
  "Soirée entre amis",
  "Autre",
];

export default function ReviewForm({ onClose, onSuccess }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      honeypot: "",
    },
  });

  const handleRatingClick = (value: number) => {
    setRating(value);
    setValue("rating", value);
  };

  const onSubmit = async (data: ReviewFormData) => {
    // Honeypot check
    if (data.honeypot) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("reviews").insert({
        author_name: data.author_name.trim(),
        email: data.email?.trim() || null,
        rating: data.rating,
        comment: data.comment.trim(),
        event_type: data.event_type || null,
      });

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation
          toast({
            title: "Limite atteinte",
            description:
              "Vous avez déjà soumis un avis aujourd'hui avec cette adresse email.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Merci pour votre avis !",
          description:
            "Votre témoignage sera publié après validation par notre équipe.",
        });
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue lors de l'envoi de votre avis. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-brand-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-elegant">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-brand-black font-serif">
            Laisser un avis
          </h3>
          <button
            onClick={onClose}
            className="text-brand-gray hover:text-brand-black transition-smooth"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            {...register("honeypot")}
            className="absolute -left-[9999px]"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name */}
          <div>
            <Label htmlFor="author_name" className="text-brand-black font-sans">
              Votre prénom *
            </Label>
            <Input
              id="author_name"
              {...register("author_name")}
              placeholder="Ex: Marie"
              className="mt-1"
            />
            {errors.author_name && (
              <p className="text-destructive text-sm mt-1">
                {errors.author_name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-brand-black font-sans">
              Email (optionnel)
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="votre@email.com"
              className="mt-1"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">
                {errors.email.message}
              </p>
            )}
            <p className="text-xs text-brand-gray mt-1">
              Pour éviter les avis en double uniquement, non affiché publiquement.
            </p>
          </div>

          {/* Event Type */}
          <div>
            <Label className="text-brand-black font-sans">
              Type d'événement
            </Label>
            <Select onValueChange={(value) => setValue("event_type", value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Sélectionner un événement" />
              </SelectTrigger>
              <SelectContent>
                {EVENT_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Rating */}
          <div>
            <Label className="text-brand-black font-sans">Votre note *</Label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRatingClick(value)}
                  onMouseEnter={() => setHoveredRating(value)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-smooth"
                  aria-label={`Note ${value} sur 5`}
                >
                  <Star
                    className={`w-8 h-8 ${
                      value <= (hoveredRating || rating)
                        ? "fill-brand-gold text-brand-gold"
                        : "text-brand-gray"
                    }`}
                  />
                </button>
              ))}
            </div>
            {errors.rating && (
              <p className="text-destructive text-sm mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          {/* Comment */}
          <div>
            <Label htmlFor="comment" className="text-brand-black font-sans">
              Votre avis *
            </Label>
            <Textarea
              id="comment"
              {...register("comment")}
              placeholder="Partagez votre expérience avec nos packs boissons..."
              className="mt-1 min-h-[120px]"
            />
            {errors.comment && (
              <p className="text-destructive text-sm mt-1">
                {errors.comment.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-gold hover:bg-brand-black text-white font-semibold py-3 rounded-full transition-smooth"
          >
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Envoyer mon avis
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
