
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Short Reel Edit",
    category: "Story Style",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=1600&auto=format&fit=crop",
    description: "High-retention storytelling edit.",
    link: "https://youtube.com/shorts/29Ec3wca-lU?si=iFa_uDc2666PENBp"
  },
  {
    id: 2,
    title: "Sample Work",
    category: "High Pacing",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
    description: "Demonstrating fast cuts and dynamic transitions.",
    link: "https://youtube.com/shorts/uxgkIvJz4Jw?si=moho3cawFNWz9CKs"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Short-Form",
    description: "TikToks, Reels & Shorts designed for high retention. Hook-based cuts, fast transitions, and clean captions.",
    icon: "Smartphone"
  },
  {
    id: 2,
    title: "Long-Form",
    description: "YouTube storytelling, commentary, and documentaries. Focus on pacing, B-roll sequencing, and rhythm.",
    icon: "MonitorPlay"
  },
  {
    id: 3,
    title: "Magnetes Style",
    description: "Multi-layer parallax, Midjourney visuals, and heavy storytelling structure for immersive experiences.",
    icon: "Layers"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Logo animations, minimal title cards, and lower thirds to elevate the production value.",
    icon: "Zap"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nolan Glaze",
    role: "Content Creator (2M+ Followers)",
    quote: "Syed is one of the few editors who truly understands retention. His pacing is unmatched, and he consistently delivers high-quality edits that perform well across all platforms.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Digital Agency",
    role: "Creative Director",
    quote: "The Magnetes style edits were exactly what we needed. Complex visual storytelling made simple. Highly recommended for long-form content.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export const TOOLS = [
  { name: 'After Effects', icon: 'https://cdn-icons-png.flaticon.com/128/5611/5611014.png' },
  { name: 'CapCut', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.png' },
  { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968520.png' },
  { name: 'Midjourney', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/midjourney-color-icon.png' },
  { name: 'Notion', icon: 'https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png' },
  { name: 'Premiere Pro', icon: 'https://cdn-icons-png.flaticon.com/128/9814/9814226.png' }
];
