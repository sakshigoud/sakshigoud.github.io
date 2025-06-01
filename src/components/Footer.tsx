import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-white font-semibold">Sakshi Goud</span>. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={14} className="text-teal-400 mx-1" /> using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;