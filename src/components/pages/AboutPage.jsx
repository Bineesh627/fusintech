import React, { useEffect } from 'react';
import Founder from '../sections/Founder';
import Team from '../sections/Team';

const AboutPage = () => {
  // Ensure we scroll to top when visiting a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0A0C10] min-h-screen">
      <Founder />
      <Team />
    </main>
  );
};

export default AboutPage;
