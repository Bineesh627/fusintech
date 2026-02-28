import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-[#2D7FF9] selection:text-white overflow-x-hidden cursor-none">
        
        {/* Font & Global CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap');
          :root { --font-inter: 'Inter', sans-serif; --font-space-grotesk: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: var(--font-inter); }
          .font-display { font-family: var(--font-space-grotesk); }
          html, body { cursor: none !important; scroll-behavior: smooth; }
          a, button, input, select, textarea { cursor: none !important; }
          
          @keyframes shine {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .bg-mesh {
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            background-size: 60px 60px;
            background-position: center center;
          }
          
          .glass-panel {
            background: rgba(15, 17, 21, 0.4);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
        `}} />

        <CustomCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
