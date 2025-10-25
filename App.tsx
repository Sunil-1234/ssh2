
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Admin from './Admin';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (route === '#/admin') {
    return <Admin />;
  }

  return (
    <div className="bg-light font-poppins text-gray-700">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
