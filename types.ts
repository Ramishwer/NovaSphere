
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
