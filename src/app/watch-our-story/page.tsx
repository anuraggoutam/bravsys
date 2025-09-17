import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Play, Users, Award, Globe, ArrowRight } from 'lucide-react';

const WatchOurStory = () => {
  const milestones = [
    {
      year: '2002',
      title: 'Founded with Vision',
      description:
        'Started as a small team with big dreams to revolutionize digital transformation.',
    },
    {
      year: '2008',
      title: 'First Fortune 100 Client',
      description:
        'Secured our first major enterprise client, marking our entry into large-scale transformations.',
    },
    {
      year: '2015',
      title: 'AI Innovation Lab',
      description:
        'Established our dedicated AI research division to stay ahead of emerging technologies.',
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description:
        'Expanded operations across 15 countries, serving clients on every continent.',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description:
        'Recognized as the leading AI and digital transformation partner for Fortune 100 companies.',
    },
  ];

  const achievements = [
    { icon: Users, number: '500+', label: 'Projects Delivered' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Award, number: '25+', label: 'Industry Awards' },
    { icon: Users, number: '100+', label: 'Expert Team Members' },
  ];

  return (
    <Layout>
      {/* Hero Section with Video */}
      <section className="relative min-h-screen py-20 bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">Our Journey</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Our Story of
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                  Innovation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                For over two decades, we've been at the forefront of digital
                transformation, helping businesses unlock their potential
                through innovative technology solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="relative">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="Company story video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-xs text-white border-2 border-white/30 w-20 h-20 rounded-full p-0">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the
              milestones that shaped our company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-4xl font-bold text-blue-600 mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-white border-4 border-blue-500 rounded-full relative z-10 shrink-0"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Meet the Visionaries Behind Our Success
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team of experts, innovators, and thought leaders work
                tirelessly to deliver cutting-edge solutions that transform
                businesses worldwide.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Meet Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                  alt="Team member"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=300"
                  alt="Team member"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
                  alt="Team member"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300"
                  alt="Team member"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let's collaborate to create the next chapter of your digital
            transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WatchOurStory;
