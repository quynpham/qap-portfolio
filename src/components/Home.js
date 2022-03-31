import React from "react";

const Home = () => {
  return (
<section id="home">
    <div className="wrapper text-framboise bg-pistachio h-screen pt-40 px-20 lg:pt- lg:px-48">
      <h1 className="text-lg md:text-xl lg:text-4xl">Hi, I'm Quynh Anh !</h1>
      <h1 className="text-lg md:text-xl lg:text-4xl">I'm a <strong className="text-lg md:text-lg lg:text-4xl">fullstack web developer</strong></h1>
      <span className="container-flip h-8 lg:h-14">
        <span className="flip text-lg md:text-xl lg:text-4xl">and coffee addict ☕</span>
        <span className="flip text-lg md:text-xl lg:text-4xl">and cat lover 🐾</span>
        <span className="flip text-lg md:text-xl lg:text-4xl">and choir singer 🎙</span>
        <span className="flip text-lg md:text-xl lg:text-4xl">and sewista 🧵</span>
        <span className="flip text-lg md:text-xl lg:text-4xl">and spicy food eater 🌶</span>
      </span>
    </div>
</section>
  )
}

export default Home;
