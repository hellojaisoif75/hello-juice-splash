# HelloJaiSoif - Landing Page E-commerce

Une landing page moderne et lumineuse pour HelloJaiSoif, spécialisé dans la vente de packs boissons prêts à partager avec livraison rapide en Île-de-France.

## 🚀 Fonctionnalités

- **Design moderne** : Interface claire avec palette bleu/orange/vert
- **Pack Enfants** : Produit vedette à 54,99 € TTC avec composition détaillée
- **Packs à venir** : Sections grisées pour les futurs produits (Événementiel, Sport, etc.)
- **Commande intégrée** : Google Forms embedded pour la prise de commande
- **Paiement flexible** : Cash on Delivery ou PayPal
- **Livraison** : Île-de-France sous 48h
- **SEO optimisé** : Métadonnées complètes et structure sémantique
- **Responsive** : Optimisé mobile et desktop

## 🛠 Technologies

- **React** avec TypeScript
- **Tailwind CSS** pour le design system
- **Lucide React** pour les icônes
- **Vite** pour le build
- **Shadcn/ui** composants base

## 📦 Installation

```bash
# Cloner le projet
git clone <votre-repo-url>
cd hellojaisoif

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

## ⚙️ Configuration

### Variables d'environnement

Copiez `.env.example` vers `.env.local` et configurez :

```env
# Google Forms - Remplacez par votre URL de formulaire
NEXT_PUBLIC_GFORM_URL=https://docs.google.com/forms/d/e/VOTRE_FORM_ID/viewform?embedded=true

# PayPal - Remplacez par votre lien de paiement
NEXT_PUBLIC_PAYPAL_LINK=https://www.paypal.com/paypalme/VOTRE_COMPTE

# Réseaux sociaux - Remplacez par vos URLs
NEXT_PUBLIC_IG_URL=https://instagram.com/VOTRE_COMPTE
NEXT_PUBLIC_FB_URL=https://facebook.com/VOTRE_PAGE
NEXT_PUBLIC_TT_URL=https://tiktok.com/@VOTRE_COMPTE

# Google Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-VOTRE_ID
```

### Configuration Google Forms

1. Créez un Google Form avec ces champs :
   - Nom complet
   - Email
   - Téléphone
   - Adresse complète (rue, ville, code postal)
   - Quantité de packs
   - Mode de paiement (COD/PayPal)
   - Commentaires (optionnel)
   - Case de consentement RGPD (obligatoire)

2. Configurez les réponses pour aller dans Google Sheets

3. Obtenez l'URL d'embedding : 
   - Dans votre formulaire → Envoyer → `<>` → Copiez l'URL `src`

### Configuration PayPal

1. Créez un compte PayPal Business
2. Générez un Payment Link ou utilisez PayPal.me
3. Ajoutez l'URL dans les variables d'environnement

## 🎨 Personnalisation du Design

### Couleurs de marque

Les couleurs sont définies dans `src/index.css` :

```css
--brand-blue: 200 100% 44%;     /* #00A7E1 */
--brand-orange: 25 100% 50%;    /* #FF7A00 */
--brand-green: 153 60% 53%;     /* #26C281 */
--brand-gray-light: 214 24% 97%; /* #F5F7FA */
--brand-text: 215 28% 17%;      /* #111827 */
```

### Composants personnalisables

- `Header` : Navigation sticky avec logo et menu
- `CTAButton` : Boutons avec variantes (primary, secondary, outline)
- `ProductCard` : Cartes produits avec composition
- `FormEmbed` : Intégration Google Forms + PayPal
- `SocialLinks` : Liens réseaux sociaux

## 📱 Sections de la Landing Page

1. **Hero** : Titre accrocheur + CTA + image
2. **USP** : 3 piliers (Pratique, Transparence, Sécurité)
3. **Produit** : Pack Enfants avec composition détaillée
4. **Packs à venir** : Grille des futurs produits (grisés)
5. **FAQ** : Questions fréquentes accordéon
6. **Formulaire** : Google Forms + bouton PayPal
7. **Footer** : Liens légaux + réseaux sociaux + contact

## 🚀 Déploiement

### Via Lovable (Recommandé)

1. Ouvrez [Lovable](https://lovable.dev)
2. Cliquez sur "Share" → "Publish"
3. Votre site sera disponible sur `votresite.lovable.app`

### Domaine personnalisé

1. Dans Lovable : Project → Settings → Domains
2. Cliquez "Connect Domain"
3. Suivez les instructions DNS
4. Votre site sera accessible sur votre domaine

### Autres plateformes

```bash
# Build de production
npm run build

# Déployer sur Vercel
npm install -g vercel
vercel

# Déployer sur Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🔧 Maintenance

### Ajouter un nouveau pack

1. Modifiez `comingSoonPacks` dans `src/pages/Index.tsx`
2. Quand prêt, créez une nouvelle `ProductCard` avec `isAvailable=true`

### Modifier le formulaire

1. Éditez votre Google Form
2. Mettez à jour l'URL dans `.env.local`
3. Redéployez si nécessaire

### Analytics

Ajoutez votre Google Analytics ID dans `.env.local` pour suivre les conversions.

## 📞 Support

- **Email** : support@hellojaisoif.fr
- **Livraison** : Île-de-France uniquement, sous 48h
- **Paiement** : Cash on Delivery ou PayPal

## 🏗 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation sticky
│   ├── CTAButton.tsx   # Boutons d'action
│   ├── ProductCard.tsx # Cartes produits
│   ├── FormEmbed.tsx   # Formulaire intégré
│   └── ...
├── pages/
│   └── Index.tsx       # Page unique avec toutes les sections
├── assets/             # Images générées
│   └── hero-drinks.jpg
└── lib/
    └── utils.ts        # Utilitaires
```

## 📈 Performance & SEO

- **Lighthouse Score** : ≥ 90 Performance, Accessibilité, SEO
- **Images optimisées** : WebP avec lazy loading
- **Meta tags** : OpenGraph + Twitter Cards
- **Accessibilité** : Contraste AA, navigation clavier
- **Mobile-first** : Design responsive

---

**HelloJaiSoif** - Des packs boissons prêts à partager ! 🥤✨