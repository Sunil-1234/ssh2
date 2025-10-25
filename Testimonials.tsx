
import React from 'react';
import { TESTIMONIALS } from './constants';
import type { Testimonial } from './types';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-secondary max-w-3xl mx-auto">
            We are proud to have earned the trust of our clients. Here's what they have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-grow">
                <svg className="w-10 h-10 text-primary mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 8h-5.333v8h5.333c0-4.418-0-8-0-8zM28 8h-5.333v8h5.333c0-4.418-0-8-0-8zM25.333 18.667v-2.667h-18.667v2.667c0 2.945 2.389 5.333 5.333 5.333h8c2.945 0 5.333-2.389 5.333-5.333z" />
                </svg>
                <p className="text-secondary italic leading-relaxed mb-6">"{testimonial.feedback}"</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-secondary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
