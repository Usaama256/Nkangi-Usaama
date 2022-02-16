import React from "react";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../store/data";


const Projects = () => {
  return (
    <section className="project-section">
      <h1 className="project-heading">some of my projects</h1>
      <div className="project-container">
        {projects.map((project) => {
            return(
                <ProjectCard key={project.id} projectDetails={project}/>
            );
        })}
      </div>
    </section>
  );
};

export default Projects;
