import React from "react";
import recyclaidpic from "../assets/recyclaidpic.png";
import toplets from "../assets/toplets.png";

const Projects = () => {
  return (
    <section id="projects" className="h-screen py-10 text-center md:px-20 md:text-left bg-pistachio text-framboise">
      <h2>Projects</h2>
      <div className="md:grid md:grid-cols-2">
        <div class="flex flex-wrap justify-center width-full my-5 mr-20">
          <div class="w-72 m-2.5 bg-white shadow-sm">
            <figure class="card__thumb">
              <img src={recyclaidpic} alt="recyclaidpic" className="-translate-y-2.5"/>
              <figcaption className="hover:top-1/2 hover:-translate-y-1/2">
                <h2 class="card__title">RECYCLAID</h2>
                <p class="my-5">Recyclaid is a platform where users can sell or buy cheaper construction materials in a sustainable way, contributing to the circular economy. Dorian Della Faille, Kato De Lentacker and I worked on this project together during the final two weeks of the bootcamp we followed at Le Wagon in Brussels.</p>
                <a href="http://www.recyclaid.xyz/" target="_blank" rel="noreferrer">Read more</a>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="py-10 flex flex-col w-[340px] h-[460px] m-0.5 border-0 shadow-sm rounded-sm text-base">
          <span style={{backgroundImage:`url(${recyclaidpic})`, backgroundRepeat:"no-repeat" ,backgroundSize:"contain", width:340}}></span>
          <a href="http://www.recyclaid.xyz/" target="_blank" rel="noreferrer">
            <div className="p-3 flex flex-col bg-white">
              <h3 className="font-bold">RECYCLAID</h3>
              <span className="text-sm">Recyclaid is a platform where users can sell or buy cheaper construction materials in a sustainable way, contributing to the circular economy.</span>
              <span className="text-sm">We worked together with Dorian Della Faille and Kato De Lentacker on this spanroject during the final two weeks of the bootcamp we followed at Le Wagon in Brussels.</span>
            </div>
          </a>
        </div>
        <div className="py-10 flex flex-col w-[340px] h-[460px] m-0.5 border-0 shadow-sm rounded-sm text-base">
          <a href="https://toilets-airbnb.herokuapp.com/" target="_blank" rel="noreferrer">
            <span style={{backgroundImage:`url(${toplets})`}} className="box-border relative inline-block min-h-full"></span>
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
