import React from 'react';
import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import AIEstimator from './components/AIEstimator.tsx';
import BookingForm from './components/BookingForm.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-text">
      <NavBar onNavigate={scrollToSection} />
      
      <main>
        <Hero 
          onCtaClick={() => scrollToSection('estimator')} 
          onSecondaryClick={() => scrollToSection('booking')}
        />
        <Services />
        <Projects />
        <AIEstimator />
        <Testimonials />
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;