import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-emerald-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
              <span>Award Winning Creative Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              We craft digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">experiences</span> that inspire
            </h1>
            
            <p className="text-xl text-gray-300">
              Transform your brand with innovative design and strategic thinking. We partner with ambitious companies to create impactful digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Our Work
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-gray-400 mb-2">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                <span className="text-white font-semibold">TechVision</span>
                <span className="text-white font-semibold">Innovate</span>
                <span className="text-white font-semibold">Upward</span>
                <span className="text-white font-semibold">Growth+</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                alt="Creative workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 aspect-square w-40 h-40 rounded-xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Creative process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#services" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Discover More</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;