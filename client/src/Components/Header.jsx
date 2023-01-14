import "../App.css";

import React from "react";

export default function Header() {
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
                  href=""
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-2xl">Hostel VJTI</span>
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
                  href=""
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Login</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href=""
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href=""
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
