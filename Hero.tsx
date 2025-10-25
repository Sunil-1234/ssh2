
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Bringing Your Ideas to Life Through Technology
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-gray-200">
          We are a team of passionate developers, designers, and strategists dedicated to helping our clients succeed. We use technology as a powerful tool to make a positive impact on the world.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfldhHElQujTTyGgSx_T_SJERlumJYSQtGSNOMR9Kz7zYWI_A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
