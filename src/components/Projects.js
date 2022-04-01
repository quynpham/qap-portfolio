import React from "react";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <section id="projects" className="w-screen mx-auto p-5 sm:p-10 md:p-16 bg-pistachio text-framboise">
      <h2>Projects</h2>
      {ProjectsData.map((Project) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="max-w-md rounded overflow-hidden shadow-lg">
            <a href={Project.link} target="_blank" rel="noreferrer">
              <div className="relative">
                <img className="w-full" src={Project.image} alt={Project.title}/>
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </div>
            </a>
            <a href={Project.link} target="_blank" rel="noreferrer">
              <div className="min-h-full px-6 py-4 bg-white">
                  <h3 className="font-bold">{Project.title}</h3>
                  <span className="text-sm">{Project.description}
                    <em>{Project.credits}</em>
                  </span>
              </div>
            </a>
          </div>
        </div>
      ))
      }
    </section>
  )
}

export default Projects;
