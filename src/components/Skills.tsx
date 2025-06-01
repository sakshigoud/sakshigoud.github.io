import { useState } from 'react';
import { Code2, Database, Server, Palette, Cpu, Braces } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
}

const SkillBar = ({ name, level }: Skill) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="mb-4"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        {isVisible && (
          <span className="text-xs text-teal-400">{level}%</span>
        )}
      </div>
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-teal-300 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Code2 size={24} className="text-teal-400" />,
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "PHP", level: 70 },
      ]
    },
    {
      name: "Frontend",
      icon: <Palette size={24} className="text-teal-400" />,
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Redux", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      name: "Backend",
      icon: <Server size={24} className="text-teal-400" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "PHP", level: 70 },
        { name: "REST APIs", level: 80 },
      ]
    },
    {
      name: "Databases",
      icon: <Database size={24} className="text-teal-400" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      name: "Core Concepts",
      icon: <Cpu size={24} className="text-teal-400" />,
      skills: [
        { name: "DSA", level: 85 },
        { name: "OOP", level: 90 },
        { name: "DBMS", level: 85 },
      ]
    },
    {
      name: "Tools",
      icon: <Braces size={24} className="text-teal-400" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "ChatGPT", level: 85 },
        { name: "Codium", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            Here are my technical skills and competencies that I've developed over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;