import React from "react";
import "../App.css";
import AnimatedText from "../Components/AnimatedText";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
const myStyle = {
  backgroundImage:
    "url('https://vjti.ac.in/wp-content/uploads/2021/07/VJTI-LandingPageV3.jpg')",
  height: "83vh",
  marginTop: "-15px",
  fontSize: "80px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "white",
  opacity: "1",
};

function Body() {
  return (
    <div>
      <div style={myStyle} className="backGroundImage">
        <h1
          className="pt-32 uppercase font-extrabold h-full"
          style={{"background-color": "#00000094" }}
        >
          <AnimatedText text="Welcome to VJTI Hostel!" />
        </h1>
      </div>
      <div className="content bg-slate-200" style={{'width': 'min(500px, 90%)'}}>
        <h1 className="text-2xl px-4 py-2 border-b border-black/50 w-full uppercase font-semibold">Notice</h1>
        <ul className="links px-4 py-2 gap-2 flex flex-col">
          <li className="hover:underline hover:text-blue-600 transition duration-100">
            <a href="https://vjti.ac.in/wp-content/uploads/2023/01/230109_Modified_VJTI-Hostels-Admission-against-Vacant-Seats-1.pdf">
              Notice for VJTI Hostel Admission against vacant seats
            </a>
          </li>
          <li className="hover:underline hover:text-blue-600 transition duration-100">
            <a href="https://vjti.ac.in/wp-content/uploads/2023/01/230109_Modified_VJTI-Hostels-Admission-against-Vacant-Seats-1.pdf">
              Hostel allotment against Vacant Seats FY. B.Tech AY2022-23
            </a>
          </li>
          <li className="hover:underline hover:text-blue-600 transition duration-100">
            <a href="https://vjti.ac.in/wp-content/uploads/2022/11/221123_DSY-Degree-Hostel-Allotment-AY-2022-23.pdf">
              VJTI Hostel Merit List- DSY Degree – AY 2022-23
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;
