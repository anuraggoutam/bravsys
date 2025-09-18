
import { useState, useMemo, useEffect } from 'react';
import { BlogPost, BlogFilterState } from '@/types/blog';
import { blogPosts } from '@/data/blogData';

export const useBlog = (postsPerPage: number = 6) => {
  const [filterState, setFilterState] = useState<BlogFilterState>({
    activeCategory: 'All',
    searchTerm: '',
    currentPage: 1
  });

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = filterState.activeCategory === 'All' || post.category === filterState.activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(filterState.searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(filterState.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filterState.activeCategory, filterState.searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (filterState.currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setFilterState(prev => ({ ...prev, currentPage: 1 }));
  }, [filterState.activeCategory, filterState.searchTerm]);

  const updateFilter = (updates: Partial<BlogFilterState>) => {
    setFilterState(prev => ({ ...prev, ...updates }));
  };

  const getBlogPost = (id: number): BlogPost | undefined => {
    return blogPosts.find(post => post.id === id);
  };

  const getRelatedPosts = (currentPostId: number, limit: number = 3): BlogPost[] => {
    return blogPosts.filter(post => post.id !== currentPostId).slice(0, limit);
  };

  return {
    filterState,
    filteredPosts,
    paginatedPosts,
    totalPages,
    updateFilter,
    getBlogPost,
    getRelatedPosts
  };
};
