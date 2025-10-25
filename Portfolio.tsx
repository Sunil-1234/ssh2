
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-secondary max-w-3xl mx-auto">
            We have a proven track record of success with a variety of clients, from small startups to large enterprises. We are proud of our work and confident we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
