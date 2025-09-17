
export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: Author;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

export interface BlogFilterState {
  activeCategory: string;
  searchTerm: string;
  currentPage: number;
}
