import React from "react";
import profilepic from '../assets/profilepic.jpg';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPostgresql, DiHeroku, DiRuby } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { SiRubyonrails, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
  <section id="about" className="py-10 text-center md:px-20 md:text-left">
    <h2 className="text-electricblue text-5xl p-2">About</h2>
    <div className="p-3 md:p-5 md:flex">
      <img src={profilepic} alt="profilepic" className="m-auto w-1/2 h-1/2 md:w-1/4 md:1/4 rounded-full"/>
      <div className="my-3 p-2 md:m-5  text-electricblue">
        <p className="text-xs text-justify sm:text-base">Former communication officer in a concert venue, I made a life-changing decision by chosing to become a web developer. I enrolled in a 9-week fullstack web development bootcamp at <a href="https://www.lewagon.com/fr/brussels" target="_blank" rel="noreferrer">le Wagon Brussels</a> from wich I graduated in December 2021. It was intense but I loved this 9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
        SQL, git, GitHub, Heroku and Ruby on Rails. We also designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of <a href="#projects">RecyclAID</a>. I am currently working on improving my skills and understanding of Javascript and React. </p>
        <div>
          <h3 className="text-electricblue">Skills & tools</h3>
          <ul className="grid grid-cols-3 md:grid-cols-6">
            <li className="p-3"><FaHtml5 className="text-5xl"/>HTML</li>
            <li className="p-3"><FaCss3Alt  className="text-5xl"/>CSS3</li>
            <li className="p-3"><FaBootstrap  className="text-5xl"/>Bootstrap</li>
            <li className="p-3"><IoLogoJavascript  className="text-5xl"/>Javascript</li>
            <li className="p-3"><DiPostgresql  className="text-5xl"/>PostgreSQL</li>
            <li className="p-3"><FaGitAlt  className="text-5xl"/>Git</li>
            <li className="p-3"><FiGithub  className="text-5xl"/>GitHub</li>
            <li className="p-3"><DiHeroku  className="text-5xl"/>Heroku</li>
            <li className="p-3"><DiRuby  className="text-5xl"/>Ruby</li>
            <li className="p-3"><SiRubyonrails  className="text-5xl"/>Rails</li>
            <li className="p-3"><SiTailwindcss  className="text-5xl"/>Tailwindcss</li>
            <li className="p-3"><FaReact  className="text-5xl"/>React</li>
          </ul>
        </div>
        <a
          href="#contact"
          className="inline-flex m-3 sm:text-base md:text-lg text-gray-50 bg-electricblue border border-electricblue py-2 px-4 focus:outline-none hover:bg-transparent hover:text-electricblue

          rounded">
          Let's have a chat!
        </a>
      </div>
    </div>
  </section>
  )
}

export default About;
