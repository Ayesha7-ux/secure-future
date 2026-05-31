import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-black text-primary-900">Our Mission for Your Success</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Secure Future is more than just a resource website. It's a platform built by educators for students who dream big.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality Content', desc: 'Expertly curated notes and verified past paper solutions.', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
              { title: 'Accessibility', desc: 'Making high-quality education free and accessible to everyone.', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Academic Integrity', desc: 'Promoting ethical study habits and thorough understanding.', icon: Shield, color: 'text-green-600', bg: 'bg-green-50' },
              { title: 'Success Driven', desc: 'Focused on helping you achieve the grades you deserve.', icon: Target, color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`${value.bg} ${value.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Story */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-black text-primary-900">How It All Started</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2024, Secure Future began with a simple goal: to consolidate the scattered world of international education resources into a single, professional, and easy-to-use hub.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understood the pressure O Level and A Level students face. By providing topical past papers and verified mark schemes, we help reduce that stress and allow students to focus on what matters: learning.
              </p>
              <div className="pt-4">
                <button className="btn-primary">Join Our Community</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
