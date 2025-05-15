import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { clients } from '../../data/clients';

const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Trusted by Leading Brands"
          subtitle="We're proud to partner with forward-thinking companies across industries, helping them achieve exceptional results."
          center
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="relative group"
            >
              <div className="relative overflow-hidden p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-[3/2] flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-12 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="absolute inset-x-0 -bottom-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-gray-800 bg-white px-3 py-1 rounded-full shadow-sm">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-sm">
            <div className="text-left">
              <div className="text-4xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-left">
              <div className="text-4xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-left">
              <div className="text-4xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientsSection;