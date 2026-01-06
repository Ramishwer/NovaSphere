
import { ServiceItem, TeamMember, PortfolioProject } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Cloud Architecture',
    description: 'Scalable and secure cloud infrastructure designed for modern enterprises using AWS, Azure, and GCP.',
    icon: '☁️'
  },
  {
    id: '2',
    title: 'AI Integration',
    description: 'Transform your business processes with custom machine learning models and generative AI solutions.',
    icon: '🤖'
  },
  {
    id: '3',
    title: 'Product Strategy',
    description: 'Comprehensive roadmaps from ideation to launch, ensuring market fit and sustainable growth.',
    icon: '📈'
  },
  {
    id: '4',
    title: 'Digital Security',
    description: 'End-to-end cybersecurity audits and implementation to protect your most valuable assets.',
    icon: '🛡️'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'Former VP Engineering at top-tier tech firms with 15+ years of scaling digital products.',
    imageUrl: 'https://picsum.photos/seed/sarah/400/400'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'CTO',
    bio: 'Pioneer in distributed systems and cloud-native architecture.',
    imageUrl: 'https://picsum.photos/seed/marcus/400/400'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning UX designer focused on creating intuitive digital human experiences.',
    imageUrl: 'https://picsum.photos/seed/elena/400/400'
  }
];

export const PROJECTS: PortfolioProject[] = [
  { id: '1', title: 'Fintech Revolution', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/proj1/600/400' },
  { id: '2', title: 'Smart Logistics', category: 'Dashboard', imageUrl: 'https://picsum.photos/seed/proj2/600/400' },
  { id: '3', title: 'EcoTrack System', category: 'IoT Platform', imageUrl: 'https://picsum.photos/seed/proj3/600/400' },
  { id: '4', title: 'Media Streaming 2.0', category: 'Cloud Infrastructure', imageUrl: 'https://picsum.photos/seed/proj4/600/400' },
];
