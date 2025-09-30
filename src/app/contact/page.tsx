'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const hp = String(formData.get('hp') || '').trim();

    if (!name || !email || !message) {
      toast.error('Please fill out name, email, and message.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          hp,
          message: subject ? `${subject}\n\n${message}` : message,
        }),
      });
      if (!res.ok) throw new Error('Failed to send');
      toast.success('Thanks! We will get back to you shortly.');
      form.reset();
    } catch (err) {
      toast.error('Could not send your message. Please try again later.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have a project in mind or questions about our services? We&apos;d
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-bg mx-auto flex items-center justify-center text-white mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and project quotes
              </p>
              <a
                href="mailto:info@bravsys.com"
                className="text-brand-purple font-medium"
              >
                info@bravsys.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-bg mx-auto flex items-center justify-center text-white mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Monday to Saturday 10am to 6pm</p>
              <a
                href="tel:+15551234567"
                className="text-brand-purple font-medium"
              >
                +91 9310430779
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-bg mx-auto flex items-center justify-center text-white mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                D-129B Street 14, West Vinod Nagar, Block D, Delhi 110092 India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple font-medium"
              >
                Get Directions
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and we&apos;ll get back to you as soon
                as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="hp"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, or questions..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="gradient-bg hover:opacity-90 transition-opacity w-full md:w-auto"
                >
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Office Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Office</h2>
              <p className="text-gray-600 mb-8">
                Visit us at our creative studio in the heart of the city.
              </p>

              {/* Map placeholder - in a real application, replace with actual Google Maps embed */}
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7457789493283!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1621535345288!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-brand-purple mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-600">
                      D-129B Street 14, West Vinod Nagar, Block D, Delhi 110092
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-brand-purple mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 10:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-brand-purple mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">info@bravsys.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-brand-purple mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9310430779</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about working with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">
                  What is your typical process for a new project?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our process typically includes discovery, planning, design,
                  development, testing, and launch phases. We&apos;ll guide you
                  through each step and keep you informed throughout.
                </p>

                <h3 className="text-lg font-bold mb-3">
                  How long does it take to complete a website?
                </h3>
                <p className="text-gray-600 mb-6">
                  Project timelines vary based on complexity. A simple website
                  might take 4-6 weeks, while more complex sites can take 8-12
                  weeks or more.
                </p>

                <h3 className="text-lg font-bold mb-3">
                  Do you offer maintenance services?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer various maintenance packages to keep your
                  website secure, up-to-date, and performing optimally.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">
                  What information do you need to provide a quote?
                </h3>
                <p className="text-gray-600 mb-6">
                  We typically need to know your project goals, desired
                  features, timeline, and budget range to provide an accurate
                  quote.
                </p>

                <h3 className="text-lg font-bold mb-3">
                  Do you work with clients remotely?
                </h3>
                <p className="text-gray-600 mb-6">
                  Yes, we work with clients worldwide. Our processes are
                  designed for effective remote collaboration with regular
                  check-ins.
                </p>

                <h3 className="text-lg font-bold mb-3">
                  What happens after my website launches?
                </h3>
                <p className="text-gray-600">
                  After launch, we provide training on how to use your website,
                  and offer ongoing support and maintenance options to ensure
                  continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-brand-purple to-brand-blue rounded-xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s bring your vision to life and create something amazing
              together.
            </p>
            <Button className="bg-white text-brand-purple hover:bg-gray-100 transition-colors px-8 py-6 text-lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
