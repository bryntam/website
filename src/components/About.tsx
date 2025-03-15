import React from 'react';
import { Code, Briefcase, Zap } from 'lucide-react';
import photo from '../../img/photo.jpg';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img
                src={photo}
                alt="Professional headshot"
                className="rounded-full w-[300px] h-[300px] object-cover mx-auto shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse"></div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              My journey in software development has been driven by a desire to create
              meaningful and impactful digital experiences. I specialize in React, Node.js,
              and cloud technologies, always staying current with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Code className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
                <p className="text-gray-600">Expertise in both frontend and backend technologies</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">5+ Years Experience</h3>
                <p className="text-gray-600">Working with enterprise-level applications</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-600">Turning complex problems into elegant solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;