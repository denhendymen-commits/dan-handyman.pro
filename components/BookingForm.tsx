import React, { useState } from 'react';
import Button from './Button.tsx';
import { BookingStatus } from '../types.ts';

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<BookingStatus>(BookingStatus.IDLE);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(BookingStatus.SUBMITTING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(BookingStatus.SUCCESS);
    }, 1500);
  };

  if (status === BookingStatus.SUCCESS) {
    return (
      <section id="booking" className="py-24 bg-brand-light">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Request Received!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Thanks for choosing Dan Handyman. I'll review your request and call you within 24 hours to confirm.
          </p>
          <Button onClick={() => setStatus(BookingStatus.IDLE)} variant="outline">
            Book Another Job
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-brand-light relative border-t border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-heading font-bold text-brand-dark tracking-tight sm:text-4xl mb-6">
              Ready to Fix It?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Skip the phone tag. Fill out the form, and I'll get back to you to confirm a time that works for you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group p-4 rounded-xl hover:bg-white transition-all border border-transparent hover:border-brand-accent hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary border border-brand-primary/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <p className="text-lg font-bold text-brand-dark font-heading">(415) 509-8778</p>
                </div>
              </div>
              <div className="flex items-center group p-4 rounded-xl hover:bg-white transition-all border border-transparent hover:border-brand-accent hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary border border-brand-primary/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-lg font-bold text-brand-dark font-heading">danhandyman.email@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-brand-accent shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" required className="block w-full rounded-lg bg-slate-50 border border-slate-300 text-slate-900 py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" required className="block w-full rounded-lg bg-slate-50 border border-slate-300 text-slate-900 py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" required className="block w-full rounded-lg bg-slate-50 border border-slate-300 text-slate-900 py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select id="serviceType" className="block w-full rounded-lg bg-slate-50 border border-slate-300 text-slate-900 py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all">
                  <option>General Repair</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Carpentry</option>
                  <option>Painting</option>
                  <option>Assembly</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="jobDetails" className="block text-sm font-medium text-slate-700 mb-1">Job Details</label>
                <textarea id="jobDetails" rows={4} className="block w-full rounded-lg bg-slate-50 border border-slate-300 text-slate-900 py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"></textarea>
              </div>

              <Button type="submit" disabled={status === BookingStatus.SUBMITTING} className="w-full">
                {status === BookingStatus.SUBMITTING ? 'Sending Request...' : 'Book Appointment'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;