import React, { useState, useRef } from 'react';
import Button from './Button.tsx';
import { generateEstimate, fileToBase64 } from '../services/geminiService.ts';
import { EstimateResponse } from '../types.ts';

const AIEstimator: React.FC = () => {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EstimateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview
      const base64 = await fileToBase64(file);
      setImagePreview(base64);
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setError("Please describe the issue.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      let imageBase64 = undefined;
      if (selectedFile) {
        imageBase64 = await fileToBase64(selectedFile);
      }

      const estimate = await generateEstimate(description, imageBase64);
      setResult(estimate);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-24 bg-white border-t border-brand-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-brand-accent overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-brand-primary to-orange-400"></div>
          
          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-primary/10 text-brand-dark text-sm font-bold mb-4 border border-brand-primary/20">
                ✨ AI-Powered Estimate
              </span>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Rough Quote Generator</h2>
              <p className="text-slate-600">
                Describe your problem or upload a photo. Dan's AI assistant will provide an instant price range and difficulty assessment.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-slate-900 placeholder-slate-400 transition-colors"
                    placeholder="e.g., The pipe under the kitchen sink is leaking water onto the cabinet floor..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Photo Evidence (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:border-brand-primary hover:bg-slate-50 transition-colors bg-white cursor-pointer group"
                       onClick={() => fileInputRef.current?.click()}>
                    <div className="space-y-1 text-center">
                      {imagePreview ? (
                         <div className="relative inline-block">
                           <img src={imagePreview} alt="Preview" className="h-48 object-contain rounded-md mx-auto shadow-sm" />
                           <button
                             type="button"
                             onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}
                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-md"
                           >
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                           </button>
                         </div>
                      ) : (
                        <>
                          <svg className="mx-auto h-12 w-12 text-slate-400 group-hover:text-brand-primary transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex text-sm text-slate-500 justify-center">
                            <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-brand-primary hover:text-orange-600 focus-within:outline-none">
                              <span>Upload a file</span>
                            </span>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                        </>
                      )}
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <Button type="submit" disabled={loading} className="w-full flex justify-center" size="lg">
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </span>
                  ) : "Generate Estimate"}
                </Button>
              </form>

              {/* Results Display */}
              {result && (
                <div className="mt-8 bg-slate-50 border border-brand-accent rounded-xl p-6 animate-fade-in-up shadow-inner">
                   <div className="flex items-center justify-between mb-4 pb-4 border-b border-brand-accent">
                     <h3 className="text-xl font-bold text-brand-dark font-heading">Estimated Cost</h3>
                     <span className="text-3xl font-bold text-brand-secondary">{result.estimatedPriceRange}</span>
                   </div>
                   
                   <div className="space-y-4">
                     <div>
                       <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide mb-1">Analysis</h4>
                       <p className="text-slate-600">{result.explanation}</p>
                     </div>

                     <div className="flex gap-6">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide mb-1">Difficulty</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-slate-200 rounded-full h-2.5 mr-2">
                              <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: `${result.difficultyLevel * 10}%` }}></div>
                            </div>
                            <span className="text-sm font-bold text-slate-700">{result.difficultyLevel}/10</span>
                          </div>
                        </div>
                     </div>

                     <div>
                       <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide mb-2">Likely Materials</h4>
                       <div className="flex flex-wrap gap-2">
                         {result.materialsNeeded.map((item, idx) => (
                           <span key={idx} className="bg-white border border-slate-300 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded shadow-sm">
                             {item}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>

                   <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-yellow-800 font-medium italic">
                        Disclaimer: {result.disclaimer}
                      </p>
                   </div>
                   
                   <div className="mt-6 text-center">
                      <p className="text-sm text-slate-500 mb-3">Happy with this range?</p>
                      <Button variant="secondary" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Dan Now
                      </Button>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEstimator;