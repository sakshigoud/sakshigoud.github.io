import { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(6, 182, 212, ${Math.random() * 0.5 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();
    
    function connectParticles() {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 bg-gray-950"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col max-w-3xl mx-auto">
          <div className="animate-fadeIn">
            <p className="text-teal-400 font-mono mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Sakshi Goud
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Full Stack Developer <span className="text-teal-400">&</span> IT Professional
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Aspiring IT Professional with a strong foundation in Data Structures and Algorithms. 
              Experienced in creating efficient, user-centric websites.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#contact" 
                className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500/10 font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-5">
              <a 
                href="https://github.com/sakshigoud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sakshi-goud-a2a39923b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sakshigoud44@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;