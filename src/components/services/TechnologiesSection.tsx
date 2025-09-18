
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const technologies = [
  {
    title: 'Location Services',
    description: 'Mobile technology has transformed how you connect with consumers. Use location-based technologies like iBeacons, geofencing, and Bluetooth to engage them anytime, anywhere. Bridge the digital and physical worlds with BLE Beacons, capturing their attention when it matters most. Deliver a top-tier experience with advanced location detection, providing targeted content and insights into consumer behavior and intentions.',
    image: '/lovable-uploads/098ddfb0-5021-4ab0-a05c-0e0e823e0ad5.png'
  },
  {
    title: 'Gamification',
    description: 'Engage your customers and drive behavior with gamification tactics. We help you use gamification platforms to boost loyalty and reward customers for interacting with your brand. Leading companies use gamification to enhance loyalty programs and increase engagement. Let us help you integrate these tactics into your new or existing technology solutions to strengthen your brand.',
    image: '/lovable-uploads/4db42747-45ee-4538-81db-fc44e19b088d.png'
  },
  {
    title: 'Augmented Reality',
    description: 'Use augmented reality on smartphones or wearables like smart glasses to enhance real-world perception and create interactive experiences. Consumers can scan objects and bring them to life digitally, activating products, displays, and ads with their own devices. Just point, shoot, and watch as a wealth of content appears on their screens from multiple data sources.',
    image: '/lovable-uploads/ecc5aee1-ddcf-4c1a-a63c-e429ee93a9c0.png'
  },
  {
    title: 'Machine Learning',
    description: 'Transform your business with intelligent automation and predictive analytics. Our machine learning solutions help you make data-driven decisions, automate complex processes, and unlock insights from your data. From recommendation engines to fraud detection, we build custom ML models that drive business value.',
    image: '/lovable-uploads/77bcef79-79c7-400e-8893-48a86e18f5bb.png'
  },
  {
    title: 'Cloud Computing',
    description: 'Leverage the power of cloud infrastructure to scale your applications and reduce costs. We help you migrate to the cloud, optimize your architecture, and implement best practices for security and performance. Our cloud solutions are designed to grow with your business.',
    image: '/lovable-uploads/098ddfb0-5021-4ab0-a05c-0e0e823e0ad5.png'
  },
  {
    title: 'Mobile Development',
    description: 'Create engaging mobile experiences that delight your users. Our mobile development team builds native and cross-platform applications that are fast, secure, and user-friendly. From iOS to Android, we cover all major platforms.',
    image: '/lovable-uploads/4db42747-45ee-4538-81db-fc44e19b088d.png'
  }
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
            <SwiperSlide key={index}>
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
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Learn more 
                    <ArrowRight size={14} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
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
