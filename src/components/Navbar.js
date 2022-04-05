import React from "react";
import { useState } from "react";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen ] = useState(false)

  const handleToggle = () => setNavbarOpen(!navbarOpen)

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return(
    <nav className="text-seeweed bg-transparent text-3xl">
      <div className="flex justify-between relative z-40 wrapper py-4">
        <a href="/" className="">Home</a>
        <button onClick={handleToggle} className="">{ navbarOpen ? "Close": "Open" }</button>
      </div>
      <div className="flex flex-col wrapper">
        <ul className={`overflow-hidden fixed top-0 left-0 bottom-0 h-screen z-10 ${navbarOpen ? "showMenu w-full" : "w-0"}`}>
          <li className="text-3xl text-center py-4 mb-4 border-b border-gray-50">
            <a href="#about"
            className="px-1"
            onClick={() => closeMenu()}
            >
            About</a>
          </li>
          <li className="text-3xl text-center py-4 mb-4 border-b border-gray-50">
            <a href="#projects" className="px-1"
            onClick={() => closeMenu()}>Projects</a>
          </li>
          <li className="text-3xl text-center py-4 mb-4 border-b border-gray-50">
            <a href="#contact" className="px-1"
            onClick={() => closeMenu()}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
