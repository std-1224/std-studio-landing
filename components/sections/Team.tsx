import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { teamMembers } from '../../data/team';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Meet Our Team"
          subtitle="We're a diverse team of creative thinkers and problem solvers committed to delivering exceptional results."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-pink-600 p-8 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
            <p className="text-blue-50 mb-4">
              We&apos;re always looking for talented individuals who share our passion for creativity and innovation.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;