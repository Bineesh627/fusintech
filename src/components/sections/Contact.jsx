import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0F1115] relative">
      {/* Background glow for form */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#2D7FF9]/10 rounded-[100%] blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <Reveal direction="down" className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Initiate Collaboration.</h2>
          <p className="text-[#A0A0A0] text-xl max-w-2xl mx-auto">Secure a direct line to our architectural team for enterprise deployment and strategic partnerships.</p>
        </Reveal>
        
        <Reveal delay={200} direction="up">
          <SpotlightCard className="p-8 md:p-12 border-white/10 glass-panel shadow-2xl interactive-element">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <input type="text" id="name" required className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#2D7FF9] transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2D7FF9] peer-valid:-top-4 peer-valid:text-xs">Full Name / Organization</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#2D7FF9] transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2D7FF9] peer-valid:-top-4 peer-valid:text-xs">Corporate Email</label>
                </div>
              </div>
              
              <div className="mb-8 relative">
                 <select className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2D7FF9] transition-colors appearance-none cursor-none hover:bg-white/5">
                  <option className="bg-[#0F1115]">Enterprise Sector</option>
                  <option className="bg-[#0F1115]">Government / Defense</option>
                  <option className="bg-[#0F1115]">Research / Quantum</option>
                  <option className="bg-[#0F1115]">Investor Relations</option>
                </select>
              </div>

              <div className="mb-10 relative group">
                <textarea id="message" required rows="4" className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#2D7FF9] transition-colors resize-none peer placeholder-transparent" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2D7FF9] peer-valid:-top-4 peer-valid:text-xs">Nature of Inquiry</label>
              </div>
              
              <MagneticButton variant="primary" className="w-full py-5 text-lg justify-center shadow-lg">
                Submit Encrypted Protocol <ArrowRight size={20}/>
              </MagneticButton>
            </form>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
