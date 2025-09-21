"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  Eye,
  Heart,
} from 'lucide-react';
import { useBlog } from '@/hooks/useBlog';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const BlogPost = () => {
  const { id } = useParams();
  const { getBlogPost, getRelatedPosts } = useBlog();
  const post = getBlogPost(parseInt(id || ''));
  const relatedPosts = getRelatedPosts(parseInt(id || ''), 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/blog">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/blog">
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="pt-12 pb-8 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm font-medium px-3 py-1">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium px-3 py-1">
                  ⭐ Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author & Meta Info */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full ring-2 ring-gray-100"
                />
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-600">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>2.4k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-3">
                <div className="max-w-none">
                  {/* Content Wrapper with Better Typography */}
                  <div 
                    className="prose prose-xl prose-gray max-w-none
                      prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                      prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-8
                      prose-h2:text-3xl prose-h2:leading-tight prose-h2:mt-12 prose-h2:mb-6
                      prose-h3:text-2xl prose-h3:leading-tight prose-h3:mt-10 prose-h3:mb-4
                      prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-700 prose-p:mb-6
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                      prose-ul:space-y-2 prose-ol:space-y-2
                      prose-li:text-gray-700 prose-li:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>

                {/* Tags Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Topics</h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-6">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full ring-4 ring-white shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {post.author.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-4">{post.author.role}</p>
                      <p className="text-gray-700 leading-relaxed">
                        Passionate about creating exceptional digital experiences and sharing knowledge 
                        with the design community. With over 5 years of experience in web development 
                        and UI/UX design, I love exploring new technologies and best practices.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Heart size={14} className="text-red-500" />
                          <span>1.2k followers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Share Section */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Share this article
                    </h3>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                      <Share2 size={18} className="mr-2" />
                      Share Article
                    </Button>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">
                      Related Articles
                    </h3>
                    <div className="space-y-6">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <div className="flex gap-4">
                            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 text-sm leading-tight">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock size={12} />
                                {relatedPost.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Get more insights
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Subscribe to our newsletter for the latest articles and insights.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let our expert team help you implement these strategies and take
              your business to the next level with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              >
                <Link href="/blog">Explore More Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
