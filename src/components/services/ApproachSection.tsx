
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Target, Zap, Monitor } from 'lucide-react';

const approachSteps = [
  {
    icon: Search,
    title: 'Research',
    description: 'We research trends and best practices in your industry to keep you ahead of the market and lead with innovative consumer platforms.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Target,
    title: 'Strategy',
    description: 'We collaborate to understand your goals and needs, developing the right technology strategy to optimize creativity, drive innovation, and maximize ROI.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Execution',
    description: 'Our agile approach and lean structure let us act swiftly and efficiently to execute programs, build solutions, and enable rapid market validation.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Monitor,
    title: 'Deployment',
    description: 'We deliver a full-featured software solution and innovation stack, using industry best practices and a microservices-based architecture.',
    color: 'from-teal-500 to-teal-600'
  }
];

const ApproachSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our goal is simple: help our partners and clients create measurable value by leveraging our business acumen, technical expertise, and our diverse skillsets.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
              Contact Us
            </Button>
          </div>
          
          <div className="space-y-8">
            {approachSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-r ${step.color} text-white shrink-0`}>
                  <step.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
