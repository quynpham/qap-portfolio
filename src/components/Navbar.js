import React from "react";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import logoQap from "../assets/logo-png-limegreen.png";
import resume from "../assets/QAP-Junior-FrontEnd-Dev-2022.pdf";


const Navbar = () => {
  const [ navbar, setNavbar ] = useState(false)
  const [navbarOpen, setNavbarOpen ] = useState(false)

  const handleToggle = () => setNavbarOpen(!navbarOpen)

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return(
    <nav>
      <div className={`bg-electricblue text-limegreen text-4xl fixed w-screen flex justify-between z-40 wrapper p-4 sm:text-5xl ${navbar ? "bg-opacity-70" : ""}`}>
        <a href="/" className=""><img src={logoQap} alt="logo QAP" className="w-10 md:w-14" /> </a>
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
          <li className="text-electricblue text-3xl text-center py-4 mb-4 border-b border-limegreen">
            <a href={`${resume}`}
            target="_blank"
            rel="noreferrer"
            className="px-1"
            onClick={() => closeMenu()}
            >
            Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
