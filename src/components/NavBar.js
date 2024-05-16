import React from "react";
import {Link} from 'react-router-dom';


function NavBar(){

    const navStyle = {
        color: 'white',
    }

    return (
    <div className="nav">
       
            <Link to="/" style={{ color: "white"}}>
                <a>Home</a>
            </Link>
            <Link to="/" style={{ color: "white"}}>
                <a>News</a>
            </Link>
            <Link to="/" style={{ color: "white"}}>
                <a>Contact</a>
            </Link>
            <Link to="/" style={{ color: "white"}}>
                <a>About</a>
            </Link>
  
    </div>
    )
}

export default NavBar;