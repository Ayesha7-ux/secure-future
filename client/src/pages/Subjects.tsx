import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Atom, Beaker, Dna, Monitor, Globe, TrendingUp, BarChart3, History, Map, Mosque, Languages, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'text-blue-600', bg: 'bg-blue-50', count: 1240 },
  { name: 'Physics', icon: Atom, color: 'text-purple-600', bg: 'bg-purple-50', count: 850 },
  { name: 'Chemistry', icon: Beaker, color: 'text-pink-600', bg: 'bg-pink-50', count: 920 },
  { name: 'Biology', icon: Dna, color: 'text-green-600', bg: 'bg-green-50', count: 780 },
  { name: 'Computer Science', icon: Monitor, color: 'text-indigo-600', bg: 'bg-indigo-50', count: 450 },
  { name: 'English', icon: Languages, color: 'text-orange-600', bg: 'bg-orange-50', count: 670 },
  { name: 'Business Studies', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', count: 540 },
  { name: 'Economics', icon: BarChart3, color: 'text-red-600', bg: 'bg-red-50', count: 430 },
  { name: 'Accounting', icon: BookOpen, color: 'text-cyan-600', bg: 'bg-cyan-50', count: 320 },
  { name: 'History', icon: History, color: 'text-amber-600', bg: 'bg-amber-50', count: 280 },
  { name: 'Geography', icon: Map, color: 'text-lime-600', bg: 'bg-lime-50', count: 310 },
  { name: 'Islamiyat', icon: Mosque, color: 'text-teal-600', bg: 'bg-teal-50', count: 250 },
  { name: 'Urdu', icon: Globe, color: 'text-rose-600', bg: 'bg-rose-50', count: 190 },
];

const Subjects = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary-900 py-16 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-black mb-6">Explore Our Subjects</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find comprehensive study materials, past papers, and revision notes for O Levels, A Levels, and IGCSE subjects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className={`w-16 h-16 ${subject.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <subject.icon className={`w-8 h-8 ${subject.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                <p className="text-gray-500 font-medium mb-6">{subject.count}+ Resources available</p>
                
                <Link 
                  to={`/resources?subject=${subject.name.toLowerCase()}`}
                  className="flex items-center text-primary-600 font-bold group-hover:text-primary-700"
                >
                  <span>Browse Content</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom pb-24">
        <div className="bg-primary-600 rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6">Can't find what you're looking for?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Request a subject or specific study materials, and our team will prioritize adding them to the platform.
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-10 py-4 rounded-2xl font-black text-lg hover:bg-primary-50 transition-colors inline-block shadow-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subjects;
