import React from "react";
import { FaPaw } from 'react-icons/fa';
import { GiSewingMachine, GiCoffeeCup, GiChiliPepper, GiMicrophone } from "react-icons/gi";

const Home = () => {
  return (
<section id="home" className="h-screen relative text-limegreen bg-electricblue">
    <h1 className="absolute flex flex-col p-2 pl-8 pt-64 m-auto md:pl-24 lg:pl-32 lg:pt-36 xl:pt-48">
      <span className="text-xl md:text-5xl lg:text-6xl py-2">Hi, my name is</span>
      <span className="text-2xl md:text-6xl lg:text-7xl py-2"><strong>QUYNH ANH PHAM.</strong></span>
      <span className="text-xl md:text-5xl lg:text-6xl py-2">I'm a full-stack web developer</span>
      {/* <strong className="text-2xl md:text-5xl lg:text-6xl ">web developer</strong> */}
      <span className="container-flip h-20 py-2">
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and coffee addict <GiCoffeeCup className="inline-block align-top" /></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and cat lover <FaPaw className="inline-block align-top"/></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and choir singer <GiMicrophone className="inline-block align-top" /></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and sewista <GiSewingMachine className="inline-block align-top"/></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and spicy food eater <GiChiliPepper className="inline-block align-top"/></span>
      </span>
    </h1>
</section>
  )
}

export default Home;
