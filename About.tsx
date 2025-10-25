
import React from 'react';
import { BELIEFS } from './constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-secondary max-w-3xl mx-auto">
            We are a software development company that specializes in creating custom software solutions for businesses of all sizes. Our experienced team is passionate about creating high-quality software that meets the specific needs of our clients.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0 animate-fade-in-up">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Our team collaborating" className="rounded-lg shadow-2xl" />
            </div>
            <div className="w-full lg:w-1/2 px-4">
                {BELIEFS.map((belief, index) => (
                    <div key={belief.title} className="flex items-start mb-8 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                            {belief.icon}
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-semibold text-dark mb-2">{belief.title}</h3>
                            <p className="text-secondary leading-relaxed">{belief.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
