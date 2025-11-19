'use client';
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
  const params = useParams<{ id: string | string[] }>();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const numericId = Number.parseInt(idParam ?? '', 10);
  const { getBlogPost, getRelatedPosts } = useBlog();
  const post = getBlogPost(Number.isFinite(numericId) ? numericId : NaN);
  const relatedPosts = getRelatedPosts(
    Number.isFinite(numericId) ? numericId : NaN,
    3
  );

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
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
          <Button
            variant="ghost"
            asChild
            className="text-gray-600 hover:text-gray-900"
          >
            <Link href="/blog">
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="pt-16 pb-9 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-7">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 text-base font-semibold px-5 py-2 rounded-full shadow-md transition-colors cursor-pointer">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-base font-bold px-5 py-2 rounded-full shadow-md animate-pulse">
                  ⭐ Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-[1.15] tracking-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-10 leading-relaxed font-light max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author & Meta Info */}
            <div className="flex flex-wrap items-center gap-7 pt-7 pb-5 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full ring-2 ring-blue-100 shadow"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {post.author.name}
                  </div>
                  <div className="text-base text-blue-700 font-light">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-base text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={18} />
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
            <div className="relative w-full h-72 md:h-96 lg:h-[30rem] rounded-3xl overflow-hidden shadow-2xl">
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
                      prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-9
                      prose-h2:text-3xl prose-h2:leading-tight prose-h2:mt-14 prose-h2:mb-7
                      prose-h3:text-2xl prose-h3:leading-tight prose-h3:mt-10 prose-h3:mb-5
                      prose-p:text-xl prose-p:leading-relaxed prose-p:text-gray-700 prose-p:mb-7
                      prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline transition-colors
                      prose-strong:text-gray-900 prose-strong:font-bold
                      prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-code:text-blue-600
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg
                      prose-ul:space-y-3 prose-ol:space-y-3
                      prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>

                {/* Tags Section */}
                <div className="mt-16 p-9 bg-gradient-to-br from-gray-50 to-gray-100/60 rounded-3xl border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-7">
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-5 py-2 text-base hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 font-semibold rounded-full transition-colors cursor-pointer shadow-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-16 p-9 bg-gradient-to-br from-gray-50 to-gray-100/60 rounded-3xl border border-gray-200 shadow-lg">
                  <div className="flex items-start gap-7">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={88}
                      height={88}
                      className="w-22 h-22 rounded-full ring-4 ring-blue-100 shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                        {post.author.name}
                      </h3>
                      <p className="text-blue-700 font-medium mb-2">
                        {post.author.role}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Passionate about creating exceptional digital
                        experiences and sharing knowledge with the design
                        community. With over 5 years of experience in web
                        development and UI/UX design, I love exploring new
                        technologies and best practices.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Heart size={16} className="text-red-500" />
                          <span className="text-base">1.2k followers</span>
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
                  <div className="bg-white p-7 rounded-3xl shadow-xl border border-gray-100">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-4">
                      Share this article
                    </h3>
                    <Button className="w-full bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 rounded-xl shadow-md transition-colors">
                      <Share2 size={18} className="mr-2" />
                      Share Article
                    </Button>
                  </div>
                  {/* Related Articles */}
                  <div className="bg-white p-7 rounded-3xl shadow-xl border border-gray-100">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-6">
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
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2 text-base leading-tight">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock size={14} />
                                {relatedPost.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  Newsletter Signup
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-7 rounded-3xl border border-blue-100 shadow-xl">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      Get more insights
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Subscribe to our newsletter for the latest articles and
                      insights.
                    </p>
                    <Button className="w-full bg-blue-700 hover:bg-blue-900 text-white text-base py-3 rounded-xl font-extrabold shadow transition-colors">
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
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-7 shadow">
              <BookOpen size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-7 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed font-medium">
              Let our expert team help you implement these strategies and take
              your business to the next level with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-200 font-extrabold px-10 py-5 text-xl rounded-xl shadow-md"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/10 font-extrabold px-10 py-5 text-xl rounded-xl shadow-md"
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
