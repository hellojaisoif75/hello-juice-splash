import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AdminReviewsTable from '@/components/AdminReviewsTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Home, MessageSquare } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading, signOut } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate('/auth');
      } else if (!isAdmin) {
        navigate('/');
      }
    }
  }, [user, isAdmin, isLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/logo-hellojaisoif.png" 
              alt="HelloJaiSoif" 
              className="h-8 object-contain"
            />
            <h1 className="text-xl font-serif font-semibold hidden sm:block">Administration</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour au site</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Déconnexion</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <MessageSquare className="h-5 w-5 text-accent" />
              </div>
              <div>
                <CardTitle>Gestion des avis clients</CardTitle>
                <CardDescription>
                  Approuvez, rejetez ou supprimez les avis soumis par vos clients
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <AdminReviewsTable />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
