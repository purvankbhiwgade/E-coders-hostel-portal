// import React from "react"
import '../App.css'
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

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center align-center justify-between">
          <div className="w-1/2 ">
          <ul className="flex justify-start align-between">
              <li className="nav-item">
                <a
                  className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-2xl">Hostel VJTI</span>
                </a>
              </li>

              {/* <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Admin Login</span>
                </a>
              </li> */}
              
              <li className="nav-item">
                <a className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="" >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              "w-1/2 lg:flex flex-grow items-center" +
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
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo" >
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


