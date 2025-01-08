
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Work = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the projects!', error);
            });
    }, []);

    return (
        <div className="work-page">
            <h1>My Work</h1>
            <p>Here you can see all my projects!</p>
            <div className="projects-list">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;*/


import React from 'react';

const Work = () => {
  return (
    <div className="work-page">
      <h1>My Work</h1>
      <p>Here you can see all my projects!</p>
      {/* Aquí puedes mapear los proyectos desde la API */}
      </div>
    );
  };
  
  export default Work;
  