// Contact constants
export const CONTACT_INFO = [
  { 
    icon: "Mail", 
    title: "Email", 
    value: "nikita@example.com",
    href: "mailto:nikita@example.com"
  },
  { 
    icon: "Phone", 
    title: "Phone", 
    value: "+91 123 456 7890",
    href: "tel:+911234567890"
  },
  { 
    icon: "MapPin", 
    title: "Location", 
    value: "Uttarakhand, India",
    href: "#"
  },
] as const;

export const SOCIAL_ITEMS = [
  { icon: "Github", href: "#", label: "GitHub" },
  { icon: "Linkedin", href: "#", label: "LinkedIn" },
  { icon: "Mail", href: "mailto:nikita@example.com", label: "Email" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
} as const;
