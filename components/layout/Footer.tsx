import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import Container from '../common/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
              STUDIO
            </h3>
            <p className="text-gray-400 mb-4">
              Creating exceptional digital experiences that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Brand Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">123 Design Street, Creative City</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <a href="mailto:hello@studio.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@studio.com
                </a>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;