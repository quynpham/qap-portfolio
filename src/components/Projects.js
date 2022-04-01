import React from "react";
import recyclaidpic from "../assets/recyclaidpic.png";
import topletspic from "../assets/topletspic.png";

const Projects = () => {
  return (
    <section id="projects" className="w-screen mx-auto p-5 sm:p-10 md:p-16 bg-pistachio text-framboise">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <a href="http://www.recyclaid.xyz/" target="_blank" rel="noreferrer">
            <div className="relative">
              <img className="w-full" src={recyclaidpic} alt="homepage recyclaid"/>
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </div>
          </a>
          <a href="http://www.recyclaid.xyz/" target="_blank" rel="noreferrer">
            <div className="min-h-full px-6 py-4 bg-white">
                <h3 className="font-bold">RECYCLAID</h3>
                <span className="text-sm">Recyclaid is a platform where users can sell or buy cheaper construction materials in a sustainable way, contributing to the circular economy.
                  <br></br>
                  <em>Created by Kato de Lentacker, Dorian Della Faille and I during the bootcamp we followed at Le Wagon Brussels.</em>
                </span>
            </div>
          </a>
        </div>

        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <a href="https://toilets-airbnb.herokuapp.com/" target="_blank" rel="noreferrer">
            <div className="relative">
              <img className="w-full" src={topletspic} alt="homepage Toplets"/>
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </div>
          </a>
          <a href="https://toilets-airbnb.herokuapp.com/" target="_blank" rel="noreferrer">
            <div className="min-h-full px-6 py-4 bg-white">
                <h3 className="font-bold">TOPLETS</h3>
                <span className="text-sm">AirBnb clone but to rent toilets.
                  <br></br>
                  <em>Created by Kato de Lentacker, Dorian Della Faille and I during the bootcamp we followed at Le Wagon Brussels.</em>
                </span>
            </div>
          </a>
        </div>
      </div>
    </section>
)
}

export default Projects;
