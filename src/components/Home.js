import React from "react";

const Home = () => {
  return (
<section id="home" className="h-screen text-seeweed bg-framboise">
    <div className="p-2 pl-8 pt-72 m-auto md:pt-96 md:pl-24 lg:pl-32 lg:pt-48">
      <h1 className="text-2xl md:text-5xl lg:text-7xl py-2">Hi, I'm Quynh Anh !</h1>
      <h1 className="text-2xl md:text-5xl lg:text-7xl py-2">I'm a <strong className="text-2xl md:text-5xl lg:text-7xl ">full-stack</strong></h1>
      <strong className="text-2xl md:text-5xl lg:text-7xl ">web developer</strong>
      <span className="container-flip h-20 py-2">
        <span className="flip text-2xl md:text-5xl lg:text-7xl ">and coffee addict ☕</span>
        <span className="flip text-2xl md:text-5xl lg:text-7xl ">and cat lover 🐾</span>
        <span className="flip text-2xl md:text-5xl lg:text-7xl ">and choir singer 🎙</span>
        <span className="flip text-2xl md:text-5xl lg:text-7xl ">and sewista 🧵</span>
        <span className="flip text-2xl md:text-5xl lg:text-7xl ">and spicy food eater 🌶</span>
      </span>
    </div>
</section>
  )
}

export default Home;
