import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="bg-primary-600 p-2 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-primary-900 tracking-tight">Secure Future</span>
          </Link>
          <h2 className="text-3xl font-black text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-500 font-medium">Join thousands of students today</p>
        </div>
        
        <form className="mt-8 space-y-5">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2 text-sm text-gray-600">
            <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
            <p>By signing up, you agree to our <a href="#" className="font-bold text-primary-600">Terms of Service</a> and <a href="#" className="font-bold text-primary-600">Privacy Policy</a>.</p>
          </div>

          <button type="submit" className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center text-gray-600 font-medium">
          Already have an account?{' '}
          <Link to="/login" className="font-black text-primary-600 hover:text-primary-500">Log in instead</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
