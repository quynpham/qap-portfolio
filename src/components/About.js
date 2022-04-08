import React from "react";
import profilepic from '../assets/profilepic.jpg';
import Skill from './Skill';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPostgresql, DiHeroku, DiRuby } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { SiRubyonrails, SiTailwindcss } from "react-icons/si";

const About = () => {
    const skills = [
    {id: 1, icon: <FaHtml5/>, name: "HTML" },
    {id: 2, icon: <FaCss3Alt/>, name: "CSS3" },
    {id: 3, icon: <FaBootstrap/>, name: "Bootstrap" },
    {id: 4, icon: <FaGitAlt/>, name: "Git" },
    {id: 5, icon: <FaReact/>, name: "ReactJS" },
    {id: 6, icon: <IoLogoJavascript/>, name: "Javascript ES6" },
    {id: 7, icon: <DiPostgresql/>, name: "PostgreSQL" },
    {id: 8, icon: <DiHeroku/>, name: "Heroku" },
    {id: 9, icon: <DiRuby/>, name: "Ruby" },
    {id: 10, icon: <FiGithub/>, name: "GitHub" },
    {id: 11, icon: <SiRubyonrails/>, name: "RubyonRails" },
    {id: 12, icon: <SiTailwindcss/>, name: "Tailwind CSS" }
    ]

  return (
  <section id="about" className="py-10 text-center md:px-20 md:text-left text-electricblue">
    <h2 className="text-electricblue text-5xl p-2">About</h2>
    <div className="p-3 md:p-5 md:flex flex-col">
      <div className="flex flex-col md:flex-row">
        <img src={profilepic} alt="profilepic" className="m-auto w-1/2 h-1/2 md:w-1/4 md:1/4 rounded-full"/>
        <p className="my-3 p-2 md:m-5 text-xs text-justify sm:text-base">Former communication officer in a concert venue, I made a life-changing decision by chosing to become a web developer. I enrolled in a 9-week fullstack web development bootcamp at <a href="https://www.lewagon.com/fr/brussels" target="_blank" rel="noreferrer" className="hover:text-limegreen">le Wagon Brussels</a> from wich I graduated in December 2021. It was intense but I loved learning HTML, CSS, Bootstrap, JavaScript ES6,
          SQL, git, GitHub, Heroku and Ruby on Rails. We also designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of <a href="#projects" className="hover:text-limegreen">RecyclAID</a>. I am currently working on improving my skills and understanding of Javascript and React. </p>
      </div>
      <div className="my-3 p-2 md:m-5">
        <h3 className="m-5">Skills & tools</h3>
        <ul className="grid grid-cols-3 md:grid-cols-6">
          {skills.map((skill) => <Skill key={skill.id} icon={skill.icon} name={skill.name}/>)}
        </ul>
      </div>
      <div className="place-self-center inline-block pt-10">
        <a
          href="#contact"
          className="text-center m-3 sm:text-base md:text-lg text-gray-50 bg-electricblue border border-electricblue py-2 px-4 focus:outline-none hover:bg-transparent hover:text-electricblue

          rounded">
          Let's have a chat!
        </a>
      </div>
    </div>
  </section>
  )
}

export default About;
