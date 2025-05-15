"use client";
import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { portfolioItems } from '../../data/portfolio';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));
  
  const filteredItems = selectedCategory
    ? portfolioItems.filter(item => item.category === selectedCategory)
    : portfolioItems;

  return (
    <section id="portfolio" className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Featured Work"
          subtitle="Explore our portfolio of award-winning projects across various industries and disciplines."
          center
        />

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl text-white font-bold">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            View All Projects
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;