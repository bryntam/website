import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Implements secure payment processing and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=450',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://ecommerce-platform.johndoe.dev',
    githubLink: 'https://github.com/johndoe/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&h=450',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    demoLink: 'https://taskmanager.johndoe.dev',
    githubLink: 'https://github.com/johndoe/task-manager',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create high-quality blog posts and social media content using GPT-3.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&h=450',
    technologies: ['Next.js', 'OpenAI API', 'TailwindCSS', 'TypeScript'],
    demoLink: 'https://ai-content.johndoe.dev',
    githubLink: 'https://github.com/johndoe/ai-content-generator',
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
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
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