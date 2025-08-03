import React, { useState } from 'react';
import { Code, Cpu, ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const softwareProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'software',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Mobile and web application for project management with real-time collaboration features.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'software',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI Chatbot Integration',
      description: 'Custom chatbot solution integrated with existing business systems for customer support automation.',
      technologies: ['Python', 'TensorFlow', 'REST API'],
      category: 'software',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Inventory Management System',
      description: 'Desktop application for warehouse management with barcode scanning and reporting features.',
      technologies: ['Electron', 'SQLite', 'Chart.js'],
      category: 'software',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const hardwareProjects = [
    {
      title: 'IoT Smart Home System',
      description: 'Complete smart home automation system with mobile app control and voice integration.',
      technologies: ['Arduino', 'ESP32', 'React Native', 'Firebase'],
      category: 'hardware',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Environmental Monitoring Device',
      description: 'IoT device for real-time air quality and weather monitoring with cloud data logging.',
      technologies: ['Raspberry Pi', 'Sensors', 'Python', 'AWS'],
      category: 'hardware',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Automated Plant Watering System',
      description: 'Smart irrigation system with soil moisture sensors and mobile app monitoring.',
      technologies: ['Arduino', 'Sensors', 'Mobile App'],
      category: 'hardware',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Security Camera System',
      description: 'Multi-camera security system with motion detection and remote monitoring capabilities.',
      technologies: ['Raspberry Pi', 'OpenCV', 'Web Dashboard'],
      category: 'hardware',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const allProjects = [...softwareProjects, ...hardwareProjects];

  const getFilteredProjects = () => {
    if (activeTab === 'all') return allProjects;
    if (activeTab === 'software') return softwareProjects;
    if (activeTab === 'hardware') return hardwareProjects;
    return allProjects;
  };

  const tabs = [
    { id: 'all', label: 'All Projects', icon: <Star className="h-5 w-5" /> },
    { id: 'software', label: 'Software', icon: <Code className="h-5 w-5" /> },
    { id: 'hardware', label: 'Hardware', icon: <Cpu className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful software and hardware projects, 
            showcasing innovative solutions delivered for clients across various industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredProjects().map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'software'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-teal-100 text-teal-800'
                  }`}>
                    {project.category === 'software' ? 'Software' : 'Hardware'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    View Details
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;