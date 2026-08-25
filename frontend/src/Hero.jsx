import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/PaginaInicial/HeroSection';

function Hero() {
  return (
    <div className="page-shell">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Hero;
