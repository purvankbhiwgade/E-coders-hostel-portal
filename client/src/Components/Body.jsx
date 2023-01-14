import React from "react"
import '../App.css'
import AnimatedText from "../Components/AnimatedText";
import {
    createBrowserRouter,
    Link,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
]); 
const myStyle={
    backgroundImage:"url('https://vjti.ac.in/wp-content/uploads/2021/07/VJTI-LandingPageV3.jpg')",
    height:'100vh',
    marginTop:'-15px',
    fontSize:'80px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    // backgroundColor: "#000",
    // boxShadow: "inset 0 0 0 1000px rgba(133,133,133,.5')",
//   border: 1px solid black;
  opacity: '1',

};


function Body(){
    return (
        <div>
            <div style={myStyle} className="backGroundImage">
            <h1 className="pt-48 "><AnimatedText text="Welcome to VJTI Hostel!"/></h1>
            </div>
            <div className= "content pd-4">
                <h1 className="text-2xl">Hostel Notice</h1>
                <ul className="links">
                    <li><a href ="https://vjti.ac.in/wp-content/uploads/2023/01/230109_Modified_VJTI-Hostels-Admission-against-Vacant-Seats-1.pdf">Notice for VJTI Hostel Admission against vacant seats</a></li>
                    <li><a href ="https://vjti.ac.in/wp-content/uploads/2023/01/230109_Modified_VJTI-Hostels-Admission-against-Vacant-Seats-1.pdf">Hostel allotment against Vacant Seats FY. B.Tech AY2022-23</a></li>
                    <li><a href ="https://vjti.ac.in/wp-content/uploads/2022/11/221123_DSY-Degree-Hostel-Allotment-AY-2022-23.pdf"> VJTI Hostel Merit List- DSY Degree – AY 2022-23</a></li>
                    <li href =""></li>
                    <li href =""></li>
                    <li href =""></li>

                </ul>
            </div>

        </div>
    )
}

export default Body;
