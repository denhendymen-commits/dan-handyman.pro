import React from 'react';
import Button from './Button.tsx';

interface HeroProps {
  onCtaClick: () => void;
  onSecondaryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center text-center bg-brand-light">
      {/* Background decoration - Lighter & Airy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Profile Avatar / Logo Style - Resized to 5x5 (w-20 h-20 in tailwind is 5rem) */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-accent shadow-xl mx-auto bg-white flex items-center justify-center">
             {/* 
                User uploaded logo.png should be placed in the public/root directory.
             */}
            <img 
              className="w-full h-full object-cover" 
              src="logo.png" 
              alt="Dan Handyman Logo" 
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-brand-accent text-brand-dark text-xs font-bold tracking-widest uppercase whitespace-nowrap">
            Est. 5 Years
          </div>
        </div>

        <h1 className="text-5xl tracking-tight font-extrabold text-brand-dark sm:text-6xl md:text-7xl font-heading leading-tight mb-4 mt-4">
          DAN HANDYMAN
        </h1>
        
        <p className="text-2xl md:text-3xl text-brand-primary font-heading font-medium mb-6">
          "Getting It Done Right."
        </p>

        <p className="max-w-xl mx-auto text-lg text-slate-600 leading-relaxed mb-10">
          Professional repairs, honest communication, and pricing that makes sense. Serving the local area with pride and precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button onClick={onCtaClick} size="lg" className="w-full sm:w-64">
            Get AI Estimate
          </Button>
          <Button onClick={onSecondaryClick} variant="outline" size="lg" className="w-full sm:w-64">
            Book Appointment
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-8 text-slate-500 text-sm">
          <div className="flex items-center">
             <svg className="w-5 h-5 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center">
             <svg className="w-5 h-5 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             <span>Fast Response</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;