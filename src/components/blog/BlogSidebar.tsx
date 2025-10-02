'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Tag,
  Calendar,
  TrendingUp,
  Users,
  Star,
  ChevronRight,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { categories, blogPosts } from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';

interface BlogSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const tags = [
    'Web Design',
    'UX/UI',
    'Mobile',
    'Responsive',
    'SEO',
    'Analytics',
    'E-commerce',
    'AI',
  ];

  // Get category stats
  const categoryStats = categories
    .filter((cat) => cat !== 'All')
    .map((category) => ({
      name: category,
      count: blogPosts.filter((post) => post.category === category).length,
      trending: Math.random() > 0.7,
    }));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="space-y-8">
      {/* Trending Topics */}
      <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Trending Topics</h3>
        </div>
        <div className="space-y-3">
          {categoryStats
            .filter((cat) => cat.trending)
            .slice(0, 3)
            .map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between"
              >
                <button
                  onClick={() => onCategoryChange(category.name)}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
                  <span className="font-medium">{category.name}</span>
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
                  {category.count}
                </Badge>
              </div>
            ))}
        </div>
      </div>

      {/* Categories with Enhanced UI */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Categories</h3>
        </div>
        <ul className="space-y-3">
          {categoryStats.map((category) => (
            <li key={category.name} className="group">
              <button
                onClick={() => onCategoryChange(category.name)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'hover:bg-gray-50 text-gray-700 hover:text-blue-600'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm ${
                      activeCategory === category.name
                        ? 'text-blue-100'
                        : 'text-gray-400'
                    }`}
                  >
                    {category.count}
                  </span>
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Enhanced Popular Tags */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-linear-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Tag size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="inline-flex items-center px-4 py-2 bg-linear-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Tag size={12} className="mr-2" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Posts with Enhanced Design */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <MessageCircle size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Recent Posts</h3>
        </div>
        <div className="space-y-4">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div
              key={post.id}
              className="group hover:bg-gray-50 p-3 rounded-xl transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/blog/${post.id}`}
                    className="font-medium text-gray-900 hover:text-blue-600 transition-colors text-sm line-clamp-2 mb-2 block"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center text-xs text-gray-500 gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={10} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={10} />
                      <span>{Math.floor(Math.random() * 100) + 20} reads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-4 block text-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          View All Posts →
        </Link>
      </div>

      {/* Enhanced Newsletter */}
      {/* <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Star size={24} className="text-yellow-300 animate-pulse" />
            <h3 className="text-xl font-bold">Join Our Community</h3>
          </div>

          {!isSubscribed ? (
            <>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Get exclusive insights, early access to new articles, and join
                10,000+ professionals staying ahead of the curve.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Subscribe Now
                </Button>
              </form>
              <p className="text-xs text-blue-200 mt-3">
                ✨ No spam, unsubscribe anytime
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Welcome to the community!
              </h4>
              <p className="text-blue-100">
                Check your email for a confirmation link and exclusive content.
              </p>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default BlogSidebar;
