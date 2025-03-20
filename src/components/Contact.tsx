import React, { useState } from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this to your backend
      // For demonstration, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      toast.success('Message sent successfully! I\'ll get back to you soon.');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Toaster position="top-center" />
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/bryntam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bryancktam/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          {/* <a
            href="https://www.youtube.com/@bryan-tam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
            aria-label="YouTube Channel"
          >
            <Youtube size={24} />
          </a> */}
          <a
            href="mailto:bryancktam@gmail.com"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </a>
        </div>
      
        {/* <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-white font-medium py-2 px-6 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form> */}
        
      </div>
    </section>
  );
};

export default Contact;