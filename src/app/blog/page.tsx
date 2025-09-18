import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Sparkles,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Clock,
} from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { useBlog } from '@/hooks/useBlog';
import { blogPosts } from '@/data/blogData';

const Blog = () => {
  const { filterState, paginatedPosts, totalPages, updateFilter } = useBlog(6);
  const [isVisible, setIsVisible] = useState(false);

  const featuredPost = blogPosts.find((post) => post.featured);
  const totalPosts = blogPosts.length;
  const totalReads = blogPosts.reduce(
    (acc, _) => acc + Math.floor(Math.random() * 1000) + 100,
    0
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Elegant Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-50 backdrop-blur-xs border border-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-xs">
              <BookOpen size={16} className="mr-2" />
              Expert Insights & Industry Analysis
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Insights &
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 italic font-light">
                Intelligence
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Discover cutting-edge insights, expert analysis, and actionable
              strategies that drive digital transformation and business
              excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {totalPosts}+
                </div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                  Articles
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {Math.floor(totalReads / 1000)}K+
                </div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                  Readers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  7
                </div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                  Categories
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <BookOpen size={20} className="mr-2" />
                Explore Articles
              </Button>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg transition-all duration-300"
              >
                <Users size={20} className="mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredPost && (
        <section className="py-16 bg-linear-to-br from-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 text-gray-900 mb-8 justify-center">
                <TrendingUp size={24} />
                <h2 className="text-2xl font-bold">Featured Article</h2>
              </div>

              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover rounded-xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg font-medium">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <div className="text-gray-900">
                    <Badge
                      variant="secondary"
                      className="mb-4 bg-blue-100 text-blue-700 border-blue-200"
                    >
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full ring-2 ring-blue-200"
                        />
                        <span className="text-gray-700">
                          {featuredPost.author.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock size={14} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Elegant Search and Filters */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <BlogFilters
            filterState={filterState}
            onFilterChange={updateFilter}
          />
        </div>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filterState.activeCategory !== 'All'
                      ? `${filterState.activeCategory} Articles`
                      : 'All Articles'}
                  </h2>
                  <p className="text-gray-600">
                    {paginatedPosts.length} of{' '}
                    {
                      blogPosts.filter(
                        (post) =>
                          filterState.activeCategory === 'All' ||
                          post.category === filterState.activeCategory
                      ).length
                    }{' '}
                    articles
                  </p>
                </div>

                {filterState.searchTerm && (
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200"
                  >
                    Search: "{filterState.searchTerm}"
                  </Badge>
                )}
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {paginatedPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {/* No Results */}
              {paginatedPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We couldn't find any articles matching your search criteria.
                    Try adjusting your filters or search terms.
                  </p>
                  <Button
                    onClick={() =>
                      updateFilter({ searchTerm: '', activeCategory: 'All' })
                    }
                    variant="outline"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Enhanced Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-16">
                  <Pagination>
                    <PaginationContent className="gap-2">
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (filterState.currentPage > 1) {
                              updateFilter({
                                currentPage: filterState.currentPage - 1,
                              });
                            }
                          }}
                          className={`${
                            filterState.currentPage === 1
                              ? 'opacity-50 pointer-events-none'
                              : 'hover:bg-blue-50 hover:text-blue-600'
                          } transition-all duration-200`}
                        />
                      </PaginationItem>

                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                updateFilter({ currentPage: page });
                              }}
                              isActive={filterState.currentPage === page}
                              className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (filterState.currentPage < totalPages) {
                              updateFilter({
                                currentPage: filterState.currentPage + 1,
                              });
                            }
                          }}
                          className={`${
                            filterState.currentPage === totalPages
                              ? 'opacity-50 pointer-events-none'
                              : 'hover:bg-blue-50 hover:text-blue-600'
                          } transition-all duration-200`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <BlogSidebar
              activeCategory={filterState.activeCategory}
              onCategoryChange={(category) =>
                updateFilter({ activeCategory: category })
              }
            />
          </div>
        </div>
      </section>

      {/* Elegant CTA Section */}
      <section className="py-20 bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-xs border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <ArrowRight size={16} className="mr-2" />
              Ready to Transform Your Business?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let's Turn These Insights Into
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 font-light italic">
                Real Results
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Our team of experts is ready to help you implement these
              strategies and accelerate your digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                asChild
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
