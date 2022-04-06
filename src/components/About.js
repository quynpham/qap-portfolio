import React from "react";
import profilepic from '../assets/profilepic.jpg';

const About = () => {
  return (
  <section id="about" className="py-10 text-center md:px-20 md:text-left">
    <h2 className="text-electricblue text-5xl p-2">About</h2>
    <div className="p-3 md:p-20 md:flex">
      <img src={profilepic} alt="profilepic" className="m-auto w-1/2 h-1/2 md:w-1/4 md:1/4 rounded-full"/>
      <p className="my-3 text-electricblue p-2 text-sm text-center sm:text-base md:text-lg md:m-5">Former communication officer in a concert venue, I have just completed a fullstack web development course at le Wagon Brussels in December 2021.
  Skilled in communication and customer oriented, I am looking forward to learn more programming languages and build new apps.</p>
    </div>
    <a
      href="#contact"
      className="inline-flex sm:text-base md:text-lg text-gray-50 bg-electricblue border border-electricblue py-2 px-4 focus:outline-none hover:bg-transparent hover:text-electricblue

       rounded">
      Let's have a chat!
    </a>
  </section>
  )
}

export default About;
