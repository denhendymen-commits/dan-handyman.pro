import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-accent">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-heading italic">DAN<span className="text-brand-primary not-italic ml-1">HANDYMAN</span></h3>
            <p className="text-sm leading-relaxed">Reliable, professional, and friendly handyman services for your home and business. We take pride in getting it done right the first time.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-heading">Contact Info</h3>
            <p className="text-sm mb-3 flex items-center"><span className="w-6">📞</span> (415) 509-8778</p>
            <p className="text-sm mb-3 flex items-center"><span className="w-6">✉️</span> danhandyman.email@gmail.com</p>
            <p className="text-sm flex items-center"><span className="w-6">📍</span> Serving the Bay Area</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-heading">Working Hours</h3>
            <p className="text-sm mb-2 text-slate-300">Mon - Fri: <span className="text-slate-500">8am - 6pm</span></p>
            <p className="text-sm mb-2 text-slate-300">Sat: <span className="text-slate-500">9am - 2pm</span></p>
            <p className="text-sm text-slate-300">Sun: <span className="text-brand-primary">Closed</span></p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dan Handyman Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;