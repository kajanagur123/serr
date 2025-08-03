import React from 'react';
import { Code, Cpu, Phone, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Code className="h-8 w-8 text-blue-400" />
                <Cpu className="h-8 w-8 text-teal-400" />
              </div>
              <span className="text-xl font-bold">services</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional freelance developer specializing in affordable software and hardware solutions. 
              Bringing your ideas to life with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+919345813903" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:kajanagur@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919345813903" className="text-gray-300 hover:text-green-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardware Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IoT Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logo Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Copyright Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span>+91 93458 13903</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span>+91 85009 51338</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-teal-400" />
                <span>kajanagur@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-green-400" />
                <span>WhatsApp Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © {currentYear} Services. All rights reserved.
            </div>
            <div className="flex items-center text-gray-300 text-sm mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for affordable innovation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;