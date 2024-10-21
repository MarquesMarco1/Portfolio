import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Accueil</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projets</a></li>
          <li><a href="#about" className="hover:text-gray-400">Parcours</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
