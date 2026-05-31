import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, ExternalLink, FileText, ChevronRight, Filter } from 'lucide-react';

const years = ['2023', '2022', '2021', '2020', '2019'];
const series = ['May/June', 'Oct/Nov', 'Feb/March'];

const pastPaperData = [
  { id: 1, subject: 'Mathematics', code: '9709', level: 'A Level', year: '2023', series: 'May/June', paper: 'Paper 12' },
  { id: 2, subject: 'Physics', code: '0625', level: 'IGCSE', year: '2023', series: 'May/June', paper: 'Paper 21 (MCQs)' },
  { id: 3, subject: 'Chemistry', code: '5070', level: 'O Level', year: '2022', series: 'Oct/Nov', paper: 'Paper 11' },
  { id: 4, subject: 'Biology', code: '9700', level: 'A Level', year: '2023', series: 'Feb/March', paper: 'Paper 42' },
  { id: 5, subject: 'Computer Science', code: '9618', level: 'A Level', year: '2022', series: 'May/June', paper: 'Paper 32' },
];

const PastPapers = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-primary-900 py-16 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Past Papers Archive</h1>
              <p className="text-xl text-primary-100 font-medium">Access official exam papers, mark schemes, and examiner reports for the last 10 years.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-2xl">
                  <FileText className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-black">5,000+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-300">Papers Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-primary-600" />
                Refine Search
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Examination Year</label>
                  <div className="grid grid-cols-2 gap-2">
                    {years.map(y => (
                      <button key={y} className="px-3 py-2 bg-slate-50 text-gray-600 text-xs font-bold rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all border border-transparent hover:border-primary-100">
                        {y}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Exam Series</label>
                  <div className="space-y-2">
                    {series.map(s => (
                      <label key={s} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-primary-600 focus:ring-primary-500" />
                        <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by subject code (e.g., 9709) or name..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                    <tr>
                      <th className="px-8 py-5">Examination Info</th>
                      <th className="px-8 py-5">Level / Code</th>
                      <th className="px-8 py-5">Paper</th>
                      <th className="px-8 py-5">Downloads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {pastPaperData.map((paper) => (
                      <tr key={paper.id} className="hover:bg-slate-50 transition-all group">
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="font-black text-gray-900 text-lg group-hover:text-primary-600 transition-colors">{paper.subject}</span>
                            <span className="text-xs font-bold text-gray-500 uppercase">{paper.series} {paper.year}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-700">{paper.level}</span>
                            <span className="text-xs font-medium text-gray-400">Code: {paper.code}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-black rounded-lg">
                            {paper.paper}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 bg-white border border-gray-100 rounded-xl text-primary-600 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="p-2 bg-white border border-gray-100 rounded-xl text-gray-400 hover:border-primary-100 hover:text-primary-600 transition-all shadow-sm">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex items-center justify-center pt-6">
              <button className="btn-secondary py-3 px-12 flex items-center space-x-2">
                <span>View More Years</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPapers;
