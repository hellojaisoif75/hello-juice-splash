import Header from "@/components/Header";
import CTAButton from "@/components/CTAButton";
import ScrollToTop from "@/components/ScrollToTop";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-brand-black mb-6 font-serif">404</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 font-serif">
            Page non trouvée
          </h2>
          <p className="text-xl text-brand-gray mb-8 font-sans">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <CTAButton variant="primary" onClick={() => window.location.href = '/'}>
            Retour à l'accueil
          </CTAButton>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default NotFound;