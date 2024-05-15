import React from "react";
import NavBar from "./NavBar"

function Header(){

    return (
        <div className="hero">
            <div className="navBar child">
            <NavBar/>
            </div>
            
            <div className="heroText child">
                <h1>Welcome to the Art Gallary</h1>
                <p>Where Every Stroke Tells a Story: Experience Artistry at Its Finest!</p>
            </div>
            
        </div>
    )
}

export default Header;