import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description rapide du projet 1.',
      image: 'https://via.placeholder.com/300',
      link: 'https://exemple.com/projet1'
    },
    {
      title: 'Projet 2',
      description: 'Description rapide du projet 2.',
      image: 'https://via.placeholder.com/300',
      link: 'https://exemple.com/projet2'
    },
    {
      title: 'Projet 3',
      description: 'Description rapide du projet 3.',
      image: 'https://via.placeholder.com/300',
      link: 'https://exemple.com/projet3'
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 my-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
