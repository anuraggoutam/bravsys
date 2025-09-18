import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, User, TrendingUp } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import Link from 'next/link';

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp size={16} className="mr-2" />
            Latest Insights
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Insights & Industry <span className="gradient-text">Analysis</span>
          </h2>
          <p className="text-xl text-gray-600">
            Stay ahead of the curve with our latest articles, industry insights, and expert analysis on technology and digital transformation.
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-4 leading-tight"
                  >
                    {featuredPost.title}
                  </Link>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author.name}</div>
                        <div className="text-sm text-gray-500">{featuredPost.author.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map(post => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-700 backdrop-blur-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight group-hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-xs text-gray-500">{post.author.role}</div>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors group/link"
                >
                  Read More 
                  <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Industry Insights</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, industry reports, and expert insights delivered directly to your inbox. Join over 5,000 technology professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button asChild size="lg" className="gradient-bg hover:opacity-90 transition-opacity px-8 py-4 text-lg">
            <Link href="/blog">
              Explore All Articles
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
