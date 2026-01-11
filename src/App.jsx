import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden selection:bg-purple-200">

      {/* Global Vignette / Glow Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-blue-100/30 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-[150px] bg-gradient-to-t from-blue-100/30 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <OurStory />
          <Services />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
