import { Instagram, Facebook } from "lucide-react";

interface SocialLinksProps {
  instagramUrl?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
}

// TikTok icon component since it's not in lucide-react
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SocialLinks = ({ 
  instagramUrl = "https://www.instagram.com/hellojaisoif/",
  facebookUrl = "https://facebook.com/hellojaisoif", 
  tiktokUrl = "https://tiktok.com/@hellojaisoif"
}: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "Instagram",
      url: instagramUrl,
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook", 
      url: facebookUrl,
      icon: Facebook,
      color: "hover:text-blue-600"  
    },
    {
      name: "TikTok",
      url: tiktokUrl,
      icon: TikTokIcon,
      color: "hover:text-black"
    }
  ];

  return (
    <div className="flex items-center space-x-4">
      <span className="text-muted-foreground font-medium">Suivez-nous :</span>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 text-muted-foreground transition-smooth ${social.color} hover:scale-110`}
            aria-label={`Suivre HelloJaiSoif sur ${social.name}`}
          >
            <IconComponent size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;