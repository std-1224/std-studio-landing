import React from 'react';
import { 
  BarChart3 as Strategy,
  Layout,
  TrendingUp,
  PenTool,
  Layers,
  Share2
} from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
  // Map icon names to Lucide React components
  const iconMap: Record<string, React.ReactNode> = {
    strategy: <Strategy className="h-10 w-10 text-blue-600" />,
    layout: <Layout className="h-10 w-10 text-blue-600" />,
    "trending-up": <TrendingUp className="h-10 w-10 text-blue-600" />,
    "pen-tool": <PenTool className="h-10 w-10 text-blue-600" />,
    layers: <Layers className="h-10 w-10 text-blue-600" />,
    "share-2": <Share2 className="h-10 w-10 text-blue-600" />
  };

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="From strategy to execution, we provide end-to-end solutions to help your business thrive in the digital landscape."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your digital presence?
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Let&apos;s collaborate to create something exceptional that drives real results for your business.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-blue-600 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;