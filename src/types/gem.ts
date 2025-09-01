export interface Gem {
  id: string;
  name: string;
  description: string;
  category: 'royal-blue' | 'padparadscha' | 'yellow' | 'pink' | 'white' | 'star';
  price: string;
  weight?: string;
  origin?: string;
  certification?: string;
  image: {
    url: string;
    alt: string;
    sizes?: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
      card?: {
        url: string;
        width: number;
        height: number;
      };
      hero?: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  gallery?: Array<{
    image: {
      url: string;
      alt: string;
    };
    alt: string;
  }>;
  featured: boolean;
  inStock: boolean;
  specifications?: {
    cut?: string;
    clarity?: string;
    color?: string;
    treatment?: string;
  };
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface GemsResponse {
  docs: Gem[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}