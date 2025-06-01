import { useState } from 'react';
import { ExternalLink, Github, Code2, PenTool, Monitor } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  icon: JSX.Element;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Event Decoration Website",
      description: "Dynamic website for browsing and requesting decoration services. Backend built with PHP and MySQL for authentication and data handling.",
      image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      github: "https://github.com/sakshigoud/dream_decore",
      icon: <PenTool size={20} />
    },
    {
      title: "Netflix Clone",
      description: "Simulated Netflix front-end using structured HTML and styled with CSS. Included navigation, movie thumbnails, and hover effects.",
      image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tags: ["HTML", "CSS"],
      github: "https://github.com/sakshigoud/netflix",
      icon: <Monitor size={20} />
    },
    {
      title: "News Application",
      description: "Built with ReactJS, fetching news from a public API. Pagination with Next and Previous buttons for navigation.",
      image: "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tags: ["ReactJS", "API Integration"],
      github: "https://github.com/sakshigoud",
      icon: <Code2 size={20} />
    },
    {
      title: "Investment Application",
      description: "Dynamic investment application built with ReactJS, fetching data from database.",
      image: "https://production-content-assets.ratecity.com.au/20230315/growth-money-arrow-success-financial-business-coin-concept-investment-earnings-background-with-profit-graph-finance-development-increase-economic-market-chart-digital-stock-currency-strategy-1-gp9ysu6Aw.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tags: ["ReactJS", "Node.js", "MongoDB"],
      github: "https://github.com/sakshigoud/Next-Invest",
      icon: <Code2 size={20} />
    }
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            Check out some of my recent projects and applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium bg-gray-700/80 text-teal-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gray-900/80 flex items-center justify-center transition-opacity duration-300 ${
                  activeProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-teal-600 text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="View Github Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-teal-600 text-white p-3 rounded-full transition-colors duration-300"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-teal-400/20 p-2 rounded-md mr-3 text-teal-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 font-medium flex items-center transition-colors duration-300"
                  >
                    View Details <ExternalLink size={16} className="ml-1" />
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