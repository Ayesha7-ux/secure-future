import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Globe, Send, Camera, Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Secure Future</span>
            </Link>
            <p className="text-primary-200 leading-relaxed">
              Providing quality educational resources for O/A Level and IGCSE students worldwide. Empowering learners to achieve academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-900 rounded-full hover:bg-primary-600 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-primary-900 rounded-full hover:bg-primary-600 transition-colors"><Send className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-primary-900 rounded-full hover:bg-primary-600 transition-colors"><Camera className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-primary-900 rounded-full hover:bg-primary-600 transition-colors"><Share2 className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-primary-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-primary-200">
              <li><Link to="/subjects" className="hover:text-white transition-colors">Featured Subjects</Link></li>
              <li><Link to="/past-papers" className="hover:text-white transition-colors">Past Papers</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Study Guides</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-primary-800 pb-2 inline-block">Resources</h3>
            <ul className="space-y-4 text-primary-200">
              <li><Link to="/cambridge" className="hover:text-white transition-colors">Cambridge Section</Link></li>
              <li><Link to="/quizzes" className="hover:text-white transition-colors">Daily Quizzes</Link></li>
              <li><Link to="/planner" className="hover:text-white transition-colors">Study Planner</Link></li>
              <li><Link to="/notes" className="hover:text-white transition-colors">Revision Notes</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-primary-800 pb-2 inline-block">Get in Touch</h3>
            <ul className="space-y-4 text-primary-200">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 shrink-0" />
                <span>123 Education Way, Academic District, World</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>support@securefuture.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-900 pt-8 text-center text-primary-400 text-sm">
          <p>© {new Date().getFullYear()} Secure Future. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
