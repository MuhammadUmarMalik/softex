import React from "react";
import ProjectsCard from "./ProjectCard"; // Import the ProjectsCard component
import projects from "./projects.json"; // Import the JSON data

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
        My Projects
      </h1>
      <ProjectsCard projects={projects} />
    </div>
  );
};

export default Projects;
