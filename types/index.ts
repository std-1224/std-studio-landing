export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}