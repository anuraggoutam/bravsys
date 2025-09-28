import { FiClock, FiTag } from 'react-icons/fi';
import Link from 'next/link';
import type { Blog } from '@/data/blogs';
import Image from 'next/image';
interface BlogCardProps {
  blog: Blog;
}
//  blog
export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="bg-white/5 rounded-2xl  shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2 mx-6 sm:mx-4 ">
      <div className="relative  overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-900">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={blog.author.avatar}
            alt={blog.author.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-medium text-gray-100">
              {blog.author.name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{blog.date}</span>
              <span>•</span>
              <div className="flex items-center">
                <FiClock size={14} className="mr-1" />
                {blog.readTime}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-200 mb-2 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-gray-300 mb-4 line-clamp-2">{blog.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <FiTag size={14} className="mr-1" />
            {blog.category}
          </div>
          <Link
            href={`/blog/${blog.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export { BlogCard };
