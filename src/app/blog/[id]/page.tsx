import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
} from 'lucide-react';
import { useBlog } from '@/hooks/useBlog';

const BlogPost = () => {
  const { id } = useParams();
  const { getBlogPost, getRelatedPosts } = useBlog();
  const post = getBlogPost(parseInt(id || ''));
  const relatedPosts = getRelatedPosts(parseInt(id || ''), 3);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {post.author.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{post.author.role}</p>
                      <p className="text-sm text-gray-600">
                        Passionate about creating exceptional digital
                        experiences and sharing knowledge with the design
                        community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Share */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">
                      Share Article
                    </h3>
                    <Button className="w-full" variant="outline">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div>
                              <h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {relatedPost.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <BookOpen size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-blue-100 mb-8">
              Let our expert team help you implement these strategies and take
              your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link to="/blog">More Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
