import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, BookOpen, GraduationCap, Users, Files } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 lg:py-32 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-700/50">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
                <span className="text-sm font-medium text-blue-200">The Ultimate Study Hub for O/A Levels & IGCSE</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1]">
                Secure Your <span className="text-blue-400">Future</span> With Quality Education
              </h1>
              
              <p className="text-xl text-primary-100 max-w-xl leading-relaxed">
                Access thousands of notes, past papers, solved answers, and study guides for international boards. Everything you need to excel in your exams.
              </p>

              <div className="relative max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for subjects, notes, or papers..." 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary-600/20 shadow-xl"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-primary-500 transition-colors">
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/subjects" className="btn-primary py-4 px-8 text-lg flex items-center space-x-2">
                  <span>Explore Subjects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/signup" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-4 px-8 text-lg rounded-lg font-semibold transition-all">
                  Join for Free
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Students studying" 
                  className="rounded-2xl shadow-lg grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <GraduationCap className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Pass Rate</p>
                      <p className="text-xl font-black text-gray-900">98.5%</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow delay-300">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Files className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Resources</p>
                      <p className="text-xl font-black text-gray-900">15,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-primary-900">25K+</p>
              <p className="text-gray-500 font-medium">Active Students</p>
            </div>
            <div className="text-center border-l border-gray-100">
              <p className="text-4xl font-black text-primary-900">15K+</p>
              <p className="text-gray-500 font-medium">Study Materials</p>
            </div>
            <div className="text-center border-l border-gray-100">
              <p className="text-4xl font-black text-primary-900">50+</p>
              <p className="text-gray-500 font-medium">Expert Tutors</p>
            </div>
            <div className="text-center border-l border-gray-100">
              <p className="text-4xl font-black text-primary-900">13+</p>
              <p className="text-gray-500 font-medium">Core Subjects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Subjects Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-primary-900">Master Your Favorite Subjects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We cover a wide range of subjects for international boards with comprehensive study guides and past papers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Mathematics', 'Physics', 'Chemistry', 'Biology'].map((subject) => (
              <div key={subject} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <BookOpen className="text-primary-600 w-8 h-8 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{subject}</h3>
                <p className="text-gray-500 mb-4 text-sm">Notes, Topical Past Papers, and Mark Schemes available.</p>
                <div className="flex items-center text-primary-600 font-bold text-sm">
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/subjects" className="btn-secondary py-3 px-10 inline-block font-bold">
              View All 13 Subjects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
