import React from "react"
import '../App.css'
import Typical from 'react-typical'
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

};


function Body(){
    return (
        <div>
            {/* <p>This is the body and router test</p> */}
            <div style={myStyle} className="backGroundImage">
            <br/>
            <h1><Typical
                steps={['Welcome to VJTI!', 1000]}
                loop={10}
                wrapper="b"
            />        
            </h1>
            </div>
            <div class = "content">
                Hostel Notice
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iusto! Reprehenderit molestiae iste cupiditate, maxime expedita labore sequi mollitia enim quisquam, ut sint quaerat inventore, suscipit error voluptatum optio culpa!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dicta facere. Quis dicta, aut, similique fugit vel temporibus impedit et culpa harum dolores mollitia veniam, natus animi cumque? Rerum, beatae.</li>
                </ul>
            </div>

            <img class = "testBackground" src = "https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png"/>
        </div>
    )
}

export default Body;
