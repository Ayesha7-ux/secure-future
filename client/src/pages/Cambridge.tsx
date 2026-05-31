import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileSearch, CheckSquare, Users, FileText, ClipboardList, ArrowRight, ExternalLink } from 'lucide-react';

const CambridgeSection = () => {
  const sections = [
    { title: 'Official Syllabus', desc: 'Latest curriculum and subject content for all Cambridge subjects.', icon: Book, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Topical Past Papers', desc: 'Questions organized by specific topics to help targeted revision.', icon: FileSearch, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Mark Schemes', desc: 'Official answer keys and grading criteria for accurate self-assessment.', icon: CheckSquare, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Examiner Reports', desc: 'Insights from examiners on common student mistakes and performance.', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'Candidate Responses', desc: 'Real student answers with examiner commentary and marks.', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Revision Notes', desc: 'Concise summaries of key concepts tailored to the syllabus.', icon: ClipboardList, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">Cambridge Excellence</div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6">Dedicated Cambridge Assessment International Education Hub</h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              Everything you need for Cambridge IGCSE, O Level, and A Level success in one organized place.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className={`${item.bg} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 font-medium mb-6 leading-relaxed">{item.desc}</p>
              <button className="flex items-center text-primary-600 font-bold group-hover:underline">
                <span>Access Materials</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="container-custom py-24">
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">Master the Examination with Expert Insights</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Our examiner reports and candidate responses are specifically designed to help you understand what examiners are looking for. Learn from real examples and avoid common pitfalls.
              </p>
              <ul className="space-y-4">
                {[
                  'Deep dive into marking criteria',
                  'Example responses with full commentary',
                  'Step-by-step problem solving guides',
                  'Time management tips for exams'
                ].map((point) => (
                  <li key={point} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="btn-primary py-4 px-10 rounded-2xl flex items-center space-x-2">
                  <span>Start Revising Now</span>
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
                  alt="Cambridge Exam Prep" 
                  className="rounded-3xl shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
                  <p className="text-sm font-black text-primary-900 leading-tight">Trusted by 5,000+ Cambridge students every month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CambridgeSection;
