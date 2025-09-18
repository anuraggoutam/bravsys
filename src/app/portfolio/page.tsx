'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation();
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              ref={heroRef}
              className={`transform transition-all duration-1000 ${
                heroVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-0'
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Products
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
                Helping customers of all sizes
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Let Diamond Casino drive your digital transformation, whether
                modernizing legacy systems or creating new platforms.
              </p>
            </div>

            {/* Right Image */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                heroVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800"
                  alt="Casino Experience"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            ref={productsRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transform transition-all duration-1000 ${
              productsVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Diamond Casino Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
                  alt="Diamond Casino"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Diamond Casino
                </h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Unlock the Full Potential of Player Engagement
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Diamond Casino provides casinos with a real-time view of every
                  player interaction. From loyalty program participation to
                  on-floor activity, Diamond Casino consolidates all player data
                  into a single, easy-to-use dashboard. Gain deep insights into
                  player preferences, behaviors, and lifetime value, enabling
                  personalized offers and promotions that enhance loyalty and
                  engagement.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Casino360.ai Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800"
                  alt="Casino360.ai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Casino360.ai
                </h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Transforming Gaming with AI-Driven Solutions
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Casino360.ai, we revolutionize how businesses manage their
                  gaming, distribution, and retail operations. By leveraging
                  cutting-edge AI technology, we tackle complex challenges in
                  the gaming industry. Our platform streamlines operations,
                  automates intelligent processes, and delivers real-time
                  analytics that boost performance.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Your Casino Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              ref={whyUsRef}
              className={`transform transition-all duration-1000 ${
                whyUsVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
                Elevate Your Casino Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Diamond Casino is the trusted partner for casinos and gaming
                tech companies, offering cutting-edge custom gaming solutions.
                With 15+ years of experience, our global teams deliver
                innovative software and hardware that scale with your needs.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Us
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With a proven track record of delivering custom solutions for
                  Fortune 500 companies globally, Diamond Casino stands as a
                  leader in the gaming industry, offering unparalleled expertise
                  and innovation.
                </p>
              </div>

              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg">
                Partner with us today
              </Button>
            </div>

            {/* Right Image */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                whyUsVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800"
                  alt="Casino Gaming"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            ref={featuresRef}
            className={`text-center mb-16 transform transition-all duration-1000 ${
              featuresVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to Scale? Explore How Diamond Casino Can Drive Your Casino's
              Growth
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transform transition-all duration-1000 delay-200 ${
              featuresVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Solutions We Offer */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Solutions We Offer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From mobile apps and sports betting platforms to AI-driven
                  analytics, Diamond Casino transforms your casino operations.
                  Our tailored solutions modernize your systems and enhance
                  player loyalty with real-time data insights.
                </p>
              </div>
            </div>

            {/* Gaming Technology */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
                  alt="Gaming Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Gaming Technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience cutting-edge gaming solutions with our advanced
                  slot machines, live dealer platforms, and immersive virtual
                  reality experiences that keep players engaged and coming back
                  for more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Casino CRM Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What is Casino CRM?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our goal is simple: help our partners and clients create
                measurable value by leveraging our business acumen, technical
                expertise, and diverse skill sets.
              </p>

              {/* Tabs */}
              <div className="flex space-x-4 mb-8">
                <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg">
                  Key Features
                </Button>
                <Button variant="outline" className="px-6 py-3 rounded-lg">
                  Benefits
                </Button>
              </div>

              {/* Features List */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    360-Degree Player View
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gain a complete understanding of each player by
                    consolidating data from multiple sources. This includes
                    tracking game preferences, spending patterns, and
                    interaction history, allowing for highly personalized
                    marketing and service.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Automated Marketing Campaigns
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Automate your marketing efforts with targeted campaigns
                    based on player behavior and preferences. This ensures that
                    players receive relevant promotions, enhancing their overall
                    experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Enhanced Customer Service
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A CRM system centralizes all customer interactions, making
                    it easier to respond to inquiries, resolve issues promptly,
                    and provide a seamless customer service experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Advanced Analytics and Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Utilize advanced analytics to gain insights into player
                    behavior, campaign performance, and operational efficiency.
                    This data-driven approach helps in making informed
                    decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:sticky lg:top-8">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
                alt="Casino CRM Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas to be covered Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Key Questions to Consider
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our goal is simple: help our partners and clients create
                measurable value by leveraging our business acumen, technical
                expertise, and diverse skill sets.
              </p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium">
                Learn More
              </Button>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
                alt="Casino Gaming Machines"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Let's work together Section */}
      <section
        ref={ctaRef}
        className={`py-20 bg-gray-50 transform transition-all duration-1000 ${
          ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's work together
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Diamond Casino, we share a unified mindset, no matter where our
              team is located. We're driven by a passion for innovation, great
              ideas, and the execution needed to create exceptional experiences.
              One Mantra, Worldwide.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Company Name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Work Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-8">
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
