import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-gray-100 flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Bonjour, je suis [Ton Nom]</h1>
        <p className="text-xl mb-6">Développeur Web Full-Stack passionné par la création d'expériences numériques modernes.</p>
        <a href="#projects" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Voir mes projets</a>
      </div>
    </section>
  );
};

export default Hero;
