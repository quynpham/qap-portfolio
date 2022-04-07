import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return(
    <div className="flex flex-col content-center items-center h-auto min-h-[70px] p-4 bg-electricblue text-limegreen">
      <div className="display-block w-full max-w-[270px] m-auto my-2.5 px-7">
        <ul className="flex justify-between">
          <li className="hover:text-gray-50"><a href="https://github.com/quynpham" target="_blank" rel="noreferrer" ><FiGithub/></a>
          </li>
          <li className="hover:text-gray-50"><a href="https://www.linkedin.com/in/qappham/" target="_blank" rel="noreferrer" ><FiLinkedin/></a>
          </li>
          <li className="hover:text-gray-50"><a href="https://www.instagram.com/quynpham/" target="_blank" rel="noreferrer" ><FiInstagram/></a>
          </li>
        </ul>
      </div>
      <div className="p-2.5 hover:text-gray-50">
      <a href="mailto:qap.pham@gmail.com" rel="noopener noreferrer" target="_blank">qap.pham@gmail.com</a>
      </div>
      <p className="p-2.5">Designed and Built by Quynh Anh Pham</p>
    </div>
  )
}

export default Footer;
