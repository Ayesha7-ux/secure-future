import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, FileText, Download, Eye, Star, ChevronDown, BookOpen } from 'lucide-react';

const categories = ['All Levels', 'O Level', 'A Level', 'IGCSE'];
const resourceTypes = ['All Types', 'Notes', 'Past Paper', 'Solved Answer', 'Study Guide', 'Worksheet', 'MCQs'];

const dummyResources = [
  { id: 1, title: 'Calculus: Differentiation & Integration', type: 'Notes', subject: 'Mathematics', level: 'A Level', rating: 4.8, views: '1.2k' },
  { id: 2, title: 'Quantum Mechanics Overview', type: 'Study Guide', subject: 'Physics', level: 'A Level', rating: 4.9, views: '2.5k' },
  { id: 3, title: 'Organic Chemistry: Hydrocarbons', type: 'Notes', subject: 'Chemistry', level: 'O Level', rating: 4.7, views: '800' },
  { id: 4, title: 'May/June 2023 Paper 1 (MCQs)', type: 'Past Paper', subject: 'Biology', level: 'IGCSE', rating: 4.5, views: '3.1k' },
  { id: 5, title: 'Economic Principles & Markets', type: 'Notes', subject: 'Economics', level: 'A Level', rating: 4.6, views: '1.1k' },
  { id: 6, title: 'Cell Structure & Function', type: 'Worksheet', subject: 'Biology', level: 'O Level', rating: 4.8, views: '950' },
];

const Resources = () => {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Study Resources</h1>
              <p className="text-gray-500 font-medium">Explore 15,000+ quality educational materials</p>
            </div>
            
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search notes, subjects..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Level
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedLevel(cat)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      selectedLevel === cat ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">Resource Type</h3>
              <div className="space-y-2">
                {resourceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      selectedType === type ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Resource Grid */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-500 font-bold">{dummyResources.length} Results Found</p>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50">
                <span className="text-sm font-bold text-gray-700">Sort by: Popularity</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dummyResources.map((res, index) => (
                <motion.div
                  key={res.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-50 p-3 rounded-2xl group-hover:bg-primary-600 transition-colors">
                      <FileText className="text-primary-600 w-6 h-6 group-hover:text-white" />
                    </div>
                    <div className="flex items-center space-x-1 bg-amber-50 px-2 py-1 rounded-lg">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-black text-amber-700">{res.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                    {res.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded-lg">
                      {res.subject}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-lg">
                      {res.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-bold">{res.views}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-black text-sm">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="btn-secondary py-3 px-10 font-black">Load More Resources</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
