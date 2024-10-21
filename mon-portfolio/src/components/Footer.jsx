import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 [Ton Nom] - Tous droits réservés.</p>
      <div className="mt-2">
        <a href="https://linkedin.com" className="hover:text-gray-400 mx-2">LinkedIn</a> | 
        <a href="https://github.com" className="hover:text-gray-400 mx-2">GitHub</a> | 
        <a href="mailto:tonemail@example.com" className="hover:text-gray-400 mx-2">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
