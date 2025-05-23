import { Code, Briefcase, Zap } from 'lucide-react';
import photo from '../img/photo.jpg';


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
              I'm a final-year Management & IT student at the University of Toronto, exploring opportunities in front-end development and data analytics. With experience in React, Python, SQL, Java, C and Power BI,  I enjoy building intuitive applications and leveraging data to drive insights.

            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Code className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Front End Development</h3>
                <p className="text-gray-600">Expertise in React and frontend technologies</p>
              </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-600">Turning raw data into insights and visualizations</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Briefcase className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vice President</h3>
              <p className="text-gray-600">at the Cantonese Speaking Club of UofT</p>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;