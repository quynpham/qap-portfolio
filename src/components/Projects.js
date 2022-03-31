import React from "react";
import recyclaidpic from "../assets/recyclaidpic.png";
import toplets from "../assets/toplets.png";

const Projects = () => {
  return (
    <section id="projects" className="h-screen py-10 text-center md:px-20 md:text-left bg-pistachio text-framboise">
      <h2>Projects</h2>
      <div className="md:grid md:grid-cols-2">
        <div className="py-10 flex flex-col w-[340px] h-[460px] m-0.5 border-0 shadow-sm rounded-sm text-base">
          <a href="http://www.recyclaid.xyz/" target="_blank" rel="noreferrer">
            <span className="box-border relative inline-block min-h-full">
              <img src={recyclaidpic} alt="recyclaid homepage" className="absolute box-border block m-auto min-h-full max-h-full min-w-max max-w-max"/>
            </span>
            <div className="p-3 flex flex-col bg-white">
              <h3 className="font-bold">RECYCLAID</h3>
              <span className="text-sm">Recyclaid is a platform where users can sell or buy cheaper construction materials in a sustainable way, contributing to the circular economy.</span>
              <span className="text-sm">We worked together with Dorian Della Faille and Kato De Lentacker on this spanroject during the final two weeks of the bootcamp we followed at Le Wagon in Brussels.</span>
            </div>
          </a>
        </div>
        <div className="py-10 flex flex-col w-[340px] h-[460px] m-0.5 border-0 shadow-sm rounded-sm text-base">
          <a href="https://toilets-airbnb.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={toplets} alt="toplets homepage"/>
            <div className="p-3 flex flex-col bg-white">
              <h3 className="font-bold">TOPLETS</h3>
              <span className="text-sm">Recyclaid is a platform where users can sell or buy cheaper construction materials in a sustainable way, contributing to the circular economy.</span>
              <span className="text-sm">We worked together with Dorian Della Faille and Kato De Lentacker on this spanroject during the final two weeks of the bootcamp we followed at Le Wagon in Brussels.</span>
            </div>
          </a>
        </div>
      </div>
    </section>
)
}

export default Projects;
