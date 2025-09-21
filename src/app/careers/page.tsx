"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Heart,
  Trophy,
  Target,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Building2,
  Briefcase,
  GraduationCap,
  Globe,
  Coffee,
  Zap,
  Shield,
  Plane,
} from 'lucide-react';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120k - $180k',
    description:
      'Lead the development of scalable web applications using React, Node.js, and cloud technologies.',
    requirements: [
      'React/TypeScript expertise',
      'Node.js backend experience',
      'AWS/Cloud platforms',
      'Team leadership skills',
    ],
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    location: 'San Francisco / Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$140k - $200k',
    description:
      'Build and deploy machine learning models to solve complex business problems.',
    requirements: [
      'Python/TensorFlow',
      'ML algorithms',
      'Data pipeline design',
      'Model deployment',
    ],
  },
  {
    id: 3,
    title: 'Product Designer',
    department: 'Design',
    location: 'Los Angeles / Remote',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$100k - $140k',
    description:
      'Create intuitive user experiences and design systems for our digital products.',
    requirements: [
      'Figma/Design tools',
      'UX research',
      'Design systems',
      'Prototyping',
    ],
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$110k - $160k',
    description:
      'Build and maintain robust CI/CD pipelines and cloud infrastructure.',
    requirements: [
      'AWS/GCP/Azure',
      'Kubernetes/Docker',
      'CI/CD pipelines',
      'Infrastructure as Code',
    ],
  },
  {
    id: 5,
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Boston / Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90k - $130k + Commission',
    description:
      'Drive growth by building relationships with enterprise clients and partners.',
    requirements: [
      'B2B sales experience',
      'Client relationship management',
      'Strategic planning',
      'Communication skills',
    ],
  },
  {
    id: 6,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$80k - $110k',
    description:
      'Analyze complex datasets to drive business insights and strategic decisions.',
    requirements: [
      'SQL/Python',
      'Data visualization',
      'Statistical analysis',
      'Business intelligence tools',
    ],
  },
];

const companyValues = [
  {
    icon: Users,
    title: 'Collaborative Excellence',
    description:
      'We believe great products come from great teams working together towards shared goals.',
  },
  {
    icon: Heart,
    title: 'Customer-Centric',
    description:
      "Every decision we make starts with understanding and serving our clients' needs.",
  },
  {
    icon: Trophy,
    title: 'Pursuit of Quality',
    description:
      'We set high standards and take pride in delivering exceptional work that exceeds expectations.',
  },
  {
    icon: Target,
    title: 'Innovation First',
    description:
      'We embrace new technologies and approaches to solve complex challenges creatively.',
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description:
      'Market-leading salaries, equity packages, and performance bonuses.',
  },
  {
    icon: Shield,
    title: 'Comprehensive Benefits',
    description:
      'Health, dental, vision insurance, and 401(k) with company matching.',
  },
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and unlimited PTO.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description:
      'Annual learning budget, conference attendance, and skill development programs.',
  },
  {
    icon: Plane,
    title: 'Team Retreats',
    description: 'Annual company retreats and quarterly team building events.',
  },
  {
    icon: Zap,
    title: 'Latest Technology',
    description:
      'Top-tier equipment and access to cutting-edge tools and software.',
  },
];

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    'All',
    ...Array.from(new Set(jobOpenings.map((job) => job.department))),
  ];
  const filteredJobs =
    selectedDepartment === 'All'
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-linear-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -top-10 left-1/3 w-64 h-64 bg-linear-to-br from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-xs border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-xs">
              <Building2 size={16} className="mr-2" />
              Join Our Mission
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Build the Future
              <span className="block gradient-text italic font-light">
                With Us
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join a team of passionate professionals creating innovative
              solutions that transform businesses and shape the digital
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <Briefcase size={20} className="mr-2" />
                View Open Positions
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg"
              >
                <Globe size={20} className="mr-2" />
                Learn About Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-linear-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                The principles that guide our work and shape our culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <Card
                  key={index}
                  className="service-card group border-white/20 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-500 ${
                        index === 0
                          ? 'bg-linear-to-br from-blue-500 to-blue-600'
                          : index === 1
                          ? 'bg-linear-to-br from-purple-500 to-purple-600'
                          : index === 2
                          ? 'bg-linear-to-br from-indigo-500 to-indigo-600'
                          : 'bg-linear-to-br from-teal-500 to-cyan-500'
                      }`}
                    >
                      <value.icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-80 h-80 bg-linear-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-8">
                Discover opportunities to make an impact with cutting-edge
                projects
              </p>

              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={
                      selectedDepartment === dept ? 'default' : 'outline-solid'
                    }
                    onClick={() => setSelectedDepartment(dept)}
                    className={
                      selectedDepartment === dept
                        ? 'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                        : 'border-blue-300 text-blue-700 hover:bg-blue-50 hover:shadow-md'
                    }
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="service-card group border-white/20 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge
                          variant="outline"
                          className={`mb-2 ${
                            job.department === 'Engineering'
                              ? 'border-blue-300 text-blue-700 bg-blue-50'
                              : job.department === 'AI & Data'
                              ? 'border-purple-300 text-purple-700 bg-purple-50'
                              : job.department === 'Design'
                              ? 'border-pink-300 text-pink-700 bg-pink-50'
                              : job.department === 'Infrastructure'
                              ? 'border-teal-300 text-teal-700 bg-teal-50'
                              : job.department === 'Sales'
                              ? 'border-green-300 text-green-700 bg-green-50'
                              : 'border-indigo-300 text-indigo-700 bg-indigo-50'
                          }`}
                        >
                          {job.department}
                        </Badge>
                        <CardTitle className="text-xl text-gray-900 mb-2">
                          {job.title}
                        </CardTitle>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap size={14} />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={14} />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </CardDescription>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      Apply Now
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-linear-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Join Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Comprehensive benefits and perks designed to support your
                success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 ${
                      index === 0
                        ? 'bg-linear-to-br from-green-500 to-emerald-500'
                        : index === 1
                        ? 'bg-linear-to-br from-blue-500 to-cyan-500'
                        : index === 2
                        ? 'bg-linear-to-br from-purple-500 to-violet-500'
                        : index === 3
                        ? 'bg-linear-to-br from-orange-500 to-amber-500'
                        : index === 4
                        ? 'bg-linear-to-br from-pink-500 to-rose-500'
                        : 'bg-linear-to-br from-indigo-500 to-blue-500'
                    }`}
                  >
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-xs border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <ArrowRight size={16} className="mr-2" />
              Ready to Make an Impact?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don't See the Perfect Role?
              <span className="block bg-linear-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-light italic">
                Let's Talk Anyway
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              We're always looking for exceptional talent. Send us your resume
              and tell us how you'd like to contribute to our mission.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                asChild
                className="bg-white text-gray-900 hover:bg-blue-50 px-8 py-4 text-lg shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-300 text-blue-300 hover:bg-blue-900/50 px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/about-us">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
