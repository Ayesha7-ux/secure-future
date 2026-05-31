import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, BookOpen, User, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-primary-900 tracking-tight">Secure <span className="text-primary-600">Future</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/subjects" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Subjects</Link>
            <Link to="/past-papers" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Past Papers</Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Resources</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">About</Link>
            
            <div className="flex items-center space-x-4 ml-4">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/login" className="btn-secondary py-1.5">Login</Link>
              <Link to="/signup" className="btn-primary py-1.5">Join Free</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300">
          <div className="container-custom flex flex-col space-y-4">
            <Link to="/subjects" className="text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Subjects</Link>
            <Link to="/past-papers" className="text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Past Papers</Link>
            <Link to="/resources" className="text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link to="/login" className="btn-secondary text-center" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Join Free</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
