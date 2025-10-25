
import React, { useState } from 'react';
import type { Testimonial } from '../types';

const Admin: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [feedback, setFeedback] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company || !feedback) {
      setError('All fields are required to generate the code.');
      setGeneratedCode('');
      return;
    }

    const newTestimonial: Testimonial = { name, company, feedback };
    const codeString = `{\n  name: '${name.replace(/'/g, "\\'")}',\n  company: '${company.replace(/'/g, "\\'")}',\n  feedback: '${feedback.replace(/'/g, "\\'")}'\n},`;
    
    setGeneratedCode(codeString);
    setError('');
  };

  const inputStyles = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-light flex items-center justify-center p-4 font-poppins">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl">
        <div className="text-center mb-8">
            <a href="/#" className="text-2xl font-bold text-gray-800">
              SSH <span className="text-primary">SoftTech</span>
            </a>
            <h1 className="text-2xl font-bold text-dark mt-4">Admin Panel</h1>
            <p className="text-secondary">Generate Testimonial Code</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="font-semibold text-lg text-dark mb-4">1. Enter Testimonial Details</h2>
                <form onSubmit={handleGenerate} className="space-y-6">
                <div>
                    <label htmlFor="name" className={labelStyles}>Client Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className={inputStyles} placeholder="e.g., Aarav Sharma" />
                </div>
                <div>
                    <label htmlFor="company" className={labelStyles}>Company Name</label>
                    <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} className={inputStyles} placeholder="e.g., Innovate India" />
                </div>
                <div>
                    <label htmlFor="feedback" className={labelStyles}>Feedback</label>
                    <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={5} className={inputStyles} placeholder="Enter the client's feedback..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Generate Code
                </button>
                </form>
                 {error && (
                    <p className="mt-4 text-center text-sm font-medium text-red-600">
                        {error}
                    </p>
                )}
            </div>

            <div>
                <h2 className="font-semibold text-lg text-dark mb-4">2. Copy & Send to Developer</h2>
                <p className="text-sm text-secondary mb-4">Copy the code below and send it to your developer to add it to the website.</p>
                <textarea 
                    readOnly 
                    value={generatedCode} 
                    className="w-full h-64 bg-gray-900 text-green-400 font-mono p-4 rounded-lg text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Generated code will appear here..."
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
