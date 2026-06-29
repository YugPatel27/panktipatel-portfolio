import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import LegalModal from './components/LegalModal';

function App() {
  const [legalType, setLegalType] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <CustomCursor />
      <Preloader />
      <Navbar onLegal={setLegalType} />
      <main style={{ background: 'var(--black)' }}>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer onLegal={setLegalType} />
      <ScrollToTop />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}

export default App;
