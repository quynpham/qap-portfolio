import React from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen ] = useState(false)

  const handleToggle = () => setNavbarOpen(!navbarOpen)

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return(
    <nav>
      <div className="text-limegreen text-xl fixed w-screen flex justify-between z-40 wrapper p-4 sm:text-4xl md:text-5xl lg:text-6xl">
        <a href="/" className="">Home</a>
        <button onClick={handleToggle} className="">{ navbarOpen ? <IoMdClose/> : <BiMenuAltRight/> }</button>
      </div>
      <div className="flex flex-col wrapper">
        <ul className={`overflow-hidden fixed top-0 left-0 bottom-0 h-screen z-30 bg-gray-50 ${navbarOpen ? "showMenu w-full md:2/3" : "w-0"}`}>
          <li className="text-electricblue text-3xl text-center py-4 mt-32 mb-4 border-b border-limegreen">
            <a href="#about"
            className="px-1"
            onClick={() => closeMenu()}
            >
            About</a>
          </li>
          <li className="text-electricblue text-3xl text-center py-4 mb-4 border-b border-limegreen">
            <a href="#projects" className="px-1"
            onClick={() => closeMenu()}>Projects</a>
          </li>
          <li className="text-electricblue text-3xl text-center py-4 mb-4 border-b border-limegreen">
            <a href="#contact" className="px-1"
            onClick={() => closeMenu()}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
