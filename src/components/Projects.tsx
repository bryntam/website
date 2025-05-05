import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import splitbillsImg from '../img/splitbills.jpeg';
import planetzeImg from '../img/planetze.png';

const projects = [
  {
    title: 'SplitBills',
    description: 'A modern IOS app to easily split expenses among friends, track payments, and settle up. Designed for students, roommates, and any shared spending.',
    image: splitbillsImg,
    technologies: ['React Native', 'Firebase', 'Expo Router'],
    link: 'https://www.splitbillsapp.com',
  },

  {
    title: 'Planetze: Carbon Footprint Android App',
    description: 'Using agile development, we created a carbon footprint calculator app for Android.',
    image: planetzeImg,
    technologies: ['Java', 'Firebase', 'Android Studio'],
    link: 'https://github.com/kimjiy28/Planetze',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Link</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;