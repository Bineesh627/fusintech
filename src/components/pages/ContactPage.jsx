import React, { useEffect } from 'react';
import Contact from '../sections/Contact';

const ContactPage = () => {
  // Ensure we scroll to top when visiting a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
};

export default ContactPage;
