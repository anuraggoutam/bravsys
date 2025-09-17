
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, Sparkles } from 'lucide-react';
import { BlogFilterState } from '@/types/blog';
import { categories, blogPosts } from '@/data/blogData';

interface BlogFiltersProps {
  filterState: BlogFilterState;
  onFilterChange: (updates: Partial<BlogFilterState>) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({ filterState, onFilterChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).slice(0, 8);

  const popularSearches = ['Web Design', 'SEO', 'Mobile', 'AI', 'UX Design'];

  useEffect(() => {
    if (filterState.searchTerm.length > 1) {
      const suggestions = blogPosts
        .filter(post => 
          post.title.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(filterState.searchTerm.toLowerCase()))
        )
        .slice(0, 5)
        .map(post => post.title);
      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [filterState.searchTerm]);

  const handleSuggestionClick = (suggestion: string) => {
    onFilterChange({ searchTerm: suggestion });
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    onFilterChange({ searchTerm: '' });
    setShowSuggestions(false);
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Search */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input 
            type="text"
            placeholder="Search articles, topics, or keywords..."
            className="pl-12 pr-12 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 bg-white/80 backdrop-blur-xs shadow-lg"
            value={filterState.searchTerm}
            onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
            onFocus={() => filterState.searchTerm.length > 1 && setShowSuggestions(true)}
          />
          {filterState.searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={16} className="text-gray-400" />
            </button>
          )}
        </div>
        
        {/* Search Suggestions */}
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Suggestions</h4>
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                >
                  <Search size={14} className="inline mr-2 text-gray-400" />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-blue-500" />
          <span className="text-sm font-medium text-gray-700">Categories:</span>
        </div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onFilterChange({ activeCategory: category })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              filterState.activeCategory === category
                ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/80 backdrop-blur-xs text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Popular Tags */}
      <div className="tag-cloud">
        <div className="flex items-center gap-2 mb-3">
          <Filter size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Popular Tags:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <span 
              key={tag}
              className="tag hover:shadow-md"
              onClick={() => onFilterChange({ searchTerm: tag })}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Searches */}
      {!filterState.searchTerm && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-gray-700">Quick Searches:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map(search => (
              <Badge 
                key={search}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-100 transition-colors"
                onClick={() => onFilterChange({ searchTerm: search })}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
