import React, { useState, useEffect } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo projects.json");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error al cargar los proyectos:", error));
  }, []);

  return (
    <section id="portfolio">
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
