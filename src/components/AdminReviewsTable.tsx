import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Check, X, Trash2, Star, RefreshCw } from 'lucide-react';

interface Review {
  id: string;
  author_name: string;
  email: string | null;
  rating: number;
  comment: string;
  event_type: string | null;
  is_approved: boolean | null;
  created_at: string | null;
}

export default function AdminReviewsTable() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        toast.error('Erreur lors du chargement des avis');
      } else {
        setReviews(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error('Erreur lors du chargement des avis');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ is_approved: true })
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors de l\'approbation');
      } else {
        toast.success('Avis approuvé');
        fetchReviews();
      }
    } catch {
      toast.error('Une erreur est survenue');
    }
  };

  const handleReject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ is_approved: false })
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors du rejet');
      } else {
        toast.success('Avis rejeté');
        fetchReviews();
      }
    } catch {
      toast.error('Une erreur est survenue');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Erreur lors de la suppression');
      } else {
        toast.success('Avis supprimé');
        fetchReviews();
      }
    } catch {
      toast.error('Une erreur est survenue');
    }
  };

  const filteredReviews = reviews.filter((review) => {
    if (filter === 'pending') return !review.is_approved;
    if (filter === 'approved') return review.is_approved;
    return true;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-accent text-accent' : 'text-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters and Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Tous ({reviews.length})
          </Button>
          <Button
            variant={filter === 'pending' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('pending')}
          >
            En attente ({reviews.filter((r) => !r.is_approved).length})
          </Button>
          <Button
            variant={filter === 'approved' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('approved')}
          >
            Approuvés ({reviews.filter((r) => r.is_approved).length})
          </Button>
        </div>
        <Button variant="outline" size="sm" onClick={fetchReviews}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Actualiser
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Auteur</TableHead>
              <TableHead>Note</TableHead>
              <TableHead className="hidden md:table-cell">Commentaire</TableHead>
              <TableHead className="hidden lg:table-cell">Événement</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReviews.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  Aucun avis trouvé
                </TableCell>
              </TableRow>
            ) : (
              filteredReviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{review.author_name}</p>
                      {review.email && (
                        <p className="text-xs text-muted-foreground">{review.email}</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{renderStars(review.rating)}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs">
                    <p className="truncate" title={review.comment}>
                      {review.comment}
                    </p>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {review.event_type || '-'}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                    {formatDate(review.created_at)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={review.is_approved ? 'default' : 'secondary'}>
                      {review.is_approved ? 'Approuvé' : 'En attente'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      {!review.is_approved && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleApprove(review.id)}
                          title="Approuver"
                          className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      {review.is_approved && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleReject(review.id)}
                          title="Rejeter"
                          className="h-8 w-8 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Supprimer"
                            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Supprimer cet avis ?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Cette action est irréversible. L'avis de {review.author_name} sera
                              définitivement supprimé.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(review.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
