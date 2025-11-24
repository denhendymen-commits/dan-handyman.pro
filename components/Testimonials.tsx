import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "Dan saved the day when my kitchen pipe burst. He arrived within an hour, fixed it quickly, and cleaned up everything afterward. Highly recommended!",
    author: "Sarah Jenkins",
    role: "Homeowner",
    stars: 5
  },
  {
    id: 2,
    content: "I used the AI estimate feature on the site, and it was surprisingly accurate! Dan was professional and the final bill matched the quote perfectly.",
    author: "Mike Thompson",
    role: "Local Business Owner",
    stars: 5
  },
  {
    id: 3,
    content: "Honest pricing and great workmanship. It's hard to find a handyman you can trust these days, but Dan is the real deal.",
    author: "Emily Chen",
    role: "Real Estate Agent",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center mb-16 text-brand-dark">
          Trust & <span className="text-brand-primary">Testimonials</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-light p-8 rounded-xl shadow-md border border-brand-accent flex flex-col justify-between hover:shadow-xl hover:border-brand-primary/50 transition-all duration-300">
              <div>
                <div className="flex mb-4 text-brand-primary">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center font-bold text-brand-primary border border-brand-accent shadow-sm">
                    {t.author.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-brand-dark">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;