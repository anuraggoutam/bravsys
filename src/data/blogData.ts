
import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Web Design Trends to Watch in 2025',
    excerpt: 'Explore the latest trends in web design that are shaping the digital landscape this year.',
    content: `
      <h2>Introduction</h2>
      <p>The world of web design is constantly evolving, and 2025 brings exciting new trends that are reshaping how we think about digital experiences. From AI-powered personalization to immersive interactive elements, these trends are setting the stage for the future of web design.</p>
      
      <h2>1. AI-Driven Personalization</h2>
      <p>Artificial intelligence is revolutionizing how websites adapt to individual users. Dynamic content, personalized layouts, and intelligent recommendations are becoming the norm, creating unique experiences for each visitor.</p>
      
      <h2>2. Immersive 3D Elements</h2>
      <p>Three-dimensional graphics and animations are no longer just for gaming. Modern websites are incorporating 3D elements to create depth and engagement, making digital experiences more tactile and memorable.</p>
      
      <h2>3. Micro-Interactions and Animations</h2>
      <p>Subtle animations and micro-interactions guide users through interfaces, providing feedback and creating delightful moments that enhance the overall user experience.</p>
      
      <h2>4. Sustainable Design Practices</h2>
      <p>Green web design is gaining momentum, with developers focusing on optimizing performance, reducing energy consumption, and creating more sustainable digital experiences.</p>
      
      <h2>Conclusion</h2>
      <p>These trends represent just the beginning of what's possible in modern web design. As technology continues to advance, we can expect even more innovative approaches to creating engaging digital experiences.</p>
    `,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000',
    date: 'May 15, 2025',
    author: {
      name: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      role: 'Design Director'
    },
    category: 'Design',
    tags: ['Web Design', 'Trends', 'UX/UI'],
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    title: 'How to Improve Website Conversion Rates',
    excerpt: 'Learn proven strategies to optimize your website and increase conversion rates significantly.',
    content: `
      <h2>Understanding Conversion Optimization</h2>
      <p>Conversion rate optimization (CRO) is the systematic process of increasing the percentage of website visitors who complete a desired action. Whether it's making a purchase, signing up for a newsletter, or downloading a resource, optimizing for conversions is crucial for business success.</p>
      
      <h2>Key Strategies for Better Conversions</h2>
      
      <h3>1. Optimize Your Headlines</h3>
      <p>Your headline is often the first thing visitors see. Make it compelling, clear, and benefit-focused. A strong headline can increase conversions by up to 30%.</p>
      
      <h3>2. Simplify Your Forms</h3>
      <p>Long, complicated forms are conversion killers. Ask only for essential information and use smart defaults to reduce friction in the signup process.</p>
      
      <h3>3. Use Social Proof</h3>
      <p>Testimonials, reviews, and case studies build trust and credibility. Display them prominently to show potential customers that others have had positive experiences.</p>
      
      <h3>4. Create Urgency</h3>
      <p>Limited-time offers and scarcity tactics can motivate visitors to take action sooner rather than later. Use them ethically and authentically.</p>
      
      <h2>Testing and Measuring Success</h2>
      <p>Always test your changes and measure their impact. A/B testing different versions of your pages can reveal what resonates best with your audience and drives the highest conversions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000',
    date: 'May 8, 2025',
    author: {
      name: 'Jessica Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150',
      role: 'Marketing Specialist'
    },
    category: 'Marketing',
    tags: ['Conversion', 'Optimization', 'Analytics'],
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'The Importance of Mobile-First Design',
    excerpt: 'Why designing for mobile devices first leads to better user experiences across all platforms.',
    content: `
      <h2>The Mobile Revolution</h2>
      <p>With over 60% of web traffic coming from mobile devices, mobile-first design isn't just a trend—it's a necessity. This approach prioritizes the mobile experience and then scales up to larger screens.</p>
      
      <h2>Benefits of Mobile-First Approach</h2>
      
      <h3>1. Better Performance</h3>
      <p>Mobile-first design forces you to prioritize content and optimize for performance, resulting in faster loading times across all devices.</p>
      
      <h3>2. Improved User Experience</h3>
      <p>When you design for the most constrained environment first, you create more focused, user-friendly interfaces that work well everywhere.</p>
      
      <h3>3. SEO Advantages</h3>
      <p>Google's mobile-first indexing means that mobile-optimized sites rank better in search results, driving more organic traffic.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Start with content hierarchy, focus on touch-friendly interfaces, and use progressive enhancement to add features for larger screens. Remember, mobile-first doesn't mean mobile-only—it means mobile-prioritized.</p>
    `,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2000',
    date: 'May 1, 2025',
    author: {
      name: 'Michael Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      role: 'Senior Developer'
    },
    category: 'Development',
    tags: ['Mobile', 'Responsive', 'UX'],
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Essential SEO Strategies for 2025',
    excerpt: 'Stay ahead of the competition with these essential SEO tactics for the coming year.',
    content: `
      <h2>SEO in 2025: What's Changed</h2>
      <p>Search engine optimization continues to evolve, with AI, user experience, and content quality becoming even more important factors in ranking algorithms.</p>
      
      <h2>Core SEO Strategies</h2>
      
      <h3>1. E-A-T: Expertise, Authoritativeness, Trustworthiness</h3>
      <p>Google places increasing emphasis on content quality and author credentials. Establish thought leadership and cite credible sources to build authority.</p>
      
      <h3>2. Core Web Vitals</h3>
      <p>Page experience metrics like loading speed, interactivity, and visual stability directly impact rankings. Optimize for these technical factors.</p>
      
      <h3>3. Semantic Search Optimization</h3>
      <p>Focus on topic clusters and semantic keywords rather than just exact-match keywords. Create comprehensive content that answers user intent.</p>
      
      <h2>Technical SEO Essentials</h2>
      <p>Ensure your site is crawlable, has proper schema markup, and provides excellent user experience across all devices. Technical foundation is crucial for SEO success.</p>
    `,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2000',
    date: 'April 24, 2025',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      role: 'SEO Specialist'
    },
    category: 'SEO',
    tags: ['Search', 'Organic Traffic', 'Keywords'],
    readTime: '7 min read'
  }
];

export const categories = ['All', 'Design', 'Development', 'Marketing', 'SEO', 'Technology', 'E-commerce'];
