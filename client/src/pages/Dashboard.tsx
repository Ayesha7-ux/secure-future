import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookMarked, Upload, Clock, Settings, Bell, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-2">
            <h2 className="text-xl font-black text-gray-900 mb-6 px-4">Dashboard</h2>
            <nav>
              <button className="w-full flex items-center space-x-3 px-4 py-3 bg-primary-600 text-white rounded-2xl font-bold shadow-lg transition-all">
                <LayoutDashboard className="w-5 h-5" />
                <span>Overview</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-white rounded-2xl font-bold transition-all mt-2">
                <BookMarked className="w-5 h-5" />
                <span>My Bookmarks</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-white rounded-2xl font-bold transition-all mt-2">
                <Upload className="w-5 h-5" />
                <span>My Uploads</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-white rounded-2xl font-bold transition-all mt-2">
                <Clock className="w-5 h-5" />
                <span>Study History</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-white rounded-2xl font-bold transition-all mt-2">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-grow space-y-10">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Saved Resources', val: '24', icon: BookMarked, color: 'text-blue-600', bg: 'bg-blue-100' },
                { label: 'Approved Uploads', val: '5', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
                { label: 'Points Earned', val: '450', icon: Bell, color: 'text-amber-600', bg: 'bg-amber-100' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-black text-gray-900">{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Exam Countdown Utility */}
            <div className="bg-primary-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-black mb-2">Upcoming Exam: Physics Paper 1</h3>
                  <p className="text-primary-200 font-medium">Cambridge International AS & A Level</p>
                </div>
                <div className="flex space-x-4">
                  {[
                    { val: '12', unit: 'Days' },
                    { val: '08', unit: 'Hours' },
                    { val: '45', unit: 'Mins' },
                  ].map((t) => (
                    <div key={t.unit} className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-center min-w-[100px] border border-white/10">
                      <p className="text-3xl font-black">{t.val}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary-300">{t.unit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900">Recent Activity</h3>
                <button className="text-primary-600 font-bold text-sm hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 text-gray-400 text-xs font-black uppercase tracking-widest">
                      <th className="px-8 py-4">Resource</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { name: 'Pure Mathematics Notes', status: 'Approved', date: 'May 28, 2026', type: 'Upload' },
                      { name: 'Organic Chemistry Revision', status: 'Bookmarked', date: 'May 27, 2026', type: 'Save' },
                      { name: 'Business Case Studies', status: 'Pending', date: 'May 26, 2026', type: 'Upload' },
                    ].map((activity) => (
                      <tr key={activity.name} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-8 py-5">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                            <span className="font-bold text-gray-900">{activity.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                            activity.status === 'Approved' ? 'bg-green-100 text-green-700' :
                            activity.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-gray-500 font-medium text-sm">{activity.date}</td>
                        <td className="px-8 py-5">
                          <button className="text-gray-400 hover:text-primary-600 transition-colors font-bold text-sm">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
