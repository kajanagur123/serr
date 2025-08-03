import React from 'react';
import { Code, Cpu, Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Quality Excellence',
      description: 'We deliver high-quality solutions that meet industry standards and exceed client expectations.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with clients to understand and fulfill their unique needs.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure projects are completed on time without compromising quality.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Reliable Support',
      description: 'Continuous support and maintenance to keep your projects running smoothly long after completion.'
    }
  ];

  const expertise = [
    'Web Development (React, Node.js, PHP)',
    'Mobile App Development (React Native, Flutter)',
    'Desktop Applications (Electron, Python)',
    'IoT Device Development',
    'Embedded Systems Programming',
    'Circuit Design & PCB Development',
    'Database Design & Management',
    'API Development & Integration',
    'UI/UX Design',
    'Technical Documentation'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional freelance developer specializing in both software and hardware solutions. 
            Committed to delivering affordable, high-quality projects that help businesses and individuals 
            achieve their technological goals.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Services, we believe that cutting-edge technology solutions should be accessible to everyone. 
                Our mission is to provide professional-grade software and hardware development services at 
                affordable prices, without compromising on quality or reliability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in creating custom solutions that perfectly match our clients' needs, whether 
                it's a complex web application, a mobile app, an IoT device, or an embedded system. Every 
                project is approached with the same level of dedication and attention to detail.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-6 rounded-lg text-center">
                  <Code className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-semibold text-blue-800">Software</span>
                </div>
                <div className="bg-teal-100 p-6 rounded-lg text-center">
                  <Cpu className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                  <span className="text-sm font-semibold text-teal-800">Hardware</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Affordable Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Why We Keep Our Prices Affordable</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We believe that every business, startup, and individual should have access to professional 
            technology solutions. By maintaining lean operations and focusing on long-term client 
            relationships rather than short-term profits, we can offer competitive pricing while 
            maintaining the highest standards of quality and service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;