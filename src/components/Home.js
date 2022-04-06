import React from "react";
import { FaPaw } from 'react-icons/fa';
import { GiSewingMachine, GiCoffeeCup, GiChiliPepper, GiMicrophone } from "react-icons/gi";

const Home = () => {
  return (
<section id="home" className="h-screen text-limegreen bg-electricblue">
    <div className="p-2 pl-8 pt-72 m-auto md:pt-96 md:pl-24 lg:pl-32 lg:pt-36 xl:pt-48">
      <h1 className="text-xl md:text-5xl lg:text-6xl py-2">Hi, my name is</h1>
      <h1 className="text-2xl md:text-6xl lg:text-7xl py-2"><strong>QUYNH ANH PHAM.</strong></h1>
      <h1 className="text-xl md:text-5xl lg:text-6xl py-2">I'm a full-stack web developer</h1>
      {/* <strong className="text-2xl md:text-5xl lg:text-6xl ">web developer</strong> */}
      <span className="container-flip h-20 py-2">
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and coffee addict <GiCoffeeCup className="inline-block align-top" /></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and cat lover <FaPaw className="inline-block align-top"/></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and choir singer <GiMicrophone className="inline-block align-top" /></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and sewista <GiSewingMachine className="inline-block align-top"/></span>
        <span className="flip text-xl md:text-5xl lg:text-6xl ">and spicy food eater <GiChiliPepper className="inline-block align-top"/></span>
      </span>
    </div>
</section>
  )
}

export default Home;
