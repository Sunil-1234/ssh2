
import React from 'react';
import { SERVICES } from './constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-secondary max-w-3xl mx-auto">
            We offer a wide range of services, from custom software and mobile app development to web development and consulting. We have the expertise to help you with your software development strategy and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up border-b-4 border-transparent hover:border-primary"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
