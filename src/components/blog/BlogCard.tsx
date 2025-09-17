
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User, Clock, Eye, Heart, Bookmark } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [viewCount] = useState(Math.floor(Math.random() * 1000) + 100);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div 
      className="blog-card transform hover:-translate-y-2 hover:scale-105"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fade-in 0.6s ease-out forwards'
      }}
    >
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 backdrop-blur-xs text-gray-800 border-0 shadow-lg">
            {post.category}
          </Badge>
        </div>
        
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-linear-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg animate-pulse">
              ⭐ Featured
            </Badge>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-full backdrop-blur-xs transition-all duration-300 hover:scale-110 ${
              isBookmarked ? 'bg-blue-600 text-white' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
          </button>
          <button
            onClick={handleLike}
            className={`p-2 rounded-full backdrop-blur-xs transition-all duration-300 hover:scale-110 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart size={16} className={isLiked ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={12} />
                <span>{viewCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart size={12} />
                <span>{likeCount}</span>
              </div>
            </div>
          </div>
          
          <Link 
            to={`/blog/${post.id}`}
            className="text-xl font-bold text-gray-900 hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 leading-tight line-clamp-2"
          >
            {post.title}
          </Link>
        </CardHeader>
        
        <CardContent className="p-0">
          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 bg-gray-100 hover:bg-blue-50 text-xs text-gray-600 rounded-full transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="p-0 flex justify-between items-center border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full ring-2 ring-gray-100"
            />
            <div>
              <div className="font-medium text-sm text-gray-900">{post.author.name}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar size={10} />
                {post.date}
              </div>
            </div>
          </div>
          
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn"
          >
            Read More 
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </CardFooter>
      </div>
    </div>
  );
};

export default BlogCard;
