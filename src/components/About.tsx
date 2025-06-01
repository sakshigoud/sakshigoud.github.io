import { UserCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aspiring Full Stack Developer
            </h3>
            <p className="text-gray-400 mb-6">
              I am a passionate Full Stack Developer with experience in building efficient, user-centric websites. My journey in web development started during my Bachelor's in Computer Applications, and I've been continuously expanding my skills since then.
            </p>
            <p className="text-gray-400 mb-6">
              With a strong foundation in Data Structures and Algorithms, I enjoy solving complex problems and creating clean, efficient code. My experience includes working with modern front-end technologies like React.js and TypeScript, as well as back-end technologies like Node.js and Express.js.
            </p>
            <p className="text-gray-400 mb-6">
              Currently pursuing my Master's in Computer Applications, I'm eager to apply my skills in a professional setting and contribute to innovative projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="mb-2">
                  <strong className="text-teal-400">Name:</strong> Sakshi Goud
                </p>
                <p className="mb-2">
                  <strong className="text-teal-400">Email:</strong> sakshigoud44@gmail.com
                </p>
                <p className="mb-2">
                  <strong className="text-teal-400">Phone:</strong> +91 6232144509
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-teal-400">Degree:</strong> MCA (Pursuing)
                </p>
                <p className="mb-2">
                  <strong className="text-teal-400">Location:</strong> Indore, India
                </p>
                <p className="mb-2">
                  <strong className="text-teal-400">Available:</strong> Full-time
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 p-2 bg-gray-800">
                <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                  <UserCircle2 size={120} className="text-gray-500" />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-teal-400/20 rounded-full filter blur-xl"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;