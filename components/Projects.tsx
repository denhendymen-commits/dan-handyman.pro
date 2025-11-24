import React from 'react';

const projects = [
  {
    id: 1,
    image: 'project1.jpg',
    title: 'Kitchen Remodel',
    category: 'Renovation'
  },
  {
    id: 2,
    image: 'project2.jpg',
    title: 'Parquet Flooring',
    category: 'Flooring'
  },
  {
    id: 3,
    image: 'project3.jpg',
    title: 'Bedroom Finishing',
    category: 'Painting & Drywall'
  },
  {
    id: 4,
    image: 'project4.jpg',
    title: 'Interior Updates',
    category: 'General Repairs'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-brand-light relative border-t border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-semibold tracking-wide uppercase text-sm mb-2">Our Portfolio</h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading">
            Recent Projects
          </p>
          <div className="h-1 w-20 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Take a look at some of our recent renovation, flooring, and painting jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-brand-accent bg-white transition-all duration-300">
              <div className="aspect-w-16 aspect-h-12 w-full h-80 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="inline-block px-3 py-1 bg-brand-primary text-brand-dark text-xs font-bold rounded-full mb-2 shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white drop-shadow-md">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;