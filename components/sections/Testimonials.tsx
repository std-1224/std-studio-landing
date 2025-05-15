"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Auto-advance the carousel
    const interval = setInterval(goToNext, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Reset animation state after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          center
          className="text-white"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl relative">
                    <Quote className="absolute top-5 right-5 h-10 w-10 text-blue-500 opacity-20" />
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <blockquote>
                          <p className="text-lg italic text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                          <footer>
                            <div className="font-bold text-white">{testimonial.name}</div>
                            <div className="text-blue-400">{testimonial.role}, {testimonial.company}</div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;