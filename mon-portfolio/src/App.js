import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects /> {/* Ajout de la section des projets */}
      <Footer />
    </div>
  );
}

export default App;
