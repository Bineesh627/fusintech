import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Innovations from '../sections/Innovations';
import TrustStrip from '../sections/TrustStrip';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Innovations />
      <TrustStrip />
    </main>
  );
};

export default HomePage;
