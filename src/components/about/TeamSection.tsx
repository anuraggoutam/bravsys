import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  const boardMembers = [
    {
      name: 'Anurag',
      title: 'Founder / Full-Stack Developer',
      image: '/assets/team/Anurag.jpg',
    },
    {
      name: 'Anjali Thakur',
      title: 'Co-Founder / UI/UX Designer',
      image: '/assets/team/Anjii.jpg',
    },
  ];

  // const teamMembers = [
  //   {
  //     name: 'Shishir Thakur',
  //     title: 'Director - Professional Services',
  //     image:
  //       'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=300',
  //   },
  //   {
  //     name: 'Harshita Vishindasani',
  //     title: 'Director - Product Management',
  //     image:
  //       'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=300',
  //   },
  //   {
  //     name: 'Jignesh A. Patel',
  //     title: 'Technical Lead',
  //     image:
  //       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
  //   },
  //   {
  //     name: 'Papiya D. Rawat',
  //     title: 'Sr. Manager People Operations',
  //     image:
  //       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300',
  //   },
  // ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Team</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team is composed of experts, pioneers, and accomplished
              executives in technology and business. Under the leadership of our
              core management and leadership team, coupled with the seasoned
              advice and expertise of our advisors and partner companies, our
              Account 360 AI team has pursued challenges and achieved great
              success. Our team spans a wide array of disciplines, such as
              strategy, programming, UX, UI, and engineering, as well as related
              specialties in emerging technologies relevant to AI and machine
              learning.
            </p>
          </div>

          <div>
           
            <div className="grid grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto px-4 py-2 mb-4 object-cover"
                  />
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;
