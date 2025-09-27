import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
          <p className="text-lg text-gray-600">
            At Bravsys, we share a unified mindset, no matter where our team is
            located. We're driven by a passion for innovation, great ideas, and
            the execution needed to create exceptional experiences. One Mantra,
            Worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="max-w-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input type="text" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input type="text" className="w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input type="text" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <Input type="email" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input type="tel" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={6}
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div>
                <Button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Bravsys</h3>
              <div className="space-y-4 text-gray-600">
                <div>Home</div>
                <div>About us</div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact us</h4>
              <div className="space-y-2 text-gray-600">
                <div>
                  <strong>Phone</strong>
                  <br />
                  +1 (408) 874-8333
                </div>
                <div>
                  <strong>Email</strong>
                  <br />
                  info@bravsys.com
                </div>
                <div>
                  <strong>Fremont, CA</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
