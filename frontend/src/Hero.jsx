import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/PaginaInicial/HeroSection';
import FooterList from './components/FooterList';

function Hero() {
  return (
    <div className="page-shell">
      <Navbar />
      <HeroSection />
      <FooterList />
    </div>
  );
}

export default Hero;
