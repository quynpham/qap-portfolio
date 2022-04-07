import React from "react";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto py-10 sm:p-10 md:p-16 md:text-left bg-electricblue">
      <h2 className="text-center text-5xl p-2 text-limegreen md:text-left">Projects</h2>
      <div className="grid grid-cols-1 p-3 md:py-20 md:grid-cols-2 gap-10">
        {ProjectsData.map((Project) => (
          <div key={Project.id} className="rounded overflow-hidden shadow-lg text-electricblue">
            <a href={Project.link} target="_blank" rel="noreferrer">
              <div className="relative">
                <img className="w-full" src={Project.image} alt={Project.title}/>
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </div>
            </a>
            <a href={Project.link} target="_blank" rel="noreferrer">
              <div className="h-full px-6 py-4 flex flex-col bg-white">
                  <h3 className="font-bold pb-2">{Project.title}</h3>
                  <span className="py-2 text-sm">{Project.description}</span>
                  <em className="py-2 text-sm">{Project.credits}</em>
              </div>
            </a>
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default Projects;
