import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer Intern",
      company: "Flipr Labs",
      location: "Remote",
      period: "January 2025 - Present",
      description: [
        "Implementing authentication to allow users to create accounts and save their favorite cities in a Weather Dashboard project.",
        "Developing a city management system using LocalStorage and MongoDB.",
        "Integrating third-party weather API using Axios for real-time data.",
        "Building a RESTful API using Node.js, Express.js, and TypeScript for a Blogging Platform.",
        "Using MongoDB for flexible data schema design.",
        "Creating a React.js frontend with TypeScript for managing blog posts."
      ]
    },
    {
      title: "PHP Developer Intern",
      company: "Bridgelogic Software Ltd.",
      location: "Indore",
      period: "July 2024 - August 2024",
      description: [
        "Gained experience with PHP, MySQL, HTML, CSS, JavaScript, jQuery, and AJAX.",
        "Contributed to small-scale projects using core web technologies.",
        "Helped debug and test code for performance and functionality."
      ]
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            My professional journey and experiences in the tech industry.
          </p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform md:translate-x-0 translate-x-4"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row md:justify-between mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-gray-800 border-4 border-teal-400 rounded-full transform md:translate-x-[-50%] translate-x-[-50%] z-10"></div>
              
              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-teal-400 font-medium mb-4">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-teal-400">Education</span>
            </h2>
            <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
            <p className="text-gray-400 text-center max-w-2xl">
              My academic background and qualifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-teal-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Master's Degree</h3>
              </div>
              <p className="text-teal-400 font-medium mb-2">Master of Computer Applications</p>
              <p className="text-gray-300 mb-2">IPS Academy, Indore</p>
              <p className="text-gray-400 mb-1">2024 - 2026</p>
              <p className="text-gray-400">Currently Pursuing</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-teal-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Bachelor's Degree</h3>
              </div>
              <p className="text-teal-400 font-medium mb-2">Bachelor of Computer Applications</p>
              <p className="text-gray-300 mb-2">Holkar Science College</p>
              <p className="text-gray-400 mb-1">2020 - 2023</p>
              <p className="text-gray-400">78.90%</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-teal-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Higher Secondary</h3>
              </div>
              <p className="text-teal-400 font-medium mb-2">School For Excellence (MP Board)</p>
              <p className="text-gray-300 mb-2">Class XII - 83.60% (2020)</p>
              <p className="text-gray-300">Class X - 95.00% (2018)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;