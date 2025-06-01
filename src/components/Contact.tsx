import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulating form submission
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-teal-400 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors duration-300"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-teal-400 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors duration-300"
            placeholder="Your Email"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-teal-400 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors duration-300"
          placeholder="Subject"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-teal-400 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors duration-300 resize-none"
          placeholder="Your Message"
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className={`w-full md:w-auto flex items-center justify-center py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 font-medium ${
            formState === 'submitting' 
              ? 'bg-gray-700 text-gray-300 cursor-not-allowed' 
              : 'bg-teal-500 hover:bg-teal-600 text-gray-900'
          }`}
        >
          {formState === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={16} className="ml-2" />
            </>
          )}
        </button>
      </div>
      
      {formState === 'success' && (
        <div className="bg-teal-500/20 border border-teal-500 text-teal-300 px-4 py-3 rounded-md">
          <p>Your message has been sent successfully! I'll get back to you soon.</p>
        </div>
      )}
      
      {formState === 'error' && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md">
          <p>There was an error sending your message. Please try again later.</p>
        </div>
      )}
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            Feel free to contact me for any work or suggestions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-400/20 p-3 rounded-md mr-4 text-teal-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:sakshigoud44@gmail.com" 
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      sakshigoud44@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-400/20 p-3 rounded-md mr-4 text-teal-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+916232144509" 
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      +91 6232144509
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-400/20 p-3 rounded-md mr-4 text-teal-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/sakshigoud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-teal-400 text-white hover:text-gray-900 p-3 rounded-full transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sakshi-goud-a2a39923b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-teal-400 text-white hover:text-gray-900 p-3 rounded-full transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Send Me A Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;