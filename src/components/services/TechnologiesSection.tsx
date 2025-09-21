
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const technologies = [
  {
    title: 'AI-Powered Web Applications',
    description:
      'Transform your web applications with intelligent automation, machine learning integration, and predictive analytics. We build custom AI models for recommendation engines, chatbots, content personalization, and automated decision-making systems that drive business value and enhance user experiences.',
    image: '/assets/AI-WEB.jpeg',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Complete end-to-end web solutions using modern frameworks like React, Next.js, Node.js, and Express. We build scalable, responsive applications with TypeScript, implement real-time features, and ensure optimal performance across all devices and platforms.',
    image: '/assets/FST.jpeg',
  },
  {
    title: 'Progressive Web Apps',
    description:
      'Create app-like experiences on the web with PWAs that work offline, load instantly, and provide native mobile functionality. Combine the best of web and mobile apps with push notifications, background sync, and seamless cross-platform performance.',
    image: '/assets/PWA.jpeg',
  },
  {
    title: 'Marketing Automation',
    description:
      'Streamline your digital marketing with intelligent automation tools. We implement omnichannel marketing workflows, lead nurturing systems, email automation, social media scheduling, and analytics dashboards that convert prospects into customers automatically.',
    image: '/assets/MRKT.jpeg',
  },
  {
    title: 'Cloud & DevOps Solutions',
    description:
      'Deploy and scale your applications with modern cloud infrastructure. We provide Docker containerization, CI/CD pipelines, server management, SSL configuration, and automated deployment workflows on platforms like AWS, Digital Ocean, and Azure.',
    image: '/assets/DevOps.jpeg',
  },
  {
    title: 'E-commerce & CMS Development',
    description:
      'Build powerful online stores and content management systems with seamless payment integration, inventory management, SEO optimization, and user-friendly admin panels. From simple business websites to complex multi-vendor platforms.',
    image: '/assets/ecom.jpeg',
  },
];

const TechnologiesSection = () => {
  return (
    <section className="py-24 bg-linear-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Cutting-Edge Technologies
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Technologies We Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies to build scalable, future-ready solutions that 
            keep your business ahead of the competition.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="technologies-swiper"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index} className='pb-10'>
              <div className="group bg-card/60 backdrop-blur-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-border/50 hover:border-primary/20 transition-all duration-500 h-full transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">
                    {tech.description}
                  </p>
                  {/* <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Learn more 
                    <ArrowRight size={14} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </div> */}
                </div>
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .technologies-swiper .swiper-pagination-bullet {
            background: hsl(var(--primary));
            opacity: 0.5;
          }
          .technologies-swiper .swiper-pagination-bullet-active {
            opacity: 1;
          }
          .technologies-swiper .swiper-button-next,
          .technologies-swiper .swiper-button-prev {
            color: hsl(var(--primary));
            background: hsl(var(--background));
            border-radius: 50%;
            width: 44px;
            height: 44px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border: 1px solid hsl(var(--border));
          }
          .technologies-swiper .swiper-button-next:hover,
          .technologies-swiper .swiper-button-prev:hover {
            background: hsl(var(--primary));
            color: hsl(var(--primary-foreground));
          }
        `}</style>
      </div>
    </section>
  );
};

export default TechnologiesSection;
