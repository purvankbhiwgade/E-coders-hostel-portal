// import React from "react"
// import '../App.css'
// import VJTILogo from "../image/VJTI-Logo.png"
// function Header(){
//     return (
//         <nav>
//             <div class = "Header-container">
//                 <img src = {VJTILogo} alt = "VJTI Logo" width = "50px" class = "img"/>
//                 <button class = "btn-left">Home</button>
//                 <button class = "btn-left">About Us</button>

//                 <button class = "btn-right">divider</button>
//                 <button class = "btn-right">Sign Up</button>
//                 <button class = "btn-right">Login</button>
//             </div>
//         </nav>
        
//     )
// }
// export default Header;

import React from "react";
import VJTILogo from "../image/VJTI-Logo.png"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src = {VJTILogo} alt = "VJTI Logo" width = "50px"/>  
            </a>

            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Home
            </a>

            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              About us
            </a>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Student Login</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Admin Login</span>
                </a>
              </li>
              
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


