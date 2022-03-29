import React from "react";

const About = () => {
  return (
  <section id="about">
    <h2 className="text-lg p-2">About</h2>
    <p className="text-sm p-2">Former communication officer in a concert venue, I have just completed a fullstack web development course at le Wagon Brussels.
Skilled in communication and customer oriented, I am looking forward to learn more programming languages and build new apps.</p>
    <a
      href="#contact"
      className="inline-flex text-xs text-white bg-green-900 border-0 py-2 px-4 focus:outline-none hover:bg-pink-200 hover:text-green-900

       rounded">
      Let's have a chat!
    </a>
  </section>
  )
}

export default About;
